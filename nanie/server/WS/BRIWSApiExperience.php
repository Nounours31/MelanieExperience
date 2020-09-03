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
                $this -> logger -> debugTab('---> OK BRIWSApiExperience::create >>ARGS ... <<', $argsIn);
                if (isset ($argsIn['ExperienceId'])) {
                    $ExperienceId=$argsIn['ExperienceId'];
                }
                if (isset ($argsIn['date'])) {
                    $date=$argsIn['date'];
                }
                if (isset ($argsIn['qui'])) {
                    $qui=$argsIn['qui'];
                }
                if (isset ($argsIn['files'])) {
                    $files=$argsIn['files'];
                }
                $this -> logger -> debug('create(' . $ExperienceId . ', ' .$date. ', ' .$qui. ', ' .$files. ', '. $referenceMsgOut. ');');
                $err = $Experience->create($ExperienceId, $date, $qui, $files, $referenceMsgOut);
                break;
                
            case "uploadFile":
                $this -> logger -> debugTab('---> OK BRIWSApiExperience::Uploadfile >>ARGS ... <<', $msgIN->getArgs());
                $this -> logger -> debugTab('---> OK BRIWSApiExperience::Uploadfile >>Files ... <<', $msgIN->getFiles());
                $err = $Experience->uploadFiles($msgIN->getArgs(),$msgIN->getFiles(), $referenceMsgOut);
                break;

            case "update":
                $err = $Experience->test($msgIN, $referenceMsgOut);
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


