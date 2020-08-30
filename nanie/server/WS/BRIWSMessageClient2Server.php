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
    
    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct() {
        $this->logger =  new BRILogger ('BRIWSMessageClient2Server');
    }

    
    public function getRequete() { return $this->requete;}
    public function getType() { return $this->type;}
    public function getArgs() { return $this->Args;}
    
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
        if (!isset ($ArrayOfArgsEnvoyedParLeClient['class'])) {
            $err = new BRIError (5, "BRIWSMessageClient2Server - Pas de requete dans le message");
            return $err;
        }
        
        
        // est ce que le nom de la requete est dans la demande
        if (!isset ($ArrayOfArgsEnvoyedParLeClient['requete'])) {
            $err = new BRIError (5, "BRIWSMessageClient2Server - Pas de requete dans le message");
            return $err;
        }
       
        
        // recupe de la requete
        $this -> type = $ArrayOfArgsEnvoyedParLeClient['class'];

        // recupe de la requete
        $this -> requete = $ArrayOfArgsEnvoyedParLeClient['requete'];

        // recupe de la requete
        if (isset ($ArrayOfArgsEnvoyedParLeClient['args'])) {
            if (is_array($ArrayOfArgsEnvoyedParLeClient['args'])) {
                foreach ($ArrayOfArgsEnvoyedParLeClient['args'] as $OneArrayValue) {
                    foreach ($OneArrayValue as $key => $value) {
                        $this->Args[$key]=$value;                        
                    }
                }          
            }
        }
        $this->logger->debug("::buildFromArray - REturn OK");
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

