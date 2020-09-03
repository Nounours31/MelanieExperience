<?php
include_once $_SERVER['DOCUMENT_ROOT'] . 'nanie/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'nanie/server/modele/BRIPersonnes.php';
include_once $_SERVER['DOCUMENT_ROOT'] . 'nanie/server/WS/iBRIWSApi.php';

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
        $err = new BRIError(0, '');
        $Personnes = new BRIPersonnes('');
        $referenceMsgOut='OK';
        $this -> logger -> debug('---> OK BRIWSApiPersonnes::executeRequest >>'.$msgIN->getRequete().'<<');
        switch ($msgIN->getRequete()) {
            case "getAllPersonnes":
                $err = $Personnes->getAllPersonnes($referenceMsgOut);
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


