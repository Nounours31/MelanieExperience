<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/Envt/BRIEnvt.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/Envt/BRIConst.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/modele/iBRIModel.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/DB/BRIDBAccess.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/DB/BRIDBTableExperience.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRIUID.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRITools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/NLS/BRINls.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRIError.php';


class BRIExperience extends iBRIModel { 
    private $_DBExperience = null;
    private $_logger = null;
    
    public function __construct($info) {
        parent::__construct($info);
        $this -> _DB = new BRIDBAccess();
        $this -> _logger = new BRILogger("BRIExperience");
    }
    
    public function __destruct() {
    }
    
    

    // ---------------------------------------------------------------------------
    // Creation d'une experience, par son ID interne (forme LettreNum-LettreNum)
    // ---------------------------------------------------------------------------
    public function create ($ExperienceId, $date, $qui, &$referenceMsgOut) {
        try {
            // ------------------------------
            // Check exoistande d'une meme id ?
            // ------------------------------
            $ret = array();
            $sql = "select uid from ".BRIConst::DB_NOM_Experience." where (`experiencestringid` = '".$ExperienceId."')";
            $rc = $this -> _DB -> selectAsRest($sql);
            if (count ($rc) > 0) {
                throw new Exception('L\'experience existe deja (meme ID)'); 
            }

            // ------------------------------
            // Pas de prededente, on insert une nouvelle
            // ------------------------------
            $qui = str_replace ('\'', '-', $qui);
            $sql = "insert into ".BRIConst::DB_NOM_Experience." (`daterealisationexperience`, `experiencestringid`, `dateinsert`, `faiteparqui`) VALUES ";
            $sql .= "('".$date."', '".$ExperienceId."', '".date("Y-m-d H:i:s")."', '".$qui."')";
            $this -> _logger -> Debug ('sql: '.$sql);
                
            $rc = $this -> _DB -> insertAsRest($sql);
            if ($rc !== FALSE) {
                $this ->_logger ->Debug('OK: Experience cree');
                $ret['uid'] = $rc;
                $ret['status'] = 0;             
            }
            else {
                $ret['status'] = 1;             
            }
        
            // ------------------------------
            // retour de l'uid a l'UI
            // ------------------------------
            if (isset ($ret['uid'])) {
                $referenceMsgOut = json_encode ($rc);
                $err = BRIError::S_OK();
            }
            else {
                $referenceMsgOut = json_encode ($rc);
                $err = new BRIError(3, 'Impossible de creer un experience');
            }
        }
        catch (Exception $e) {
            $err = new BRIError(3, $e -> getMessage());
        }
        return $err;
    }

    
    public function launchSQLListUIDExperience($sql, &$message){
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ($sql);
        if (!empty($rc)) {
            foreach ($rc as $key => $value) {
                array_push ($ret, $value);
            }
        }
        $message = json_encode ($ret);
        $err = BRIError::S_OK();
        return $err;
    }


    public function getExperienceUidFromExperienceStringid($experiencestringid, &$message){
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ("select uid from ".BRIConst::DB_NOM_Experience." where (experiencestringid = '".$experiencestringid."') order by uid");
        if (!empty($rc)) {
            $message = json_encode (intval ($rc[0]['uid']));
        }
        $err = BRIError::S_OK();
        return $err;
    }


    public function getAllExperienceUid(&$message){
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ("select uid from ".BRIConst::DB_NOM_Experience." order by uid");
        if (!empty($rc)) {
            for ($i = 0; $i < count($rc); $i++) {
                array_push ($ret, $rc[$i]['uid']);
            }
        }
        $err = BRIError::S_OK();
        $message = json_encode ($ret);

        return $err;
    }

    public function getExperience_InfoGenerale($id, &$message){
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ("select * from ".BRIConst::DB_NOM_Experience." where (uid = '".$id."') order by uid");
        if (empty($rc)) {
            $rc="";
        }
        $err = BRIError::S_OK();
        $message = json_encode ($rc);

        return $err;
    }

    public function getExperience_ResultatGenotype($id, &$message){
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ("select * from ".BRIConst::DB_NOM_ExperienceGenotype." where (idexperience = '".$id."') order by uid");
        if (empty($rc)) {
            $rc="";
        }
        $err = BRIError::S_OK();
        $message = json_encode ($rc);

        return $err;
    }

