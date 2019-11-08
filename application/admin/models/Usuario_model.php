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

    private function setColumnas(){
        $this->load->model('Db_model');
        $this->columnas = $this->Db_model->getTableColumns($this->db->database, $this->tabla);
    }

    function logIn($credenciales = null)
    {
        if ($credenciales) {
            $dbusr = $this->db
                ->select('contrasenia, usuario, nombres, apellidos')
                ->from($this->tabla)
                ->where('usuario', $credenciales['usr'])
                ->where('debaja', 0)
                ->get()
                ->row();

            if (isset($dbusr)) {
                if (password_verify($credenciales['pwd'], $dbusr->contrasenia)) {
                    $tokenData = array(
                        'usuario' => $credenciales['usr'],
                        'inicia' => date('Y-m-d H:i:s'),
                        'hasta' => date('Y-m-d H:i:s', strtotime('+12 hours'))
                    );
                    return array(
                        'mensaje' => 'El usuario tiene acceso.',
                        'token' => AUTHORIZATION::generateToken($tokenData),
                        'usuario' => $dbusr->usuario,
                        'nombres' => $dbusr->nombres,
                        'apellidos' => $dbusr->apellidos
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

    private function checkUserExists($usr)
    {
        $existe = -1;
        $dbusr = $this->db
            ->select('id')
            ->from($this->tabla)
            ->where('usuario', $usr)
            ->get()
            ->row();
        if (isset($dbusr)) {
            $existe = (int) $dbusr->id;
        }
        return $existe;
    }

    function crear($dataToInsert = null)
    {
        if ($dataToInsert) {
            $idusr = $this->checkUserExists($dataToInsert['usuario']);
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
                    'id' => $idusr
                );
            }
        } else {
            return array(
                'mensaje' => 'La información enviada no es correcta o está incompleta.',
                'id' => null
            );
        }
    }

    function actualizar($id = 0, $dataToUpdate = null)
    {
        if ($dataToUpdate) {
            if (array_key_exists('contrasenia', $dataToUpdate)) {
                $dataToUpdate['contrasenia'] = password_hash($dataToUpdate['contrasenia'], PASSWORD_BCRYPT, array('cost' => 12));
            }
            $this->db->where('id', $id);
            $this->db->update($this->tabla, $dataToUpdate);
            return array(
                'mensaje' => 'Usuario actualizado con éxito.',
                'id' => $id
            );
        } else {
            return array(
                'mensaje' => 'La información enviada no es correcta o está incompleta.',
                'id' => null
            );
        }
    }

    function findAll($debaja = 0)
    {
        if ($debaja !== 3) {
            $this->db->where('debaja', $debaja);
        }

        return $this->db
            ->select('id, usuario')
            ->from($this->tabla)
            ->get()
            ->result();
    }
}
