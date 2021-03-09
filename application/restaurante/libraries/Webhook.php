<?php 

ini_set('default_socket_timeout', 3600);

Class Webhook {
	private $webhook;
	private $request;

	public function __construct($webhook = "")
	{
		$this->webhook = $webhook;
	}

	public function setRequest($request)
	{
		$this->request = $request;
	}

	public function setEvento()
	{
		try {
			$metodo = $this->webhook->metodo;
			if (strtolower(trim($this->webhook->tipo_llamada)) == "soap") {
				$client = new SoapClient($this->webhook->link);
				return $client->$metodo($this->request);
	
	
			} else if(strtolower(trim($this->webhook->tipo_llamada)) == "json") {
				$req = "";
			}
		} catch(Exception $e) {
			return 'ERROR: '.$e->getMessage();
		}
	}


}