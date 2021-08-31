<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class WmsRepIngreso
{
	protected $ci;
	private $lista;
	private $args;

	public function __construct()
	{
        $this->ci =& get_instance();
	}

	public function setLista($lista=[])
	{
		$this->lista = $lista;
	}

	public function setArgs($args=[])
	{
		$this->args = $args;
	}

	public function generarPdf()
	{
		$vista = $this->ci->load->view('rep/ingreso/imprimir', [
			"args"  => $this->args,
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

		return $pdf;
	}

	public function generarXls()
	{
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
		$hoja->setCellValue('A2', 'Del '.formatoFecha($this->args->fdel, 2).' al '.formatoFecha($this->args->fal, 2));

		$fila = 4;
		$hoja->setCellValue("A{$fila}", "Fecha");
		$hoja->setCellValue("B{$fila}", "# Documento");
		$hoja->setCellValue("C{$fila}", "Bodega");
		$hoja->setCellValue("D{$fila}", "Producto");
		$hoja->setCellValue("E{$fila}", "Cantidad");
		$hoja->setCellValue("F{$fila}", "Costo");
		$hoja->setCellValue("G{$fila}", "Total");

		if (isset($this->args->ds) && $this->args->ds) {
			$hoja->setCellValue("H{$fila}", "Desviación estandar");
		}

		$hoja->getStyle("A{$fila}:H{$fila}")->getFont()->setBold(true);

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
				
				if (isset($this->args->ds) && $this->args->ds) {
					$hoja->setCellValue("H{$fila}", number_format($row->desviacion, 2));
				}

				$total += $row->cantidad * $row->costo;
				$fila++;
			}

			$hoja->mergeCells("A{$fila}:F{$fila}");
			$hoja->setCellValue("A{$fila}", "Total");
			$hoja->setCellValue("G{$fila}", number_format($total, 2));

			$hoja->getStyle("A{$fila}:G{$fila}")->getFont()->setBold(true);
			$hoja->getStyle("A{$fila}:F{$fila}")->getAlignment()->setHorizontal("center");
			$hoja->getStyle("G{$fila}")->getAlignment()->setHorizontal("right");
			$hoja->getStyle("H{$fila}")->getAlignment()->setHorizontal("right");
		}

		foreach (range('A', 'H') as $col) {
			$hoja->getColumnDimension($col)->setAutoSize(true);
		}


		$hoja->setTitle("Detalle ingreso");

		return $excel;
	}

}

/* End of file WmsRepIngreso.php */
/* Location: ./application/wms/libraries/WmsRepIngreso.php */
