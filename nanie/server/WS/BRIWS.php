<?php
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/WS/BRIWSMessageServer2Client.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/WS/BRIWSMessageClient2Server.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/WS/BRIWSApi.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/WS/BRIWSApiPersonnes.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/WS/BRIWSApiExperience.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRIError.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRITools.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRIUID.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/modele/BRIPersonnes.php';

/*********************************************************************************************
 * Classe mere de tous les WS de la section brico
 * 
 * Check de secu
 * decodage des input
 * lancement des WS
 ********************************************************************************************/

// le logger
$l = new BRILogger ('BRIWS');

// le message de sortie
$msgOut = new BRIWSMessageServer2Client();
$msgOut -> buildEmptyMessage();
$msgOut -> Dump();

$rc = new BRIError(0) ;

// on entre ...
if ($rc->SUCCEEDED()) {
    try {
        $l -> debug('========================================================================================');
        $l -> debug('== Stat One WS');
        $l -> debug('========================================================================================');
        // decodage des inputs
        $wsApi = new BRIWSApi();    
        $msgIn = $wsApi -> decodeInput();
        $msgIn -> cleanInput();             // ici faire de la secu !!!!
        $msgIn -> Dump();
        $rc = $msgIn -> validateInputMessage();

        $token = $msgIn->getToken();
        if (strlen ($token > 1)) {
            $tokenupdater = new BRIPersonnes('tokenupdater');
            $tokenupdater->updateToken($token);
            $l -> debug('token has ben updated');
        }
        
        // si OK alors selon la demande du WS on eguille par type
        $referenceOutputData = null;
        if ($rc) {
            $isClasseFind = false;
            switch ($msgIn -> getType()) {
                case 'personnes' : 
                    $l -> debug('classe detected: personnes --> delegation to BRIWSApiPersonnes classe');
                    $isClasseFind = true;
                    $api = new BRIWSApiPersonnes ();
                    $err = $api ->executeRequest($msgIn, $referenceOutputData);
                    break;

                case 'experience' : 
                    $l -> debug('classe detected: experience --> delegation to BRIWSApiPersonnes classe');
                    $isClasseFind = true;
                    $api = new BRIWSApiExperience ();
                    $err = $api ->executeRequest($msgIn, $referenceOutputData);
                    break;

                default:
                    $isClasseFind = false;
                    $err = BRIError::E_NOIMPL();
                    break;
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

// on crache le message de sortie
$jsonMsg= $msgOut -> toJSON();
print $jsonMsg;
?>

