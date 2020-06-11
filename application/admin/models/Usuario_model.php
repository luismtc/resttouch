<?php

class Usuario_model extends CI_Model
{
    private $tabla = 'usuario';
    public $columnas = [];

    public function __construct()
    {
        parent::__construct();
        $this->setColumnas();
    }

    private function setColumnas()
    {
        $this->load->model('Db_model');
        $this->columnas = $this->Db_model->getTableColumns($this->db->database, $this->tabla);
    }

    function logIn($credenciales = null)
    {
        if ($credenciales) {
            $dbusr = $this->db
                ->select("
                    a.usuario, 
                    a.contrasenia, 
                    a.usrname, 
                    a.nombres, 
                    a.apellidos, 
                    a.sede,
                    CONCAT(d.admin_llave, '-', c.empresa, '-', b.sede) AS sede_uuid")
                ->from("{$this->tabla} a")
                ->join("sede b", "b.sede = a.sede")
                ->join("empresa c", "c.empresa = b.empresa")
                ->join("corporacion d", "d.corporacion = c.corporacion")
                ->where('usrname', $credenciales['usr'])
                ->where('debaja', 0)
                ->get()
                ->row();

            if (isset($dbusr)) {
                if (password_verify($credenciales['pwd'], $dbusr->contrasenia)) {
                    $tokenData = array(
                        'idusuario' => $dbusr->usuario,
                        'sede' => $dbusr->sede,
                        'usuario' => $credenciales['usr'],
                        'inicia' => date('Y-m-d H:i:s'),
                        'hasta' => date('Y-m-d H:i:s', strtotime('+12 hours')),
                        'dominio' => $credenciales['dominio'] 
                    );
                    return array(
                        'mensaje' => 'El usuario tiene acceso.',
                        'token' => AUTHORIZATION::generateToken($tokenData),
                        'usrname' => $dbusr->usrname,
                        'nombres' => $dbusr->nombres,
                        'apellidos' => $dbusr->apellidos,
                        'sede' => $dbusr->sede,
                        'idusr' => $dbusr->usuario,
                        'sede_uuid' => $dbusr->sede_uuid
                    );
                } else {
                    return array(
                        'mensaje' => 'El usuario ' . $credenciales['usr'] . ' o la contraseña son inválidos. Intente de nuevo, por favor.',
                        'token' => null
                    );
                }
            } else {
                return array(
                    'mensaje' => 'El usuario ' . $credenciales['usr'] . ' es inválido. Intente de nuevo, por favor.',
                    'token' => null
                );
            }
        } else {
            return array(
                'mensaje' => 'Por favor envíe credenciales válidas.',
                'token' => null
            );
        }
    }

    private function checkUserExists($usr, $sede)
    {
        $existe = -1;
        $dbusr = $this->db
            ->select('usuario')
            ->from($this->tabla)
            ->where('usrname', $usr)
            ->where('sede', $sede)
            ->get();
        if ($dbusr->num_rows() > 0) {
            $user = $dbusr->row();
            $existe = (int) $user->usuario;
        }

        return $existe;
    }

    public function getValidData($data, $columnas)
    {
        $datos = [];
        foreach ($data as $key => $value) {
            if (in_array($key, $columnas)) {
                $datos[$key] = $value;
            }
        }
        return $datos;
    }

    function crear($dataToInsert = null)
    {
        $dataToInsert = $this->getValidData($dataToInsert, $this->columnas);

        if ($dataToInsert) {
            $idusr = $this->checkUserExists($dataToInsert['usrname'], $dataToInsert['sede']);
            if ($idusr < 0) {
                if (array_key_exists('contrasenia', $dataToInsert)) {
                    $dataToInsert['contrasenia'] = password_hash($dataToInsert['contrasenia'], PASSWORD_BCRYPT, array('cost' => 12));
                }

                $this->db->insert($this->tabla, $dataToInsert);
                return array(
                    'mensaje' => 'Usuario creado con éxito.',
                    'id' => $this->db->insert_id()
                );
            } else {
                return array(
                    'mensaje' => 'Este usuario ya existe.',
                    'usuario' => $idusr
                );
            }
        } else {
            return array(
                'mensaje' => 'La información enviada no es correcta o está incompleta.',
                'usuario' => null
            );
        }
    }

    function actualizar($id = 0, $dataToUpdate = null)
    {
        $dataToUpdate = $this->getValidData($dataToUpdate, $this->columnas);
        if ($dataToUpdate) {
            if (array_key_exists('contrasenia', $dataToUpdate)) {
                $dataToUpdate['contrasenia'] = password_hash($dataToUpdate['contrasenia'], PASSWORD_BCRYPT, array('cost' => 12));
            }
            $this->db->where('usuario', $id);
            $this->db->update($this->tabla, $dataToUpdate);
            return array(
                'mensaje' => 'Usuario actualizado con éxito.',
                'usuario' => $id
            );
        } else {
            return array(
                'mensaje' => 'La información enviada no es correcta o está incompleta.',
                'usuario' => null
            );
        }
    }

    function findAll($debaja = 0)
    {
        if ($debaja !== 3) {
            $this->db->where('debaja', $debaja);
        }

        return $this->db
            ->select('usuario, nombres, apellidos, usrname, debaja')
            ->from($this->tabla)
            ->get()
            ->result();
    }

    function find($filtros = [])
    {
        if (count($filtros) > 0) {
            foreach ($filtros as $key => $value) {
                if($key != "_uno"){                    
                    $this->db->where($key, $value);
                }
            }
        }

        $tmp = $this->db
            ->select('usuario, nombres, apellidos, usrname, debaja, sede, esmesero')
            ->from($this->tabla)
            ->get();

        if(isset($filtros['_uno'])){
            return $tmp->row();
        }

        return $tmp->result();
    }
}
