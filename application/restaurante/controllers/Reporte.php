<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Reporte extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->add_package_path('application/facturacion');
		$this->load->model(['Reporte_model', 'Factura_model', 'Dfactura_model']);

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
		$mpdf = new \Mpdf\Mpdf(['format' => 'Legal']);
		$mpdf->WriteHTML($this->load->view('caja', $data, true));
		$mpdf->Output("Reporte de Caja.pdf", "D");	
	}

	public function factura()
	{
		$_GET['sede'] = $this->data->sede;
		$facts = $this->Factura_model->get_facturas($_GET);
		$data = $_GET;
		$mpdf = new \Mpdf\Mpdf(['format' => 'Legal']);
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

}

/* End of file Reporte.php */
/* Location: ./application/restaurante/controllers/Reporte.php */