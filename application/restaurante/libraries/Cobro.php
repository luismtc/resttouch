<?php 
/**
 * summary
 */
class Cobro extends SoapClient
{
	private $request;
	private $wsdl = "https://ics2wstest.ic3.com/commerce/1.x/transactionProcessor/CyberSourceTransaction_1.167.wsdl";
    private $empresa;
    private $referencia;
    private $total = 0;
    private $tarjeta = null;
	private $cliente = null;

    public function __construct($empresa = null, $options = [])
    {
        parent::__construct($this->wsdl, $options);
        $this->empresa = $empresa;
    }

    public function setCliente($value)
	{
		$this->cliente = $value;
		return $this;
	}

	public function setTarjeta($value)
	{
		$this->tarjeta = $value;
		return $this;
	}

    public function setTotal($total)
    {
    	$this->total = $total;
    	return $this;
    }

    public function setReferencia($value)
    {
    	$this->referencia = $value;
    	return $this;
    }

    private function procesar()
    {
    	$request = new stdClass();
    	$request->merchantID = $this->empresa->visa_merchant_id;
		$request->merchantReferenceCode = $this->referencia;

		$request->clientLibrary = "PHP";
		$request->clientLibraryVersion = phpversion();
		$request->clientEnvironment = php_uname();

		$ccAuthService = new stdClass();
		$ccAuthService->run = "true";
		$request->ccAuthService = $ccAuthService;

		$billTo = new stdClass();
		$billTo->firstName = $this->cliente["nombre"];
		$billTo->lastName = $this->cliente["apellidos"];
		$billTo->street1 = $this->cliente["direccion"];
		$billTo->city = $this->empresa->municipio;
		$billTo->country = "GT";
		$billTo->email = $this->cliente["correo"];
		$request->billTo = $billTo;

		$card = new stdClass();
		$card->accountNumber = $this->tarjeta["numero"];
		$card->expirationMonth = $this->tarjeta["mes"];
		$card->expirationYear = $this->tarjeta["anio"];
		$request->card = $card;

		$purchaseTotals = new stdClass();
		$purchaseTotals->currency = "GTQ";
		$request->purchaseTotals = $purchaseTotals;
		$request->item = array();

		$item = new stdClass();
		$item->unitPrice = $this->total;
		$item->quantity = 1;
		$item->id = 1;
		$request->item[] = $item;

		$this->request = $request;
    }

    public function __doRequest($request, $location, $action, $version, $one_way = false)
    {
    	$soapHeader = "
	    <SOAP-ENV:Header 
	    	xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" 
	    	xmlns:wsse=\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd\"
	    >
	    	<wsse:Security SOAP-ENV:mustUnderstand=\"1\">
	    		<wsse:UsernameToken>
	    			<wsse:Username>{$this->empresa->visa_merchant_id}</wsse:Username>
	    			<wsse:Password>{$this->empresa->visa_transaction_key}</wsse:Password>
	    		</wsse:UsernameToken>
	    	</wsse:Security>
	    </SOAP-ENV:Header>";

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
    	$this->procesar();
    	return $this->runTransaction($this->request);
    }
}