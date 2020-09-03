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
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/DB/BRIDBAccess.php';
include_once($_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRILogger.php');
include_once($_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRITools.php');

class BRIDBTableExperience extends BRIDBAccess {      
    /*
     */
    const _DBNameExperiences="Exprience";
    const _DBExperience_UID = "UID";                          // | UID             | int(10) unsigned                            | NO   | PRI | NULL    | auto_increment |
    const _DBExperience_Nom = "Nom"; 				// | Nom             | varchar(56)                                 | YES  |     | NULL    |                |
    const _DBExperience_Prenom = "Prenom"; 			// | Prenom          | varchar(56)                                 | YES  |     | NULL    |                |
    const _DBExperience_email = "email"; 			// | email           | varchar(60)                                 | YES  |     | NULL    |                |
    const _DBExperience_email_perso = "email_perso"; 		// | email_perso     | varchar(60)                                 | YES  |     | NULL    |                |
    const _DBExperience_PasswdMD5 = "PasswdMD5"; 		// | PasswdMD5       | varchar(56)                                 | YES  |     | NULL    |                |
    const _DBExperience_okreglement = "okreglement"; 		// | okreglement     | tinyint(4)                                  | NO   |     | 0       |                |
    const _DBExperience_UpdateReglement = "UpdateReglement"; 	// | UpdateReglement | tinyint(3) unsigned                         | YES  |     | NULL    |                |
    const _DBExperience_Matricule = "Matricule"; 		// | Matricule       | int(11)                                     | YES  |     | 0       |                |
    const _DBExperience_ce_Experience_status = "ce_Experience_status"; 	// | ce_Experience_status  | set('valide','ferme','bloque','temporaire') | NO   |     | valide  |                |
    const _DBExperience_UID_Entreprise = "UID_Entreprise"; 	// | UID_Entreprise  | smallint(5) unsigned                        | NO   |     | NULL    |                |
    const _DBExperience_Remarque = "Remarque"; 		// | Remarque        | text                                        | YES  |     | NULL    |                |
    
    
    public function __construct() {
        parent::__construct();
        $this -> _DBName = "Expriences";
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
    public function createExperience ($ExperienceId, $date, $qui, $files) {
        $ret = array();

        $sql = 'insert into experience (`dateExperience`, `experienceId`, `dateInsert`, `qui`, `url_graph`) VALUES ';
        $sql .= "('".$date."', '".$ExperienceId."', '".date("Y-m-d H:i:s")."', '".$qui."', '".$files."')";
        $this -> _logger -> Debug ('sql: '.$sql);
            
        $rc = $this ->insertAsRest($sql);
        if ($rc !== FALSE) {
            $this ->_logger ->Debug('OK: Experience cree');
            $ret['uid'] = $rc;
            $ret['status'] = 0;             
        }
        else {
            $ret['status'] = 1;             
        }
        return $ret;    
    }
    
    public function updateExperience ($infos) {
        $update = true;
        return $this -> createOrUpdateExperience ($infos, $update);        
    }
    
    private function createOrUpdateExperience ($infos, $update) {
        $ret = array();
        $log = array();
        $uid = -1;
        $motdepasse = "BRITools::UUID()";
        $MD5Password = md5($motdepasse);

        // ----------------------------------------------
        // Le Experience existe il deja ? si ou je recup dson ID / sinon creation
        // ----------------------------------------------
        if ($update) {
            $sql = "select uid from ".self::_DBNameExperiences." where (uid = '".$infos['uid']."')";
        }
        else {
            $sql = "select uid from ".self::_DBNameExperiences;
        }
        $rc = $this -> selectAsRest($sql);
        if (!empty($rc)) {
            $uid = $rc [0]['uid'];
            $log['creation'] = 'KO Experience existe deja: '.$uid; 
            $ret['log'] = $log;
            if (!$update) {
                return $ret;
            }
        }
        else if ($update) {
            $log['creation'] = 'KO Experience ne existe pas '.$uid; 
            $ret['log'] = $log;
            if (!$update) {
                return $ret;
            }
        }
        else {
            $sql = "insert into ".self::_DBNameExperiences;
            $sqlchamps = 'tokenId, csrftoken, token, dateinscription, passwdMD5';
            $sqlvaleurs = "'".date("Y-m-d H:i:s")."', '', '', '".date("Y-m-d H:i:s")."', '".$MD5Password."'";
            
            foreach ($infos as $key => $value) {
                $sqlchamps .= ','.$key;
                $sqlvaleurs .= ", '".$value."'";
            }
            $sql = $sql.' ('.$sqlchamps.') values ('.$sqlvaleurs.')';
            $rc = $this ->insertAsRest($sql);
            if ($rc !== FALSE) {
                $this ->_logger ->log('OK: Experience cree');
                $uid = $rc;
                $log['creation'] = 'OK: uid = '.$uid;             
            }
            else {
                $log['creation'] = 'KO: rc = '.$rc;
                return $log;
            }
        }
        $ret['log'] = $log;
        $ret['uid'] = $uid;

        return $ret;
    }
    }
