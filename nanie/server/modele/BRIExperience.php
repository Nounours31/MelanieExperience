<?php

include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/Envt/BRIEnvt.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/modele/iBRIModel.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/DB/BRIDBTableExperience.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRIUID.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/NLS/BRINls.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRIError.php';


class BRIExperience extends iBRIModel { 
    private $_DBExperience = null;
    private $_logger = null;
    
    public function __construct($info) {
        parent::__construct($info);
        $this -> _DBExperience = new BRIDBTableExperience();
        $this -> _logger = new BRILogger("BRIExperience");
    }
    
    public function __destruct() {
    }
    
    
    /**************************************************************************************************
     * Fonctions administratives
    ****************************************************************************************************/
    public function test ($a, &$b) {
        $rc=$this -> _DBExperience -> createExperience($a);
        $b='OK';
        $err = new BRIError(0, 'ok');
        return $err;
    }

}
?>