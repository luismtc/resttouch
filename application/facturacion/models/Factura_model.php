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
	public $correo_receptor;
	private $namespaceURI = "http://www.sat.gob.gt/dte/fel/0.2.0";
	private $esAnulacion;
	private $certificador;

	public function __construct($id = '')
	{
		parent::__construct();
		$this->setTabla("factura");

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

	public function getTotal()
	{
		return $this->db
		->select("factura, sum(total) as total")
		->where("factura", $this->factura)
		->group_by("factura")
		->get("detalle_factura")
		->row()
		->total;
	}

	public function getDetalle($args = [])
	{
		if (count($args) > 0) {
			foreach ($args as $key => $row) {
				if(substr($key, 0, 1) != "_"){
					$this->db->where($key, $row);
				}
			}	
		}
		
		$datos = [];
		$tmp = $this->db
		->where("factura", $this->factura)
		->get("detalle_factura")
		->result();

		foreach ($tmp as $row) {
			$det = new Dfactura_model($row->detalle_factura);
			$row->articulo = $det->getArticulo();
			$row->subtotal = $row->total;
			$row->total = ($row->total - $row->descuento);
			
			$datos[] = $row;
		}
		return $datos;
	}

	public function copiarDetalle($factura)
	{
		$det = $this->db
		->where("factura", $this->factura)
		->get("detalle_factura")
		->result();

		foreach ($det as $row) {
			$this->db
			->set("factura", $factura)
			->set("articulo", $row->articulo)
			->set("cantidad", $row->cantidad)
			->set("precio_unitario", $row->precio_unitario)
			->set("total", $row->total)
			->set("monto_base", $row->monto_base)
			->set("monto_iva", $row->monto_iva)
			->set("bien_servicio", $row->bien_servicio)
			->set("descuento", $row->descuento)
			->insert("detalle_factura");
		}
	}

	public function getMesa()
	{
		$tmp = $this->db
					->select("g.numero as mesa")
					->join("detalle_factura b", "a.factura = b.factura")
					->join("detalle_factura_detalle_cuenta c", "c.detalle_factura = b.detalle_factura")
					->join("detalle_cuenta d", "c.detalle_cuenta = d.detalle_cuenta")
					->join("cuenta e", "d.cuenta_cuenta = e.cuenta")
					->join("comanda_has_mesa f", "e.comanda = f.comanda")
					->join("mesa g", "f.mesa = g.mesa")
					->where("a.factura", $this->getPK())
					->group_by(["a.factura", "g.numero"])
					->get("factura a");

		if ($tmp && $tmp->num_rows() > 0) {
			return $tmp->row();
		}

		return false;
	}

	public function getComanda()
	{
		$tmp = $this->db
		->select("e.comanda")
		->from("factura a")
		->join("detalle_factura b", "a.factura = b.factura")
		->join("detalle_factura_detalle_cuenta c", "c.detalle_factura = b.detalle_factura")
		->join("detalle_cuenta d", "c.detalle_cuenta = d.detalle_cuenta")
		->join("cuenta e", "d.cuenta_cuenta = e.cuenta")
		->where("a.factura", $this->getPK())
		->group_by("e.comanda")
		->get()
		->row();

		if ($tmp) {			
			return new Comanda_model($tmp->comanda);
		}

		return new Comanda_model();
	}

	public function cargarCertificadorFel()
	{
		$this->certificador = $this->db
		->where("certificador_fel", $this->certificador_fel)
		->get("certificador_fel")
		->row();
	}

	public function getCertificador()
	{
		return $this->certificador;
	}

	public function cargarFacturaSerie()
	{
		$this->serie = $this->db
							->where("factura_serie", $this->factura_serie)
							->get("factura_serie")
							->row();
	}

	public function cargarEmpresa()
	{		
		$this->empresa = $this->db
							  ->select("b.*")
							  ->join("empresa b", "b.empresa = a.empresa")
							  ->where("a.sede", $this->sede)
							  ->get("sede a")
							  ->row();
	}

	public function cargarSede() {
		$this->sedeFactura = $this->db								  
								  ->where("sede", $this->sede)
								  ->get("sede")
								  ->row();
	}

	public function cargarReceptor()
	{
		$this->receptor = $this->db
							   ->where("cliente", $this->cliente)
							   ->get("cliente")
							   ->row();
	}

	public function cargarMoneda()
	{
		$this->moneda = $this->db
							 ->where("moneda", $this->moneda)
							 ->get("moneda")
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

		$emisor->setAttribute('CodigoEstablecimiento', $this->sedeFactura->fel_establecimiento);

		if (!empty($this->empresa->correo_emisor)) {
			$emisor->setAttribute('CorreoEmisor', $this->empresa->correo_emisor);
		}

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
		$receptor->setAttribute('CorreoReceptor', str_replace(" ", "", str_replace(",",";",$this->correo_receptor)));

		
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
	        $item->appendChild($this->crearElemento('dte:Precio', $row->subtotal));
	        $item->appendChild($this->crearElemento('dte:Descuento', $row->descuento));

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
					'CodigoEscenario' => $this->certificador->frase_retencion_iva
				)));
			}

			if (in_array($this->serie->tipo, array('FCAM', 'FACT')) ) {
				$frases->appendChild($this->crearElemento('dte:Frase', '', array(
					'TipoFrase'       => 1,
					'CodigoEscenario' => $this->certificador->frase_retencion_isr
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
			$nodo = $this->xml->createElementNS($this->namespaceURI, $nombre, $valor);
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

		$xml = $this->getFelXml();
		$datos = $xml->getElementsByTagName('DatosGenerales')->item(0);
		$fecha = $datos->getAttribute('FechaHoraEmision');

		$receptor = $xml->getElementsByTagName('Receptor')->item(0);
		$IDReceptor = $receptor->getAttribute('IDReceptor');

		$emisor = $xml->getElementsByTagName('Emisor')->item(0);
		$NITEmisor = $emisor->getAttribute('NITEmisor');

		$this->iniciar_xml(2);
		$this->fecha_factura.=date("\TH:i:s");
		$DatosGenerales = $this->xml->getElementsByTagName('DatosGenerales')->item(0);
		$DatosGenerales->setAttribute('FechaEmisionDocumentoAnular', $fecha);
		$DatosGenerales->setAttribute('FechaHoraAnulacion', date("Y-m-d\TH:i:s"));

		$DatosGenerales->setAttribute('IDReceptor', $IDReceptor);
		$DatosGenerales->setAttribute('MotivoAnulacion', substr($comentario, 0, 255));
		$DatosGenerales->setAttribute('NITEmisor', $NITEmisor);
		$DatosGenerales->setAttribute('NumeroDocumentoAAnular', $this->fel_uuid);
	}

	public function anularInfile() {

	}

	public function getXml()
	{
		return $this->xml->saveXML();
	}

	public function enviar($args=array())
	{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $this->certificador->vinculo_firma);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
		curl_setopt($ch, CURLOPT_POST, 1);
		$datos = array(
			"llave" => $this->certificador->firma_llave,
			"archivo" => base64_encode(html_entity_decode($this->xml->saveXML())),
			"codigo" => $this->certificador->firma_codigo,
			"alias" => $this->certificador->firma_alias,
			"es_anulacion" => $this->esAnulacion
		);
		
		curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($datos));

		$jsonFirma = json_decode(curl_exec($ch));
		curl_close($ch);
		# para imprimir errores
		
		if (is_object($jsonFirma)) {
			if ($jsonFirma->resultado) {
				$datos = array(
					"nit_emisor"   => str_replace('-','',$this->empresa->nit),
					"xml_dte"      => $jsonFirma->archivo
				);

				$prefijo = $this->esAnulacion === 'S' ? 'AN':'VT';
				$identificador = "{$prefijo}-{$this->factura}";

				$url = $this->esAnulacion === 'N' ? $this->certificador->vinculo_factura : $this->certificador->vinculo_anulacion;

				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL, $url);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
				curl_setopt($ch, CURLOPT_POST, 1);
				curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($datos));
				curl_setopt($ch, CURLOPT_HTTPHEADER, array(
					"Content-Type: application/json",
					"Usuario: " . $this->certificador->usuario,
					"llave: " . $this->certificador->llave,
					"identificador: " . $identificador
				));

				$query = curl_exec($ch);

				curl_close($ch);

				$res = json_decode($query);

				if ($res->resultado) {
					if ($this->esAnulacion === 'S') {
						$this->fel_uuid_anulacion = $res->uuid;
					} else {
						$this->numero_factura = $res->numero;
						$this->serie_factura = $res->serie;
						$this->fel_uuid = $res->uuid;
					}

					$this->guardar();
				} else {
					foreach ($res->descripcion_errores as $row) {
						$error = explode('|', $row->mensaje_error);
						$this->setMensaje($error[count($error)-1]);
					}
				}

				return $res;
			} else {
				$this->setMensaje($jsonFirma->descripcion);
			}
		} else {
			$this->setMensaje("Error al firmar documento. Intente nuevamente.");
		}

		return null;
	}

	public function enviarDigiFact($args = [])
	{
		$this->load->helper('api');
		$link = $this->certificador->vinculo_factura;		
		$nit = str_repeat("0", 12-strlen($this->empresa->nit)).$this->empresa->nit;
		$datos = array(
			"Username" => "{$this->empresa->pais_iso_dos}.{$nit}.{$this->certificador->usuario}",
			"Password" => $this->certificador->llave
		);
		
		$jsonToken = json_decode(post_request($link, json_encode($datos)));

		if(isset($jsonToken->Token)) {
			$link = $this->certificador->vinculo_firma.$nit;
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

			$this->guardar();

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

	public function getFelRespuesta()
	{
		$tmp = $this->db
		->where('factura', $this->factura)
		->where('resultado is not ', 'null', false)
		->order_by('factura_fel', 'desc')
		->get('factura_fel')
		->result();

		foreach ($tmp as $row) {
			$json = json_decode($row->resultado);

			if (isset($json->resultado) && $json->resultado) {
				return $json;
			}
		}

		return null;
	}

	public function getFelXml()
	{
		$res = $this->getFelRespuesta();
		$xml = new DOMDocument();
		$xml->validateOnParse = true;
		$xml->loadXML(base64_decode($res->xml_certificado));

		return $xml;
	}

	public function get_facturas($args = [])
	{
		if (isset($args["_facturadas"])) {
			$this->db->where("a.numero_factura is not null");
		}

		if (isset($args["_vivas"])) {
			$this->db
			->where("a.numero_factura is not null")
			->where("a.fel_uuid_anulacion is null");
		}

		if (isset($args['fdel']) && isset($args['fal'])) {
			$this->db
				 ->where("a.fecha_factura >=", $args['fdel'])
				 ->where("a.fecha_factura <=", $args['fal']);
			unset($args['fdel']);
			unset($args['fal']);
		}

		if (isset($args['sede'])) {
			$this->db->where("a.sede", $args['sede']);
			unset($args['sede']);
		}

		if (isset($args['turno_tipo'])) {
			$this->db->where("g.turno_tipo", $args['turno_tipo']);
			unset($args['turno_tipo']);
		}

		if (count($args) > 0) {
			foreach ($args as $key => $row) {
				if(substr($key, 0, 1) != "_"){
					$this->db->where("a.{$key}", $row);
				}
			}	
		}

		return $this->db
					->select("a.*")
					->join("detalle_factura b", "a.factura = b.factura")
					->join("detalle_factura_detalle_cuenta c", "c.detalle_factura = b.detalle_factura", "left")
					->join("detalle_cuenta d", "c.detalle_cuenta = d.detalle_cuenta", "left")
					->join("cuenta e", "d.cuenta_cuenta = e.cuenta", "left")
					->join("comanda f", "e.comanda = f.comanda", "left")
					->join("turno g", "g.turno = f.turno", "left")
					->group_by("a.factura")
					->get("factura a")
					->result();
	}

	public function getPropina(){
		$tmp = $this->db
					->select("e.*")
					->from("factura a")
					->join("detalle_factura b", "a.factura = b.factura")
					->join("detalle_factura_detalle_cuenta c", "c.detalle_factura = b.detalle_factura")
					->join("detalle_cuenta d", "c.detalle_cuenta = d.detalle_cuenta")
					->join("cuenta e", "d.cuenta_cuenta = e.cuenta")
					->where("a.factura", $this->factura)
					->group_by("a.factura")
					->get();

		if($tmp && $tmp->num_rows() > 0) {
			return $tmp->result();
		}

		return [];
	}

	public function anularComandas()
	{
		$com = $this->getComanda();
		$com->estatus = 1;
		$com->guardar();
	}

}

/* End of file Factura_model.php */
/* Location: ./application/restaurante/models/Factura_model.php */