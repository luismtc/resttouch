<?php
defined('BASEPATH') OR exit('No direct script access allowed');
ini_set('memory_limit', -1);
ini_set('pcre.backtrack_limit', 100000000);
set_time_limit(0);

class Ingreso extends CI_Controller {
	private $lista=[];
	public function __construct()
	{
		parent::__construct();
		$this->load->model('reporte/Reporte_model');
	}

	public function generar_detalle()
	{
		$data["exito"] = false;
		$_GET = json_decode(file_get_contents("php://input"), true);

		$headerTipo = $this->input->get_request_header("Accept");

		if (!empty($headerTipo)) {
			$tipo = str_replace("application/", "", strtolower($headerTipo));
			$this->lista = $this->Reporte_model->getIngresoDetalle($_GET);
			if (isset($_GET["_excel"])) {

				if ($_GET["_excel"]) {
					$this->generarXls();
					die;
				} else {
					$this->generarPdf();
					die;
				}
			}else{
				$data["exito"] = true;
				$data["lista"] = $this->lista;
			}

		} else {
			$data["mensaje"] = "No se indico el formato de respuesta.";
		}
		$this->output
			 ->set_content_type('application/json')
			 ->set_output(json_encode($data));
	}

	private function generarPdf()
	{
		$vista = $this->load->view('rep/ingreso/imprimir', [
			"args" => $_GET,
			"lista" => $this->lista
		], true);
		$pdf   = new \Mpdf\Mpdf([
			'tempDir' => sys_get_temp_dir(), //produccion
			"format" => "letter",
			"lands"
		]);

		$pdf->AddPage("P");

		$pdf->WriteHTML($vista);
		$pdf->setFooter("Página {PAGENO} de {nb}  {DATE j/m/Y H:i:s}");
		$pdf->Output("Detalle de ingreso.pdf", "D");
	}

	private function generarXls()
	{
		$args = (object)$_GET;
		$excel = new PhpOffice\PhpSpreadsheet\Spreadsheet();
		$excel->getProperties()
			->setCreator("Restouch")
			->setTitle("Office 2007 xlsx DetalleIngreso")
			->setSubject("Office 2007 xlsx DetalleIngreso")
			->setKeywords("office 2007 openxml php");

		$excel->setActiveSheetIndex(0);
		$hoja = $excel->getActiveSheet();

		$hoja->getStyle('A1:G2')->getFont()->setBold(true);
		$hoja->getStyle('A1:G2')->getAlignment()->setHorizontal("center");
		$hoja->mergeCells('A1:G1');
		$hoja->mergeCells('A2:G2');

		$hoja->setCellValue('A1', 'Detalle de ingreso');
		$hoja->setCellValue('A2', 'Del '.formatoFecha($args->fdel, 2).' al '.formatoFecha($args->fal, 2));

		$fila = 4;
		$hoja->setCellValue("A{$fila}", "Fecha");
		$hoja->setCellValue("B{$fila}", "# Documento");
		$hoja->setCellValue("C{$fila}", "Bodega");
		$hoja->setCellValue("D{$fila}", "Producto");
		$hoja->setCellValue("E{$fila}", "Cantidad");
		$hoja->setCellValue("F{$fila}", "Costo");
		$hoja->setCellValue("G{$fila}", "Total");
		$hoja->getStyle("A{$fila}:G{$fila}")->getFont()->setBold(true);

		$fila++;
		if ($this->lista) {
			$total = 0;
			foreach($this->lista as $row) 
			{
				$hoja->setCellValue("A{$fila}", formatoFecha($row->fecha, 2));
				$hoja->setCellValue("B{$fila}", $row->num_documento);
				$hoja->setCellValue("C{$fila}", $row->bodega);
				$hoja->setCellValue("D{$fila}", $row->producto);
				$hoja->setCellValue("E{$fila}", number_format($row->cantidad, 2));
				$hoja->setCellValue("F{$fila}", number_format($row->costo, 2));
				$hoja->setCellValue("G{$fila}", number_format($row->cantidad * $row->costo, 2));
				$total += $row->cantidad * $row->costo;
				$fila++;
			}
			$hoja->mergeCells("A{$fila}:F{$fila}");
			$hoja->setCellValue("A{$fila}", "Total");
			$hoja->setCellValue("G{$fila}", number_format($total, 2));

			$hoja->getStyle("A{$fila}:G{$fila}")->getFont()->setBold(true);
			$hoja->getStyle("A{$fila}:F{$fila}")->getAlignment()->setHorizontal("center");
			$hoja->getStyle("G{$fila}")->getAlignment()->setHorizontal("right");
		}

		foreach (range('A', 'G') as $col) {
			$hoja->getColumnDimension($col)->setAutoSize(true);
		}


		$hoja->setTitle("Detalle ingreso");

		header("Content-Type: application/vnd.ms-excel");
		header("Content-Disposition: attachment;filename=DetalleIngreso.xls");
		header("Cache-Control: max-age=1");
		header("Expires: Mon, 26 Jul 1997 05:00:00 GTM");
		header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GTM");
		header("Cache-Control: cache, must-revalidate");
		header("Pragma: public");

		$writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($excel);
		$writer->save("php://output");
	}
}

/* End of file Ingreso.php */
/* Location: ./application/wms/controllers/rep/Ingreso.php */