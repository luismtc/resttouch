<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Reporte extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model(['Reporte_model', 'Articulo_model', 'Receta_model']);

		$this->load->helper(['jwt', 'authorization']);

		$headers = $this->input->request_headers();
		if (isset($headers['Authorization'])) {
			$this->data = AUTHORIZATION::validateToken($headers['Authorization']);
		}
	}

	public function existencia()
	{
		$rpt = new Reporte_model();
		$data = [];
		if (!isset($_GET['sede'])) {			
			$_GET['sede'] = $this->data->sede;
			$data['sede'] = $this->data->sede;
		}

		$arts = $this->Catalogo_model->getArticulo($data);
		$args = [
			"cliente" => "",
			"sub_cuenta" => "",
			"fecha" => formatoFecha($this->input->get('fecha'), 2)
		];

		foreach ($arts as $row) {
			$art = new Articulo_model($row->articulo);
			$art->actualizarExistencia();
			$args["reg"][] = $art->getExistencias($_GET);

		}

		$pdf   = new \Mpdf\Mpdf([
			'tempDir' => sys_get_temp_dir(), //produccion
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

	public function kardex()
	{
		$datos = [];
		$rpt = new Reporte_model();
		$rpt->setTipo(2);
		$exist = $rpt->getExistencias($_GET);

		foreach ($exist as $row) {
			if ($row->existencia > 0) {
				$dato[$row->articulo] = [
					"codigo" => $row->codigo,
					"articulo" => $row->articulo,
					"descripcion" => $row->descripcion,
					"antiguedad"  => $row->existencia,
					"ingresos"    => 0,
					"salidas"     => 0,
					"detalle" 	  => []
				];
			}
			
		}

		$rpt->setTipo(3);
		$reg = $rpt->getExistencias($_GET);

		foreach ($reg as $row) {
			$ingresos = ($row->tipo == 1) ? $row->cantidad : 0;
			$salidas  = ($row->tipo == 2) ? $row->cantidad : 0;

			if (isset($dato[$row->articulo])) {
				$dato[$row->articulo]['ingresos'] += $ingresos;
				$dato[$row->articulo]['salidas'] += $salidas;
				$dato[$row->articulo]['detalle'][] = $row;

			} else{
				$dato[$row->articulo] = [
					"articulo" => $row->articulo,
					"codigo" => $row->codigo,
					"descripcion" => $row->descripcion,
					"antiguedad"  => 0,
					"ingresos"    => $ingresos,
					"salidas"     => $salidas,
					"detalle"	  => [$row]
				];
			}
			usort($dato[$row->articulo]["detalle"], function($a, $b) {
				return strtotime($b->fecha) < strtotime($a->fecha);
			});
		}

		$args = [
			"articulos" => $dato,
			"fdel" => $this->input->get("fdel"),
			"fal" => $this->input->get("fal")
		];
		
		$vista = $this->load->view('reporte/kardex/imprimir', $args, true);
		$pdf   = new \Mpdf\Mpdf([
			'tempDir' => sys_get_temp_dir(), //produccion
			"format" => "letter", 
			"lands"
		]);

		$pdf->AddPage("L");
		$pdf->WriteHTML($vista);
		$pdf->setFooter("Página {PAGENO} de {nb}  {DATE j/m/Y H:i:s}");
		$pdf->Output("Kardex.pdf", "D");

	}

}

/* End of file Reporte.php */
/* Location: ./application/wms/controllers/Reporte.php */