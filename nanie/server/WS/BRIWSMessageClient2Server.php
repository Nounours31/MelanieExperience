<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/modele/BRISecurite.php';


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
    private $Token = '';              // le type de la requete
    
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
    public function getToken() { return $this->Token;}
    
    // --------------------------------------------------------------------------------------
    // prend un ensemble de valeur lue dans le php://input et 
    // en fait un message comprehensible pour les WS qui vont etre appelles
    // --------------------------------------------------------------------------------------
    function buildFromArray ($ArrayOfArgsEnvoyedParLeClient) {
        $this->logger->debug("BRIWSMessageClient2Server::buildFromArray - Is input valid ?");
        if (!isset($ArrayOfArgsEnvoyedParLeClient)) {
            $err = new BRIError (5, "BRIWSMessageClient2Server - Pas de message a parser");
            return $err;
        }
        
        // est ce que le type de la requete est dans la demande
        $this->logger->debug("BRIWSMessageClient2Server::buildFromArray - Is input has _classe attribute ?");
        if (!isset ($ArrayOfArgsEnvoyedParLeClient['_classe'])) {
            $err = new BRIError (5, "BRIWSMessageClient2Server - Pas de requete dans le message");
            return $err;
        }
        $this -> type = $ArrayOfArgsEnvoyedParLeClient['_classe'];
        
        
        // est ce que le nom de la requete est dans la demande
        $this->logger->debug("BRIWSMessageClient2Server::buildFromArray - Is input has _requete attribute ?");
        if (!isset ($ArrayOfArgsEnvoyedParLeClient['_requete'])) {
            $err = new BRIError (5, "BRIWSMessageClient2Server - Pas de requete dans le message");
            return $err;
        }
        $this -> requete = $ArrayOfArgsEnvoyedParLeClient['_requete'];
       

        // est ce que le nom de la requete est dans la demande
        if (isset ($ArrayOfArgsEnvoyedParLeClient['nanie_token'])) {
            $this->logger->debug("BRIWSMessageClient2Server::buildFromArray - Is input has _Token attribute ?");
            $this -> Token = $ArrayOfArgsEnvoyedParLeClient['nanie_token'];
        }
        
        // recupe de la requete
        $this->logger->debug("BRIWSMessageClient2Server::buildFromArray - OK input - set classe info");
        if (isset ($ArrayOfArgsEnvoyedParLeClient['_args'])) {
            if (is_array($ArrayOfArgsEnvoyedParLeClient['_args'])) {
                // "_args":[{"nom":"uid","val":"7"}
                $this->logger->debug("BRIWSMessageClient2Server::buildFromArray - convert Json {nom:, val:} To PHP [nom]=val");
                foreach ($ArrayOfArgsEnvoyedParLeClient['_args'] as $OneArrayValue) {
                    $this->Args[$OneArrayValue['nom']]=$OneArrayValue['val'];
                }          
            }
        }
        $this->logger->debugTab("BRIWSMessageClient2Server::buildFromArray - Args are: \n", $this->Args);

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
        $retour = "{\n"
                . "\tClasse: ".$this -> type."\n"
                . "\tRequete: ".$this -> requete."\n"
                . "\tArgs: ". BRITools::arrayToString ($this -> Args)."\n"
                . "\tFiles: ". BRITools::arrayToString ($this -> Files)."\n"
                ."}";
        return $retour;
    }

    
    public function Dump () {
        $this->logger -> debug("Message input: \n" . $this -> toString());
    }
}
?>

