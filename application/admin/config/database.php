<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/* ./cloud_sql_proxy -instances="restouch:us-central1:restadmin"=tcp:3306 */

$active_group = 'default';
$query_builder = TRUE;

$db['default'] = array(
	'dsn'	=> '',

	'hostname' => '/cloudsql/restouch:us-central1:restadmin',
	'username' => 'root',
	'password' => 'c807#spc',
	'database' => 'restouch',

	/*'hostname' => '127.0.0.1',
	'username' => 'root',
	'password' => 'c807#spc',
	'database' => 'restouch',*/

	'dbdriver' => 'mysqli',
	'dbprefix' => '',
	'pconnect' => FALSE,
	'db_debug' => (ENVIRONMENT !== 'production'),
	'cache_on' => FALSE,
	'cachedir' => '',
	'char_set' => 'utf8',
	'dbcollat' => 'utf8_general_ci',
	'swap_pre' => '',
	'encrypt' => FALSE,
	'compress' => FALSE,
	'stricton' => FALSE,
	'failover' => array(),
	'save_queries' => TRUE
);
