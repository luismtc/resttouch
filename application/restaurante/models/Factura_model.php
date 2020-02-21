<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Factura_model extends General_model {

	public $factura;
	public $usuario;
	public $factura_serie;
	public $cliente;
	public $numero_factura;
	public $serie_factura;
	public $fecha_factura;
	public $fel_uuid;
	public $fel_uuid_anulacion;
	public $moneda;
	public $certificador_fel;
	public $exenta = false;
	public $notas;

	public function __construct($id = '')
	{
		parent::__construct();
		$this->setTabla("resttouch.factura");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function setDetalle($args)
	{
		$det = new Dfactura_model();
		$args['factura'] = $this->factura;
		$result = $det->guardar($args);

		if(!$result) {
			$this->mensaje = $det->getMensaje();
		}

		return $det;
	}

	public function getDetalle()
	{
		$datos = [];
		$tmp = $this->db
		->where("factura", $this->factura)
		->get("resttouch.detalle_factura")
		->result();

		foreach ($tmp as $row) {
			$det = new Dfactura_model($row->detalle_factura);
			$row->articulo = $det->getArticulo();
			$datos[] = $row;
		}
		return $datos;
	}

	public function cargarFacturaSerie()
	{
		$this->serie = $this->db
							->where("factura_serie", $this->factura_serie)
							->get("resttouch.factura_serie")
							->row();
	}

	public function cargarEmpresa()
	{
		$usu = $this->Usuario_model->find(['usuario' => $this->usuario, "_uno" => true]);

		$this->empresa = $this->db
							  ->select("b.*")
							  ->join("resttouch.empresa b", "b.empresa = a.empresa")
							  ->where("a.sede", $usu->sede)
							  ->get("resttouch.sede a")
							  ->row();
	}

	public function cargarReceptor()
	{
		$this->receptor = $this->db
							   ->where("cliente", $this->cliente)
							   ->get("resttouch.cliente")
							   ->row();
	}

	public function cargarMoneda()
	{
		$this->moneda = $this->db
							 ->where("moneda", $this->moneda)
							 ->get("resttouch.moneda")
							 ->row();
	}

	public function set_datos_generales($args=array())
	{
		$datosGenerales = $this->xml->getElementsByTagName('DatosGenerales')->item(0);
		$datosGenerales->setAttribute('CodigoMoneda', $this->moneda->codigo);

		$fecha = $this->fecha_factura;	
		

		$datosGenerales->setAttribute('FechaHoraEmision', $fecha.date("\TH:i:s-06:00"));

		$datosGenerales->setAttribute('NumeroAcceso', '100000000');

		if ($this->serie !== null) {
			$datosGenerales->setAttribute('Tipo', $this->serie->tipo);
		}

		/*if ($this->exenta) {
			if ($this->ncredito === null) {
				$datosGenerales->setAttribute('Exp', 'SI');
				$this->Exportacion();
			}
		}*/
	}

	public function iniciar_xml($tipo = '')
	{
		$this->xml = new DOMDocument();
		$this->xml->validateOnParse = true;

		switch ($tipo) {
			case 2: # Anulación 
				$this->xml->loadXML($this->serie->xmldte_anulacion);
				break;
			
			default:
				$this->xml->loadXML($this->serie->xmldte);
				break;
		}
	}

	public function set_emisor($args=array())
	{
		$emisor = $this->xml->getElementsByTagName('Emisor')->item(0);
		$emisor->setAttribute('AfiliacionIVA', 'GEN');
		$emisor->setAttribute('CodigoEstablecimiento', 1);
		$emisor->setAttribute('CorreoEmisor', $this->empresa->correo_emisor);
		$emisor->setAttribute('NITEmisor', str_replace('-','',$this->empresa->nit));
		$emisor->setAttribute('NombreComercial', $this->empresa->nombre_comercial);
		$emisor->setAttribute('NombreEmisor', $this->empresa->nombre);

		$direccionEmisor = $this->xml->getElementsByTagName('DireccionEmisor')->item(0);
		$direccionEmisor->appendChild($this->crearElemento('dte:Direccion', $this->empresa->direccion, array(), true));
		$direccionEmisor->appendChild($this->crearElemento('dte:CodigoPostal', $this->empresa->codigo_postal));
		$direccionEmisor->appendChild($this->crearElemento('dte:Municipio', $this->empresa->municipio));
		$direccionEmisor->appendChild($this->crearElemento('dte:Departamento', $this->empresa->departamento));
		$direccionEmisor->appendChild($this->crearElemento('dte:Pais', $this->empresa->pais_iso_dos));

		/*if ($this->serie->tipo === 'FCAM') {
			$this->AbonosFacturaCambiaria();
		}*/
	}

	public function set_receptor($args=array())
	{
		# $correos = explode(",", $this->cliente->correo_factura);
		$receptor = $this->xml->getElementsByTagName('Receptor')->item(0);
		# $receptor->setAttribute('CorreoReceptor', $correos[0]);
		$receptor->setAttribute('CorreoReceptor', str_replace(" ", "", str_replace(",",";",$this->receptor->correo)));

		
		$receptor->setAttribute('IDReceptor', str_replace('-','',($this->exenta?'CF':$this->receptor->nit)));
		

		$receptor->setAttribute('NombreReceptor', $this->receptor->nombre);

		$direccionReceptor = $this->xml->getElementsByTagName('DireccionReceptor')->item(0);
		$direccionReceptor->appendChild($this->crearElemento('dte:Direccion', $this->receptor->direccion, array(), true));
		$direccionReceptor->appendChild($this->crearElemento('dte:CodigoPostal', 01012));
		$direccionReceptor->appendChild($this->crearElemento('dte:Municipio', 'Guatemala'));
		$direccionReceptor->appendChild($this->crearElemento('dte:Departamento', 'Guatemala'));
		$direccionReceptor->appendChild($this->crearElemento('dte:Pais', 'GT'));
	}

	public function set_servicios_propios($args=array())
	{
        $items = $this->xml->getElementsByTagName('Items')->item(0);

    	$montoIva = 0;
    	$montoTotal = 0;
    	

    	foreach ($this->getDetalle() as $key => $row) {
    		$item = $this->crearElemento('dte:Item','',array(
				'BienOServicio' => $row->bien_servicio,
				'NumeroLinea'   => $key+1
    		));
	        
	        $item->appendChild($this->crearElemento('dte:Cantidad', $row->cantidad));
	        $item->appendChild($this->crearElemento('dte:UnidadMedida', 'PZA'));
	        $item->appendChild($this->crearElemento('dte:Descripcion', $row->articulo->descripcion, array(), true));
	        $item->appendChild($this->crearElemento('dte:PrecioUnitario', round(($row->precio_unitario), 6)));
	        $item->appendChild($this->crearElemento('dte:Precio', $row->total));
	        $item->appendChild($this->crearElemento('dte:Descuento', 0));

        	$impuestos = $this->crearElemento('dte:Impuestos');
	        $impuesto = $this->crearElemento('dte:Impuesto');
	        $impuesto->appendChild($this->crearElemento('dte:NombreCorto', 'IVA'));
	        $impuesto->appendChild($this->crearElemento('dte:CodigoUnidadGravable', ($this->exenta===true?2:1)));

	        
        	if ($this->exenta === true) {
        		$valorBase = $row->total;
	        	$valorIva = 0;
        	} else {
        		$valorBase = $row->monto_base;
	        	$valorIva = $row->monto_iva;
        	}

	        $montoIva += $valorIva;

	        $impuesto->appendChild($this->crearElemento('dte:MontoGravable', $valorBase));
	        $impuesto->appendChild($this->crearElemento('dte:MontoImpuesto', $valorIva));

	        $impuestos->appendChild($impuesto);
	        $item->appendChild($impuestos);

	        $item->appendChild($this->crearElemento('dte:Total', $row->total));
	        $items->appendChild($item);
	        $montoTotal+= $row->total;
    	}

    	$totalIva = $this->xml->getElementsByTagName('TotalImpuesto')->item(0);
    	$totalIva->setAttribute('NombreCorto', 'IVA');
    	$totalIva->setAttribute('TotalMontoImpuesto', ($this->exenta ? '0.00':$montoIva));

    	$granTotal = $this->xml->getElementsByTagName('GranTotal')->item(0);
    	$granTotal->nodeValue = $montoTotal;
        
	}

	public function set_frases($args = array())
	{
		$frases = $this->xml->getElementsByTagName('Frases')->item(0);

		# Esto es para agregar frase de Exento de IVA
		if ($this->factura) {
			if ($this->exenta) {
				$frases->appendChild($this->crearElemento('dte:Frase', '', array(
					'TipoFrase'       => 4,
					'CodigoEscenario' => 1 # Por defecto se está colocando que es por exportación
				)));
			}

			if ($this->empresa->agente_retenedor == 1) {
				$frases->appendChild($this->crearElemento('dte:Frase', '', array(
					'TipoFrase'       => 2,
					'CodigoEscenario' => 1
				)));
			}

			if (in_array($this->serie->tipo, array('FCAM', 'FACT')) ) {
				$frases->appendChild($this->crearElemento('dte:Frase', '', array(
					'TipoFrase'       => 1,
					'CodigoEscenario' => 1
				)));
			}
		}
	}

	public function crearElemento($nombre, $valor='', $attr=array(), $cdata = false)
	{
		if ($cdata) {
			$txt = $this->xml->createCDATASection($valor);
			$valor = '';
		}

		# Sin NS
		if (isset($attr['SNS'])) {
			$nodo = $this->xml->createElement($nombre, $valor);
			unset($attr['SNS']);
		} else {
			$nodo = $this->xml->createElementNS("http://www.sat.gob.gt/dte/fel/0.1.0", $nombre, $valor);
		}

		if (is_array($attr) && count($attr) > 0) {
			foreach ($attr as $key => $value) {
				$nodo->setAttribute($key, $value);
			}
		}

		if ($cdata) {
			$nodo->appendChild($txt);
		}

		return $nodo;
	}

	public function procesar_factura()
	{
		$this->iniciar_xml();
		$this->set_datos_generales();
		$this->set_emisor();
		$this->set_receptor();
		$this->set_servicios_propios();		
		$this->set_frases();
	}

	public function getXml()
	{
		return $this->xml->saveXML();
	}

}

/* End of file Factura_model.php */
/* Location: ./application/restaurante/models/Factura_model.php */