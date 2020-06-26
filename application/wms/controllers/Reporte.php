<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Reporte extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Reporte_model');

		$this->load->helper(['jwt', 'authorization']);

		$headers = $this->input->request_headers();
		if (isset($headers['Authorization'])) {
			$this->data = AUTHORIZATION::validateToken($headers['Authorization']);
		}
	}

	public function existencia()
	{
		$rpt = new Reporte_model();
		$_GET['sede'] = $this->data->sede;

		$exist = $rpt->getExistencias($_GET);
		$args = [
			"reg" => $exist,
			"cliente" => "",
			"sub_cuenta" => "",
			"fecha" => formatoFecha($this->input->get('fecha'), 2)
		];
		$pdf   = new \Mpdf\Mpdf([
			//'tempDir' => sys_get_temp_dir(), //produccion
			"format" => "letter", 
			"lands"
		]);
		$vista = $this->load->view('reporte/existencia/imprimir', $args, true);
		$rand  = rand();
		$pdf->AddPage("L");
		$pdf->WriteHTML($vista);
		$pdf->setFooter("Página {PAGENO} de {nb}  {DATE j/m/Y H:i:s}");
		$pdf->Output("Existencias_{$rand}.pdf", "D");

	}

}

/* End of file Reporte.php */
/* Location: ./application/wms/controllers/Reporte.php */