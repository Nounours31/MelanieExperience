<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/modele/BRISecurite.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRITools.php';


abstract class iBRIWSApi {
    abstract function executeRequest($msgIN, &$referenceMsgOut);
}
?>

