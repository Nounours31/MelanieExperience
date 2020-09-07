<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/Envt/BRIEnvt.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/modele/iBRIModel.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/DB/BRIDBAccess.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRIUID.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/NLS/BRINls.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRIError.php';


class BRIPersonnes extends iBRIModel { 
    private $_DB = null;
    private $_logger = null;
    
    public function __construct($info) {
        parent::__construct($info);
        $this -> _DB = new BRIDBAccess();
        $this -> _logger = new BRILogger("BRIPersonnes");
    }
    
    public function __destruct() {
    }
    
    
    /**************************************************************************************************
     * Fonctions administratives
    ****************************************************************************************************/
    public function getAllPersonnes (&$message) {
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ('select nom from '.BRIConst::DB_NOM_ListedesPersonnes);
        if (!empty($rc)) {
            for ($i = 0; $i < count($rc); $i++) {
                array_push ($ret, $rc[$i]['nom']);
            }
        }

        if (count ($ret) < 1) {
            $err = new BRIError(1, 'Pas de nom trouve en table');
        }
        else {
            $err = BRIError::S_OK();
            $message = json_encode ($ret);
        }

        return $err;
    }

    public function getMd5PasswdFromMailorAlias ($args, &$message) {
        $message = '';
        $sql = 'select passwd from '.BRIConst::DB_NOM_ListedesPersonnes;
        $whereClause = " where (email ='".$args['emailOralias']."')";
        if (isset ($args['type']) && (strcmp ($args['type'], "alias") == 0)) 
            $whereClause = " where (alias ='".$args['emailOralias']."')";

        $sql = $sql . $whereClause;
        $rc = $this -> _DB -> selectAsRest ($sql);
        if (!empty($rc)) {
            $message = md5 ($rc[0]['passwd']);
        }

        if (count ($rc) < 1) {
            $err = new BRIError(1, 'Pas de nom trouve en table');
        }
        else {
            $err = BRIError::S_OK();
        }

        return $err;
    }

    public function setLogin ($args, &$message) {
        $token = md5($args['emailOralias'] . date("Y.m.d-h:i:sa"));
        $maxTime = date('Y-m-d H:i:s', strtotime ("+1 hour"));

        $sql = 'update '.BRIConst::DB_NOM_ListedesPersonnes." set token = '".$token."', validite ='".$maxTime."' ";
        $whereClause = " where (email = '".$args['emailOralias']."')";
        if (isset ($args['type']) && (strcmp ($args['type'], "alias") == 0)) 
            $whereClause = " where (alias = '".$args['emailOralias']."')";

        $sql = $sql . $whereClause;
        $rc = $this -> _DB -> updateAsRest ($sql);

        BRIPersonnes::isTokenValid($token);

        $message = $token;
        $err = BRIError::S_OK();
        return $err;
    }

    public function updateToken ($token) {
        if ((!isset ($token)) || (strlen ($token) < 1))
            return false;

        $maxTime = date('Y-m-d H:i:s', strtotime ("+1 hour"));
        $sql = 'update '.BRIConst::DB_NOM_ListedesPersonnes." set validite ='".$maxTime."' ";
        $whereClause = " where (token = '".$token."')";
        $sql = $sql . $whereClause;
        $rc = $this -> _DB -> updateAsRest ($sql);
        return true;
    }

    public function isTokenValid ($token) {
        if ((!isset ($token)) || (strlen ($token) < 1))
            return false;
        $sql = 'select uid from '.BRIConst::DB_NOM_ListedesPersonnes." where (token = '".$token."')";
        $rc = $this -> _DB -> selectAsRest ($sql);
        if (empty($rc)) {
            return false;
        }
        return true;
    }

}
?>