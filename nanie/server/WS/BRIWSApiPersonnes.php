<?php
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/modele/BRIPersonnes.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/WS/iBRIWSApi.php';

/*********************************************************************************************
 * Classe de gestion WS des Users
 ********************************************************************************************/
class BRIWSApiPersonnes extends BRIWSApi
{

    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct($className = "BRIWSApiPersonnes")
    {
        parent::__construct($className);
        $this->logger = new BRILogger($className);
    }

    function executeRequest($msgIN, &$referenceMsgOut)
    {
        $err = new BRIError(1, 'Default BRIWSApiPersonnes::executeRequest error');
        $Personnes = new BRIPersonnes('');
        $referenceMsgOut='OK';
        $this -> logger -> debug('---> OK BRIWSApiPersonnes::executeRequest >>'.$msgIN->getRequete().'<<');
        switch ($msgIN->getRequete()) {
            case "getAllPersonnes":
                $err = $Personnes->getAllPersonnes($referenceMsgOut);
                break;
            
            case "getMd5PasswdFromMailorAlias":
                $err = $Personnes->getMd5PasswdFromMailorAlias($msgIN->getArgs(), $referenceMsgOut);
                break;

            case "checkToken":
                $err = BRIError::S_OK();
                $args = $msgIN->getArgs();
                $referenceMsgOut = 'false';
                if ($Personnes->isTokenValid($args['token']))
                    $referenceMsgOut = 'true';
                break;
                    
            case "setLogin":
                $err = $Personnes->setLogin($msgIN->getArgs(), $referenceMsgOut);
                break;
                default:
                $err = BRIError::E_NOIMPL();
                break;
        }
        $this -> logger -> debug('---> OK BRIWSApiPersonnes::executeRequest >>'.$err->toString().'// message: '.$referenceMsgOut.'<<');
        return $err;
    }
}
?>


