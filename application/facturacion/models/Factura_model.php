<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Factura_model extends General_model {

	public $factura;
	public $usuario;
	public $factura_serie;
	public $cliente;
	public $numero_factura ;
	public $serie_factura;
	public $fecha_factura;
	public $fel_uuid;
	public $fel_uuid_anulacion;
	public $moneda;
	public $certificador_fel;
	public $exenta = false;
	public $notas;
	public $sede;

	public function __construct($id = '')
	{
		parent::__construct();
		$this->setTabla("resttouch.factura");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function setDetalle($args, $id="")
	{
		$det = new Dfactura_model($id);
		$args['factura'] = $this->factura;
		$menu = $this->Catalogo_model->getModulo(["modulo" => 4, "_uno" => true]);
		$validar = (!isset($args['detalle_cuenta']) || !empty($menu));
		$cantidad = 0;
		$articulo = null;
		if (empty($id)) {
			$articulo = $args['articulo'];
			$cantidad = $args['cantidad'];
		} else {
			if($det->articulo == $args['articulo'] && $det->cantidad < $args['cantidad']){
				$articulo = $det->articulo;
				$cantidad = $args['cantidad'] - $det->cantidad;
			} else if($det->articulo != $args['articulo']){				
				$articulo = $args['articulo'];
				$cantidad = $args['cantidad'];
			} else {
				$articulo = $args['articulo'];
				$validar = false;
			}
		}
		$art = new Articulo_model($articulo);
		$oldart = new Articulo_model($det->articulo);

		if (isset($args['detalle_cuenta']) ||empty($menu) || !$validar || $art->existencias >= $cantidad) {
			$result = $det->guardar($args);

			if($result) {
				if (isset($args['detalle_cuenta'])) {				
					$this->db
						 ->set("detalle_factura", $det->detalle_factura)
						 ->set("detalle_cuenta", $args['detalle_cuenta'])
						 ->insert("detalle_factura_detalle_cuenta");
				}
				$art->actualizarExistencia();
				if ($oldart->articulo) {					
					$oldart->actualizarExistencia();
				}
				return $det;
			} else {
				$this->mensaje = $det->getMensaje();

				return false;			
			}	
		} else {
			$this->setMensaje("No hay existencias suficientes para este articulo, existencia {$art->existencias}");
		}
		
		return false;
	}

	public function getDetalle($args = [])
	{
		if (count($args) > 0) {
			foreach ($args as $key => $row) {
				if($key != "_uno"){
					$this->db->where($key, $row);
				}
			}	
		}
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

	public function cargarCertificadorFel()
	{
		$this->certificador_fel = $this->db
									   ->where("certificador_fel", $this->certificador_fel)
									   ->get("certificador_fel")
									   ->row();
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
		$this->empresa = $this->db
							  ->select("b.*")
							  ->join("resttouch.empresa b", "b.empresa = a.empresa")
							  ->where("a.sede", $this->sede)
							  ->get("resttouch.sede a")
							  ->row();
	}

	public function cargarSede() {
		$this->sedeFactura = $this->db								  
								  ->where("sede", $this->sede)
								  ->get("resttouch.sede")
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
	        $impuesto->appendChild($this->crearElemento('dte:CodigoUnidadGravable', ($this->exenta==1?2:1)));

	        
        	if ($this->exenta) {
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
		$this->esAnulacion = 'N';
	}

	public function procesarAnulacion($args = [])
	{
		$comentario = 'ERROR DE EMISIÓN';
		if(isset($args['comentario'])) {
			$comentario = $args['comentario'];
		}

		$this->esAnulacion = "S";

		$this->iniciar_xml(2);
		$this->fecha_factura.=date("\TH:i:s");
		$DatosGenerales = $this->xml->getElementsByTagName('DatosGenerales')->item(0);
		$DatosGenerales->setAttribute('FechaEmisionDocumentoAnular', $this->fecha_factura);
		$DatosGenerales->setAttribute('FechaHoraAnulacion', date("Y-m-d\TH:i:s"));

		$DatosGenerales->setAttribute('IDReceptor', str_replace('-','',($this->exenta?'CF':$this->receptor->nit)));
		$DatosGenerales->setAttribute('MotivoAnulacion', substr($comentario, 0, 255));
		$DatosGenerales->setAttribute('NITEmisor', str_replace('-','',$this->empresa->nit));
		$DatosGenerales->setAttribute('NumeroDocumentoAAnular', $this->fel_uuid);
		$this->certificador_fel->vinculo_firma = $this->certificador_fel->vinculo_anulacion;
	}

	public function anularInfile() {

	}

	public function getXml()
	{
		return $this->xml->saveXML();
	}

	public function enviar($args=array())
	{
		$vinculo = "https://signer-emisores.feel.com.gt/sign_solicitud_firmas/firma_xml";
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $vinculo);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
		curl_setopt($ch, CURLOPT_POST, 1);
		$datos = array(
			"llave" => "9c748d9bcf1455655b9e9a5c34525570",
			"archivo" => base64_encode(html_entity_decode($this->xml->saveXML())),
			"codigo" => "1000000000K",
			"alias" => "DEMO_FEL",
			"es_anulacion" => $this->esAnulacion
		);
		
		# Datos que recibe el web service para obtener firma para el documento
		# Debe pasar por el servidor gacela.c807.com por cuestiones de versión de PHP
		curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($datos));

		$jsonFirma = json_decode(curl_exec($ch));
		curl_close($ch);
		# para imprimir errores
		
		if ($jsonFirma->resultado) {
			$vinculo = "https://certificador.feel.com.gt/fel/certificacion/dte";
			# Datos para el envío del documento para la ceritificación por SAT
			$datos = array(
				"correo_copia" => "",
				"nit_emisor"   => str_replace('-','','1000000000K'),
				"xml_dte"      => $jsonFirma->archivo
			);

			$prefijo = $this->esAnulacion === 'S' ? 'AN':'VT';
			#$prefijo = 'VT';
			$identificador = "{$prefijo}-{$this->factura}";
			

			$params = array(
				'llave' => "9c748d9bcf1455655b9e9a5c34525570",
				'datos' => json_encode($datos),
				'usuario' => "DEMO_FEL",
				'identificador' => $identificador
			);

			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $vinculo);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($params));
			curl_setopt($ch, CURLOPT_HTTPHEADER, array(
				"Content-Type: application/json",
				"Usuario: C807",
				"llave: E5DC9FFBA5F3653E27DF2FC1DCAC824D",
				"identificador: " . $identificador
			));

			$query = curl_exec($ch);

			curl_close($ch);

			return $query;
		} else {
			return $jsonFirma;
		}
	}

	public function enviarDigiFact($args = [])
	{
		$this->load->helper('api');
		$link = $this->certificador_fel->vinculo_factura;		
		$nit = str_repeat("0", 12-strlen($this->empresa->nit)).$this->empresa->nit;
		$datos = array(
			"Username" => "{$this->empresa->pais_iso_dos}.{$nit}.{$this->certificador_fel->usuario}",
			"Password" => $this->certificador_fel->llave
		);
		
		$jsonToken = json_decode(post_request($link, json_encode($datos)));

		if(isset($jsonToken->Token)) {
			$link = $this->certificador_fel->vinculo_firma.$nit;
			$header = ["Authorization: {$jsonToken->Token}"];
			$datos = html_entity_decode($this->xml->saveXML());
			$res = json_decode(post_request($link, $datos, $header));

			if($res->Codigo == 1 && $this->esAnulacion === 'N') {
				$this->numero_factura = $res->Serie;
				$this->serie_factura = $res->NUMERO;
				$this->fel_uuid = $res->Autorizacion;
			} else if ($this->esAnulacion === 'S') {
				$this->fel_uuid_anulacion = $res->Autorizacion;
			}

			return $res;
		}

		return $jsonToken;
	}

	public function setBitacoraFel($args = [])
	{
		$this->db->set('factura', $this->factura)
				 ->set('resultado', $args['resultado'])
				 ->set('usuario', $this->usuario)
				 ->insert('factura_fel');

		return $this->db->affected_rows() > 0;
	}

}

/* End of file Factura_model.php */
/* Location: ./application/restaurante/models/Factura_model.php */