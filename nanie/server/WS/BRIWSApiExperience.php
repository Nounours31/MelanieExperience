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
    function __construct($className = "BRIWSApiUser")
    {
        parent::__construct($className);
        $this->logger = new BRILogger($className);
    }

    function executeRequest($msgIN, &$referenceMsgOut)
    {
        $err = new BRIError(0);
        $Experience = new BRIExperience('');
        $referenceMsgOut='OK';
        switch ($msgIN->getRequete()) {
            case "Creation":
                $err = $Experience->test(array(), $referenceMsgOut);
                break;
            case "Update":
                $err = $Experience->test(array(), $referenceMsgOut);
                break;
            default:
                $err = BRIError::E_NOIMPL();
                break;
        }
        return $err;
    }
}
?>


