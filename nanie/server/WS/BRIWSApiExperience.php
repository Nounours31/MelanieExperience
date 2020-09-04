<?php
include_once $_SERVER['DOCUMENT_ROOT'] . 'nanie/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'nanie/server/modele/BRIExperience.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'nanie/server/WS/iBRIWSApi.php';

/*********************************************************************************************
 * Classe de gestion WS des Users
 ********************************************************************************************/
class BRIWSApiExperience extends BRIWSApi
{

    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct($className = "BRIWSApiExperience")
    {
        parent::__construct($className);
        $this->logger = new BRILogger($className);
    }

    function executeRequest($msgIN, &$referenceMsgOut)
    {
        $err = new BRIError(0);
        $Experience = new BRIExperience('');
        $referenceMsgOut='OK';
        $this -> logger -> debug('---> OK BRIWSApiExperience::executeRequest >>'.$msgIN->getRequete().'<<');
        switch ($msgIN->getRequete()) {
            case "getAllExperienceInitiale":
                $err = $Experience->getAllExperienceInitiale($referenceMsgOut);
                break;
            case "create":
                $ExperienceId = '';
                $date = '';
                $qui = '';
                $files = '';
                $argsIn = $msgIN->getArgs();
                if (isset ($argsIn['experiencestringid'])) {
                    $ExperienceId=$argsIn['experiencestringid'];
                }
                if (isset ($argsIn['daterealisationexperience'])) {
                    $date=$argsIn['daterealisationexperience'];
                }
                if (isset ($argsIn['faiteparqui'])) {
                    $qui=$argsIn['faiteparqui'];
                }
                $this -> logger -> debug('create(' . $ExperienceId . ', ' .$date. ', ' .$qui. ', '. $referenceMsgOut. ');');
                $err = $Experience->create($ExperienceId, $date, $qui, $referenceMsgOut);
                break;
                
                
            case "getExperienceUidFromExperienceStringid":
                $experiencestringid = '';
                $argsIn = $msgIN->getArgs();
                if (isset ($argsIn['experiencestringid'])) {
                    $experiencestringid=$argsIn['experiencestringid'];
                }
                $err = $Experience->getExperienceUidFromExperienceStringid($experiencestringid, $referenceMsgOut);
                break;

            case "getAllExperienceUid":
                $err = $Experience->getAllExperienceUid($referenceMsgOut);
                break;

            case "getExperience_InfoGenerale":
                $args = $msgIN->getArgs();
                $id=$args['uid'];
                $err = $Experience->getExperience_InfoGenerale($id, $referenceMsgOut);
                break;

            case "getExperience_ResultatGenotype":
                $args = $msgIN->getArgs();
                $id=$args['uid'];
                $err = $Experience->getExperience_ResultatGenotype($id, $referenceMsgOut);
                break;

            case "getExperience_ResultatTest":
                $args = $msgIN->getArgs();
                $id=$args['uid'];
                $err = $Experience->getExperience_ResultatTest($id, $referenceMsgOut);
                break;

            case "getExperience_ResultatImage":
                $args = $msgIN->getArgs();
                $id=$args['uid'];
                $err = $Experience->getExperience_ResultatImage($id, $referenceMsgOut);
                break;

                

            case "getAllTestTypes":
                $err = $Experience->getAllTestTypes($referenceMsgOut);
                break;

            case "getAllMarquage":
                $err = $Experience->getAllMarquage($referenceMsgOut);
                break;

            case "getAllChromosomes":
                $err = $Experience->getAllChromosomes($referenceMsgOut);
                break;

            case "uploadFile":
                $err = $Experience->uploadFiles($msgIN->getArgs(),$msgIN->getFiles(), $referenceMsgOut);
                break;

            case "update":
                $err = $Experience->update($msgIN->getArgs(), $referenceMsgOut);
                break;
            default:
                $err = BRIError::E_NOIMPL();
                break;
        }
        $this -> logger -> debug('---> OK BRIWSApiExperience::executeRequest >>'.$err->toString().'<<');
        return $err;
    }
}
?>