    public function getExperience_ResultatTest($id, &$message){
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ("select * from ".BRIConst::DB_NOM_ExperienceResultats." where (idexperience = '".$id."') order by uid");
        if (empty($rc)) {
            $rc="";
        }
        $err = BRIError::S_OK();
        $message = json_encode ($rc);

        return $err;
    }
    
    
    public function getExperience_ResultatImage($id, &$message){
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ("select * from ".BRIConst::DB_NOM_ExperienceFichier." where (idexperience = '".$id."') order by uid");
        if (empty($rc)) {
            $rc="";
        }
        $err = BRIError::S_OK();
        $message = json_encode ($rc);

        return $err;
    }

    

    public function getAllExperienceInitiale (&$message) {
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ("select uid, nom from ".BRIConst::DB_NOM_ListedesInitiales." order by uid");
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

    public function getAllChromosomes (&$message) {
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ('select uid, nom from '.BRIConst::DB_NOM_ListedesChromosomes.' order by uid');
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
    
    
    public function getAllTerritoire (&$message) {
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ('select uid, nom from '.BRIConst::DB_NOM_ListedesTerritoire.' order by uid');
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

    public function getAllMarquage (&$message) {
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ('select uid, nom from '.BRIConst::DB_NOM_ListedesMarquages.' order by uid');
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
    
    public function getAllTestTypes (&$message) {
        $ret = array();
        $rc = $this -> _DB -> selectAsRest ('select uid, nom from '.BRIConst::DB_NOM_ListedesTypeExperience.' order by uid');
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
    

    public function uploadFiles ($aargs, $afiles, &$message) {
        $id_exp = $aargs['experienceId'];
        $ficDest = $_SERVER['DOCUMENT_ROOT'].BRIEnvt::PathToVault;
        $ficDest=$ficDest."/".$id_exp;
        $urlfile = (!empty($_SERVER['HTTPS'])?'https':'http').'://'.$_SERVER['HTTP_HOST'].'/'.BRIEnvt::PathToVault.'/'.$id_exp;

        $this -> _logger -> Debug ('Test de '.$ficDest);
        if (!file_exists($ficDest)) {
            $rc = mkdir($ficDest, 777, true);
            $this -> _logger -> Debug ('mkdir '.$ficDest.'    rc:'.$rc);
        }

        $isKO = false;
        foreach ($afiles as $key => $value) {
            // [FBAB06F8-BDAC-40FC-859C-FAC31392A22E : [[key : {file-0}][name : {sassInfo.png}][type : {image/png}][absolute_path : {E:\wamp64\tmp\php35A9.tmp}]]]
            $nomfile = $value ['name'];
            $this -> _logger -> debug ('Nom originel:'.$nomfile);

            $nomfileCopie = str_replace ("'", "-" , $nomfile);
            $this -> _logger -> debug ('passe1:'.$nomfileCopie);
            
            $nomfileCopie = str_replace (" ", "-" , $nomfileCopie);
            $this -> _logger -> debug ('passe1:'.$nomfileCopie);
            
            $nomfileCopie = preg_replace('/[[:^print:]]/', '', $nomfileCopie);
            $this -> _logger -> debug ('passe2:'.$nomfileCopie);

            $nomfileCopie=filter_var($nomfileCopie, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
            $this -> _logger -> debug ('passe3:'.$nomfileCopie);

            $pathfile = $value ['absolute_path'];

            if (file_exists($ficDest."/".$nomfileCopie)) {
                $nomfileCopie=$nomfileCopie.BRITools::UUID();
            }

            $this -> _logger -> Debug ('cp '.$pathfile.'   vers '.$ficDest."/".$nomfileCopie);
            $rc = copy ( $pathfile,  $ficDest."/".$nomfileCopie);

            if ($rc === TRUE) {
                $message .= "Copie de ".$nomfile." vers ".$ficDest."/".$nomfileCopie;
                $sql = 'insert into '.BRIConst::DB_NOM_ExperienceFichier.' (idexperience, nom, path, url) VALUES ';
                $sql .= "(".$id_exp.", '".str_replace ("'", "\'" , $value ['name'])."', '".$ficDest."/".$nomfileCopie."', '".$urlfile."/".$nomfileCopie."')";

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




    public function update ($allargs, &$message) {
        $message='';
        /*
        {
        [ExperienceId : { [db: 0]}]
        [Marquage : {-}]
        [SComparatif : {1}]
        [SGeneral : {1}]
        [TestType : {-}]
        [NbGenotype : {4}]
        [AllGenotypes : {[{"Chromo1":"-","Chromo2":"-","Chromo3":"-","Chromo4":"-"},{"Chromo1":"-","Chromo2":"-","Chromo3":"-","Chromo4":"-"},{"Chromo1":"-","Chromo2":"-","Chromo3":"-","Chromo4":"-"},{"Chromo1":"-","Chromo2":"-","Chromo3":"-","Chromo4":"-"}
        }
        */

        //  experience_resultatgenotypes := id; id_experience; chromosome1; chromosome2; chromosome3; chromosome4; nb ;dateinsert
        //  experience_resultatinfotests := uid ; id_experience; Marquage;  SGeneral ;SComparatif;  TypeTest ; dateinsert

        // une experience ?
        if (!isset ($allargs['idexperience'])) {
            $err = new BRIError (55, 'Pas d\'experience uid dans la requete ...');
            return $err;
        }
        // elle existe ?
        $ret = array();
        $sql = "select uid from ".BRIConst::DB_NOM_Experience." where ( uid = '".$allargs['idexperience']."')";
        $rc = $this -> _DB -> selectAsRest ($sql);
        if (!empty($rc)) {
            if (count($rc) != 1) {
                $err = new BRIError (56, 'plus d\'une experience avec cette ID: Nb='.count($rc));
                return $err;
            }
            else {
                $id_experience = $rc[0]['uid'];
                $message='ExperienceId: '.$id_experience.'   ---';
            }
        }
        else {
            $err = new BRIError (57, 'Pas d\'experience avec cette ID');
            return $err;
        }
        
        $sql = "insert into ".BRIConst::DB_NOM_ExperienceResultats." (`idexperience`, `territoire`, `marquage`, `SGeneral`, `SComparatif`, `typedetest`, `dateinsert`) VALUES ";
        $sql .= "( ".$id_experience.", '".$allargs['territoire']."','".$allargs['marquage']."', ".$allargs['SGeneral'].", ".$allargs['SComparatif'].", '".$allargs['typedetest']."', '".date("Y-m-d H:i:s")."')";
        $rc = $this -> _DB -> insertAsRest ($sql);
        if ($rc === FALSE) {
            $err = new BRIError (58, 'Impossible de ajouter les info generales');
            return $err;
        }
        $message.='OK ajout info generale   ---';

        $errMsg = '';
        $nbGeno = $allargs['NbGenotype'];
        $aAllGeno = json_decode ($allargs['Genotype']);

        for ($i = 0; $i < $nbGeno; $i++) {
            $aOneGeno=$aAllGeno[$i];

            $sql = "insert into ".BRIConst::DB_NOM_ExperienceGenotype." (`idexperience`, `chromosome1`, `chromosome2`, `chromosome3`, `chromosome4`, `nbechantillon`, `dateinsert`) VALUES ";
            $sql .= "(".$id_experience.", 
                        '".$aOneGeno -> chromosome1."',
                        '".$aOneGeno -> chromosome2."',
                        '".$aOneGeno -> chromosome3."',
                        '".$aOneGeno -> chromosome4."', 
                        '".$aOneGeno -> nbechantillon."', 
                        '".date("Y-m-d H:i:s")."')";
            $rc = $this -> _DB -> insertAsRest ($sql);
            if ($rc === FALSE) {
                $errMsg .= ('Impossible de ajouter le genotype numero:'.$i);
            }
            else {
                $message .='OK ajout info genotype : '.$i;
            }
        }
        if (strlen($errMsg) > 0) {
            $err =  new BRIError (59, $errMsg);
            return $err;
        }
        $err = BRIError::S_OK();
        return $err;
    }
}
?>