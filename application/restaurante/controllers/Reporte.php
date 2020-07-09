<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class Reporte extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->add_package_path('application/facturacion');
		$this->load->model([
			'Reporte_model', 
			'Factura_model', 
			'Dfactura_model', 
			'Comanda_model',
			'Area_model',
			'Dcomanda_model',
			'Cuenta_model',
			'Usuario_model'
		]);

		$this->load->helper(['jwt', 'authorization']);

		$headers = $this->input->request_headers();
		if (isset($headers['Authorization'])) {
			$this->data = AUTHORIZATION::validateToken($headers['Authorization']);
		}
	}

	public function caja()
	{
		$_GET['sede'] = $this->data->sede;
		$data = $_GET;
		$data['ingresos'] = $this->Reporte_model->get_ingresos($_GET);
		$data['comanda'] = $this->Reporte_model->getRangoComandas($_GET);
		$mpdf = new \Mpdf\Mpdf([
			//'tempDir' => sys_get_temp_dir(),
			'format' => 'Legal'
		]);
		$mpdf->WriteHTML($this->load->view('caja', $data, true));
		$mpdf->Output("Reporte de Caja.pdf", "D");	
	}

	public function factura()
	{
		$_GET['sede'] = $this->data->sede;
		$facts = $this->Factura_model->get_facturas($_GET);
		$data = $_GET;
		$mpdf = new \Mpdf\Mpdf([
			//'tempDir' => sys_get_temp_dir(),
			'format' => 'Legal'
		]);
		$data['facturas'] = [];
		foreach ($facts as $row) {
			$fac = new Factura_model($row->factura);
			$fac->mesa = $fac->getMesa();
			$fac->cargarReceptor();
			$prop = $fac->getPropina();
			$det = $fac->getDetalle();
			$fac->total = number_format(suma_field($det, "total"),2);
			$fac->propina = number_format(suma_field($prop, "propina_monto"),2);
			$data['facturas'][] = $fac;
		}

		//$mpdf->AddPage();
		$mpdf->WriteHTML($this->load->view('detalle_factura', $data, true));
		$mpdf->Output("Detalle de Facturas.pdf", "D");	
	}

	public function comanda()
	{
		$_GET['sede'] = $this->data->sede;
		$tmp = $this->Comanda_model->getComandas($_GET);
		$datos = [];
		$data = $_GET;
		$mpdf = new \Mpdf\Mpdf([
			'tempDir' => sys_get_temp_dir(),
			'format' => 'Legal'
		]);
		foreach ($tmp as $row) {
			$comanda = new Comanda_model($row->comanda);
			$datos[] = $comanda->getComanda();

		}

		$data['comanda'] = $datos;
			
		$mpdf->WriteHTML($this->load->view('comanda', $data, true));
		$mpdf->Output("Detalle de Comandas.pdf", "D");	
	}

	public function autoconsulta()
	{
		$req = json_decode(file_get_contents('php://input'), true);
		$req['sede'] = $this->data->sede;
		$datos = $this->Reporte_model->autoconsulta($req);
		$excel = new Spreadsheet();
		$excel->getProperties()
			  ->setCreator("Restouch")
			  ->setTitle("Office 2007 xlsx Dinamico")
			  ->setSubject("Office 2007 xlsx Dinamico")
			  ->setKeywords("office 2007 openxml php");

		$excel->setActiveSheetIndex(0);
		$hoja = $excel->getActiveSheet();
		if ($datos) {
			$nombres    = array_keys((array)$datos[0]);
			$cntnombres = count($nombres);

			$hoja->fromArray($nombres, null, "A5");
			
			$pos = 6;
			foreach ($datos as $key => $row) {
				$hoja->fromArray((array) $row, null, "A{$pos}");
				$pos+=1;
			}

			$hoja->setTitle("Dinamico");

			for ($i=0; $i <= $cntnombres ; $i++) { 
				$hoja->getColumnDimensionByColumn($i)->setAutoSize(true);
			}
		}
		
		header("Content-Type: application/vnd.ms-excel");
		header("Content-Disposition: attachment;filename=Dinamico.xlsx");
		header("Cache-Control: max-age=1");
		header("Expires: Mon, 26 Jul 1997 05:00:00 GTM");
		header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GTM");
		header("Cache-Control: cache, must-revalidate");
		header("Pragma: public");

		$writer = new Xlsx($excel);
		$writer->save("php://output");

		#$obwrite = PHPExcel_IOFactory::createWriter($excel, "Excel5");
		#$obwrite->save("php://output");
	}

}

/* End of file Reporte.php */
/* Location: ./application/restaurante/controllers/Reporte.php */