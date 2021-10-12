<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Bitacora extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model([
			'Bitacora_model',
			'Sede_model'
		]);
		$headers = $this->input->request_headers();
		$this->data = AUTHORIZATION::validateToken($headers['Authorization']);
		$this->output->set_content_type("application/json", "UTF-8");
	}

	public function get_tablas_bitacora()
	{
		$this->output->set_output(json_encode($this->Bitacora_model->get_tablas_bitacora()));
	}

	public function test_reporte()
	{
		$this->output->set_output(json_encode($this->Bitacora_model->reporte($_GET)));
	}

	public function reporte()
	{
		$sede = new Sede_model($this->data->sede);
		$emp = $sede->getEmpresa();

		$_POST = json_decode(file_get_contents('php://input'), true);

		$datos = $this->Bitacora_model->reporte($_POST);

		$excel = new PhpOffice\PhpSpreadsheet\Spreadsheet();
		$excel->getProperties()
			->setCreator("Restouch")
			->setTitle("Office 2007 xlsx Bitacora")
			->setSubject("Office 2007 xlsx Bitacora")
			->setKeywords("office 2007 openxml php");

		$excel->setActiveSheetIndex(0);
		$hoja = $excel->getActiveSheet();

		/*Encabezado*/
		$hoja->setCellValue('A1', $emp->nombre);
		$hoja->setCellValue('A2', $sede->nombre);
		$hoja->setCellValue('A3', 'Bitácora');

		$parametros = '';
		if (isset($_POST['fdel']) && !empty($_POST['fdel'])) {
			$parametros .= 'Del: '.formatoFecha($_POST['fdel'], 2);
		}

		if (isset($_POST['fal']) && !empty($_POST['fal'])) {
			if ($parametros !== '') {
				$parametros .= ' ';
			}
			$parametros .= 'Al: '.formatoFecha($_POST['fal'], 2);
		}

		if (isset($_POST['tabla']) && !empty($_POST['tabla'])) {
			if ($parametros !== '') {
				$parametros .= ' ';
			}
			$parametros .= "Tabla: {$_POST['tabla']}";
		}

		if (isset($_POST['usrname']) && !empty($_POST['usrname'])) {
			if ($parametros !== '') {
				$parametros .= ' ';
			}
			$parametros .= "Usuario: {$_POST['usrname']}";
		}

		if (isset($_POST['ultimos']) && !empty($_POST['ultimos'])) {
			if ($parametros !== '') {
				$parametros .= ' ';
			}
			$parametros .= "Últimos {$_POST['ultimos']} registros.";
		}

		if (!empty($parametros)) {
			$hoja->setCellValue('A4', $parametros);
		}

		$hoja->getStyle('A1:C4')->getFont()->setBold(true);

		$hoja->mergeCells('A1:G1');
		$hoja->mergeCells('A2:G2');
		$hoja->mergeCells('A3:G3');
		$hoja->mergeCells('A4:G4');

		$hoja->setCellValue('A6', 'Bitácora');
		$hoja->setCellValue('B6', 'Usuario');
		$hoja->setCellValue('C6', 'Acción');
		$hoja->setCellValue('D6', 'Fecha');
		$hoja->setCellValue('E6', 'Tabla');
		$hoja->setCellValue('F6', 'Registro');
		$hoja->setCellValue('G6', 'Comentario');

		$hoja->getStyle('A6:G6')->getFont()->setBold(true);

		$fila = 7;
		foreach($datos as $data) {
			$hoja->setCellValue("A{$fila}", $data->bitacora);
			$hoja->setCellValue("B{$fila}", $data->usuario);
			$hoja->setCellValue("C{$fila}", $data->accion);
			$hoja->setCellValue("D{$fila}", $data->fecha);
			$hoja->setCellValue("E{$fila}", $data->tabla);
			$hoja->setCellValue("F{$fila}", $data->registro);
			$hoja->setCellValue("G{$fila}", $data->comentario);
			$fila++;
		}		

		foreach (range('A', 'G') as $col) {
			$hoja->getColumnDimension($col)->setAutoSize(true);
		}

		$hoja->setAutoFilter('A6:G6');

		header("Content-Type: application/vnd.ms-excel");
		header("Content-Disposition: attachment;filename=Bitacora.xlsx");
		header("Cache-Control: max-age=1");
		header("Expires: Mon, 26 Jul 1997 05:00:00 GTM");
		header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GTM");
		header("Cache-Control: cache, must-revalidate");
		header("Pragma: public");

		$writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($excel);
		$writer->save("php://output");
	}
}
