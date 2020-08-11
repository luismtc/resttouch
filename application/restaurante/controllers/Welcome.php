<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('welcome_message');
	}

	public function cobro()
	{
		$this->load->library('Cobro');
		/*$empresa = $this->Catalogo_model->getEmpresa([
			"empresa" => 1,
			"_uno" => true
		]);*/

		$empresa = new stdClass();
		$empresa->visa_merchant_id = "visanetgt_antiguabrewing";
        
        $empresa->visa_transaction_key = "Visa2020";
        $empresa->visa_user = 'aponce';

        $empresa->visa_password = 'e76205c04da226f7ed8a52c33abd5759ccb1cab8';

		$cobro = new Cobro($empresa);
		
		# $cobro->setTestVenta();
		$rep = $cobro->runTransaction($cobro->setTestVenta());
		# $rep = $cobro->cobrar();

		echo "<pre>";
		print_r ($rep);
		echo "</pre>";
	}
}
