<?php

include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/Envt/BRIEnvt.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/modele/iBRIModel.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/DB/BRIDBAccess.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/DB/BRIDBTableExperience.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRIUID.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRITools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/NLS/BRINls.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRIError.php';


class BRIExperience extends iBRIModel { 
    private $_DBExperience = null;
    private $_logger = null;
    
    public function __construct($info) {
        parent::__construct($info);
        $this -> _DB = new BRIDBAccess();
        $this -> _DBExperience = new BRIDBTableExperience();
        $this -> _logger = new BRILogger("BRIExperience");
    }
    
    public function __destruct() {
    }
    
    
    /**************************************************************************************************
     * Fonctions administratives
    ****************************************************************************************************/
    public function create ($ExperienceId, $date, $qui, $files, &$referenceMsgOut) {
        $rc=$this -> _DBExperience -> createExperience($ExperienceId, $date, $qui, $files);
        if (isset ($rc['uid'])) {
            $referenceMsgOut = json_encode ($rc);
            $err = BRIError::S_OK();
        }
        else {
            $referenceMsgOut = json_encode ($rc);
            $err = new BRIError(3, 'Impossible de creer un experience');
        }
        return $err;
    }

    
    public function getAllExperienceInitiale (&$message) {
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ('select Initale from ExperienceInitiales');
        if (!empty($rc)) {
            for ($i = 0; $i < count($rc); $i++) {
                array_push ($ret, $rc[$i]['Initale']);
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

    public function uploadFiles ($aargs, $afiles, &$message) {
        $id_exp = $aargs['experienceId'];
        $ficDest = $_SERVER['DOCUMENT_ROOT'].BRIEnvt::PathToVault;
        $ficDest=$ficDest."/".$id_exp;

        $this -> _logger -> Debug ('Test de '.$ficDest);
        if (!file_exists($ficDest)) {
            $rc = mkdir($ficDest, 777, true);
            $this -> _logger -> Debug ('mkdir '.$ficDest.'    rc:'.$rc);
        }

        $isKO = false;
        foreach ($afiles as $key => $value) {
            // [FBAB06F8-BDAC-40FC-859C-FAC31392A22E : [[key : {file-0}][name : {sassInfo.png}][type : {image/png}][absolute_path : {E:\wamp64\tmp\php35A9.tmp}]]]
            $nomfile = $value ['name'];
            $nomfileCopie = str_replace ("'", "-" , $value ['name']);
            $pathfile = $value ['absolute_path'];

            if (file_exists($ficDest."/".$nomfileCopie)) {
                $nomfileCopie=$nomfileCopie.BRITools::UUID();
            }

            $this -> _logger -> Debug ('cp '.$pathfile.'   vers '.$ficDest."/".$nomfileCopie);
            $rc = copy ( $pathfile,  $ficDest."/".$nomfileCopie);
            if ($rc === TRUE) {
                $message .= "Copie de ".$nomfile." vers ".$ficDest."/".$nomfileCopie;
                $sql = 'INSERT INTO `experience_files` ( `id_experience`, `nom`, `path`) VALUES ';
                $sql .= "(".$id_exp.", '".str_replace ("'", "\'" , $value ['name'])."', '".$ficDest."/".$nomfileCopie."')";

                $ret = array();
                $rc = $this -> _DB -> insertAsRest ($sql);
                if ($rc === FALSE) {
                    $isKO = true;
                    $message .= "Impossible de mettre en DB ".$nomfile;
                }
            }
            else {
                $message .= "ECHEC copie ".$nomfile;
                $isKO = true;
            }
        }
        if (!$isKO) {
            $err = BRIError::S_OK();
        } 
        else {
            $err = new BRIError (5, $message);
        }
        return $err;
    }
}
?>