<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * MUST NOT BE USE DIRECTLY
 *
 * @author PFS
 */

include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/DB/BRIDBAccess.php';
include_once($_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRILogger.php');
include_once($_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRITools.php');

class BRIDBTableExperience extends BRIDBAccess {      
    /*
     */
    const _DBNameExperiences=BRIConst::DB_NOM_Experience;
    
    
    public function __construct() {
        parent::__construct();
        $this -> _DBName = BRIDBTableExperience::_DBNameExperiences;
        $this -> _logger = new BRILogger($this -> _DBName);
    }

    public function __destruct() {
        parent::__destruct();
    }

    // -----------------------------------------------------------------------------------------------------------------------------
    // Zone de creation
    // -----------------------------------------------------------------------------------------------------------------------------
    /**
     * ZOne
     * @param type $name
     * @param type $password
     * @param type $eMail
     * @return type
     */

    
}
