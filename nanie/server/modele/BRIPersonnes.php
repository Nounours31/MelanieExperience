<?php

include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/Envt/BRIEnvt.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/modele/iBRIModel.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/DB/BRIDBAccess.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRIUID.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/NLS/BRINls.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRIError.php';


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
        $rc = $this -> _DB -> selectAsRest ('select Nom from Personnes');
        if (!empty($rc)) {
            for ($i = 0; $i < count($rc); $i++) {
                array_push ($ret, $rc[$i]['Nom']);
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
}
?>