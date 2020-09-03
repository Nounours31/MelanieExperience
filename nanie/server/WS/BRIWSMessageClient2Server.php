<?php

include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/modele/BRISecurite.php';


/*******************************************************************************
 * 
 * Classe des message qui sont echanger entre le client et le server
 * La classe JS est en pendant de celle ci
 * 
 * Attention NE PAS Ecrire de message qui ne passe pas par cette classe
 * apres c'es la merde a debugger  
 * 
 * messageIn = 
 * {
 *    requete="add" ou "initpwd" ou ... 
 *    type="user" ou "resa"
 *    args=[{nom1: val1}, {nom2, val2}, ...]
 * }
 *******************************************************************************/
class BRIWSMessageClient2Server {
    protected $logger = null;               // le logger
    private $requete = 'none';              // le type de la requete
    private $type = 'none';              // le type de la requete
    private $Args = array();              // le type de la requete
    private $Files= array();              // le type de la requete
    
    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct() {
        $this->logger =  new BRILogger ('BRIWSMessageClient2Server');
    }

    
    public function getRequete() { return $this->requete;}
    public function getType() { return $this->type;}
    public function getArgs() { return $this->Args;}
    public function getFiles() { return $this->Files;}
    
    // --------------------------------------------------------------------------------------
    // prend un ensemble de valeur lue dans le php://input et 
    // en fait un message comprehensible pour les WS qui vont etre appelles
    // --------------------------------------------------------------------------------------
    function buildFromArray ($ArrayOfArgsEnvoyedParLeClient) {
        $this->logger->debug("::buildFromArray - Test contenu du tab");
        if (!isset($ArrayOfArgsEnvoyedParLeClient)) {
            $err = new BRIError (5, "BRIWSMessageClient2Server - Pas de message a parser");
            return $err;
        }
        
        // est ce que le type de la requete est dans la demande
        if (!isset ($ArrayOfArgsEnvoyedParLeClient['_classe'])) {
            $err = new BRIError (5, "BRIWSMessageClient2Server - Pas de requete dans le message");
            return $err;
        }
        
        
        // est ce que le nom de la requete est dans la demande
        if (!isset ($ArrayOfArgsEnvoyedParLeClient['_requete'])) {
            $err = new BRIError (5, "BRIWSMessageClient2Server - Pas de requete dans le message");
            return $err;
        }
       
        
        // recupe de la requete
        $this -> type = $ArrayOfArgsEnvoyedParLeClient['_classe'];

        // recupe de la requete
        $this -> requete = $ArrayOfArgsEnvoyedParLeClient['_requete'];

        // recupe de la requete
        // {"_args":[{"nom":"ExperienceId","val":"F0-A0"},{"nom":"date","val":"2020-10-01"},{"nom":"qui","val":"Fages"},{"nom":"files","val":"sassInfo.png"}]
        if (isset ($ArrayOfArgsEnvoyedParLeClient['_args'])) {
            if (is_array($ArrayOfArgsEnvoyedParLeClient['_args'])) {
                foreach ($ArrayOfArgsEnvoyedParLeClient['_args'] as $OneArrayValue) {
                    $this->Args[$OneArrayValue['nom']]=$OneArrayValue['val'];
                }          
            }
        }
        $this->logger->debugTab("::buildFromArray - Args ... ", $this->Args);

        if (isset ($ArrayOfArgsEnvoyedParLeClient['__FILES__'])) {
            $this->Files = $ArrayOfArgsEnvoyedParLeClient['__FILES__'];
        }

        return BRIError::S_OK();
    }
    
    public function cleanInput() {
        return true;
    }

    public function validateInputMessage() {
        if ((strcmp($this->requete, 'none') != 0) && (strcmp($this->type, 'none') != 0))
                return true;
        return false;
    }
    
    public function toString () {
        $retour = "{Requete: ".$this -> requete.";   Args: }";
        return $retour;
    }

    
    public function Dump () {
        $this->logger -> debug($this -> toString());
    }
}
?>

