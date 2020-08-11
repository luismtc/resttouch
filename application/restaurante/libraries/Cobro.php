<?php 
/**
 * summary
 */
class Cobro extends SoapClient
{
    private $empresa;
    private $request;
    private $wsdl = "https://ics2wstest.ic3.com/commerce/1.x/transactionProcessor/CyberSourceTransaction_1.167.wsdl";

    public function __construct($empresa = null, $options = [])
    {
        parent::__construct($this->wsdl, $options);
        $this->empresa = $empresa;
    }

    public function setVenta($venta)
    {
    	$request = new stdClass();
    	$request->merchantID = $this->empresa->visa_merchant_id;

		$request->merchantReferenceCode = uniqid();

		$request->clientLibrary = "PHP";
		$request->clientLibraryVersion = phpversion();
		$request->clientEnvironment = php_uname();

		$ccAuthService = new stdClass();
		$ccAuthService->run = "true";
		$request->ccAuthService = $ccAuthService;

		$billTo = new stdClass();
		$billTo->firstName = $venta->nombre;
		$billTo->lastName = $venta->apellido;
		$billTo->street1 = $venta->direccion;
		$billTo->city = $venta->ciudad;
		$billTo->country = "GT";
		$billTo->email = $venta->email;
		$request->billTo = $billTo;

		$card = new stdClass();
		$card->accountNumber = $venta->tarjeta->numero;
		$card->expirationMonth = $venta->tarjeta->expiracion_mes;
		$card->expirationYear = $venta->tarjeta->expiracion_anio;
		$request->card = $card;

		$purchaseTotals = new stdClass();
		$purchaseTotals->currency = "GTQ";
		$request->purchaseTotals = $purchaseTotals;
		$request->item = array();
		
		foreach ($venta->detall as $key => $row) {
			$item = new stdClass();
			$item->unitPrice = $row->precio_unitario;
			$item->quantity = $row->cantidad;
			$item->id = $key + 1;
			$request->item[] = $item;
		}

		$this->request = $request;
    }

    public function setTestVenta()
    {
    	$request = new stdClass();
    	$request->merchantID = $this->empresa->visa_merchant_id;

		$request->merchantReferenceCode = uniqid();

		$request->clientLibrary = "PHP";
		$request->clientLibraryVersion = phpversion();
		$request->clientEnvironment = php_uname();

		$ccAuthService = new stdClass();
		$ccAuthService->run = "true";
		$request->ccAuthService = $ccAuthService;

		$billTo = new stdClass();
		$billTo->firstName = "Luis Miguel";
		$billTo->lastName = "Tziná";
		$billTo->street1 = "6 avenida 6-68 zona 12";
		$billTo->city = "Guatemala";
		$billTo->state = "CA";
		$billTo->postalCode = "01012";
		$billTo->country = "GT";
		$billTo->email = "lmtzina@gmail.com";
		$request->billTo = $billTo;

		$card = new stdClass();
		$card->accountNumber = "4111111111111111";
		$card->expirationMonth = "12";
		$card->expirationYear = "2020";
		$request->card = $card;

		$purchaseTotals = new stdClass();
		$purchaseTotals->currency = "USD";
		$request->purchaseTotals = $purchaseTotals;

		$item0 = new stdClass();
		$item0->unitPrice = "0.5";
		$item0->quantity = "1";
		$item0->id = "0";

		$item1 = new stdClass();
		$item1->unitPrice = "0.5";
		$item1->id = "1";

		$request->item = array($item0, $item1);
		return $request;
    }

    public function __doRequest($request, $location, $action, $version, $one_way = false)
    {
    	#header ("Content-Type:text/xml");

    	$soapHeader = "
	    <SOAP-ENV:Header 
	    	xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" 
	    	xmlns:wsse=\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd\"
	    >
	    	<wsse:Security SOAP-ENV:mustUnderstand=\"1\">
	    		<wsse:UsernameToken>
	    			<wsse:Username>{$this->empresa->visa_merchant_id}</wsse:Username>
	    			<wsse:Password>{$this->empresa->visa_password}</wsse:Password>
	    		</wsse:UsernameToken>
	    	</wsse:Security>
	    </SOAP-ENV:Header>";

	    #echo "<pre>";
	    #print_r ($soapHeader);
	    #echo "</pre>";

	    echo $soapHeader;
	    #die();

	    $requestDOM = new DOMDocument('1.0');
	    $soapHeaderDOM = new DOMDocument('1.0');

	    try {
	        $requestDOM->loadXML($request);
			$soapHeaderDOM->loadXML($soapHeader);

			$node = $requestDOM->importNode($soapHeaderDOM->firstChild, true);

			$requestDOM->firstChild->insertBefore(
				$node, 
				$requestDOM->firstChild->firstChild
			);

	    	$request = $requestDOM->saveXML();
	    } catch (DOMException $e) {
	         die('Error adding UsernameToken: ' . $e->code);
	    }

		return parent::__doRequest($request, $location, $action, $version);
    }

    public function cobrar()
    {
    	return $this->runTransaction($this->request);
    }
}