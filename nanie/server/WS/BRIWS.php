<?php
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/WS/BRIWSMessageServer2Client.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/WS/BRIWSMessageClient2Server.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/WS/BRIWSApi.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/WS/BRIWSApiPersonnes.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/WS/BRIWSApiExperience.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRIError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRITools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/tools/BRIUID.php';

/*********************************************************************************************
 * Classe mere de tous les WS de la section brico
 * 
 * Check de secu
 * decodage des input
 * lancement des WS
 ********************************************************************************************/

// le logger
$l = new BRILogger ('BRIWSUserServices');

// le message de sortie
$msgOut = new BRIWSMessageServer2Client();
$msgOut -> buildEmptyMessage();
$msgOut -> Dump();

$rc = new BRIError(0) ;

// on entre ...
if ($rc->SUCCEEDED()) {
    try {
        // decodage des inputs
        $wsApi = new BRIWSApi();    
        $msgIn = $wsApi -> decodeInput();
        $l -> debug('---> OK decode input');
        $msgIn -> cleanInput();             // ici faire de la secu !!!!
        $msgIn -> Dump();
        $rc = $msgIn -> validateInputMessage();
        $l -> debug('---> OK validateInputMessage');

        // si OK alors selon la demande du WS on eguille par type
        $referenceOutputData = null;
        if ($rc) {
            switch ($msgIn -> getType()) {
                case 'personnes' : 
                    $l -> debug('---> OK Api personnes');
                    $api = new BRIWSApiPersonnes ();
                    $err = $api ->executeRequest($msgIn, $referenceOutputData);
                    break;

                case 'experience' : 
                    $l -> debug('---> OK Api experience');
                    $api = new BRIWSApiExperience ();
                    $err = $api ->executeRequest($msgIn, $referenceOutputData);
                    break;

                default:
                    throw new Exception("Unknown type: ".$msgIn -> getType());
            }
        }
        else {
           $err = new BRIError("Invalid input message");
        }
        if (!$err ->SUCCEEDED()) {
            $msgOut->buildFromError($err);
        }
        else {
            if ($referenceOutputData == null)
                $referenceOutputData = "No msg";
            $msgOut->buildFromMessage ($referenceOutputData);
        }
    }
    catch (Exception $e) {
        $l -> fatal($e); 
        $msgOut -> buildFromException($e);
        $msgOut -> Dump();
    }
}

// on crache le massage de sortie
$jsonMsg= $msgOut -> toJSON();
$l -> debug('JSON message OUT: -->'.$jsonMsg.'<--');
print $jsonMsg;
?>

