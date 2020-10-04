<?php

include_once $_SERVER['DOCUMENT_ROOT'] . '/nanie/server/Envt/BRIENVT.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/nanie/server/WS/iBRIWSApi.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/nanie/server/tools/BRITools.php';

/* * *******************************************************************************************
 * Classe mere de tous les implementation des API 
 * 
 * Semble pour le moment inutile
 * ****************************************************************************************** */

class BRIWSApi extends iBRIWSApi {

    protected $loger = null;

    // --------------------------------------------------------------------------------------
    // ctor
    // --------------------------------------------------------------------------------------
    function __construct($className = "BRIWSApi") {
        $this->logger = new BRILogger($className);
    }

    function executeRequest($msgIN, &$referenceMsgOut) {
        throw new Exception("Not implemented");
    }

    // --------------------------------------------------------------------------------------
    // session checker
    // --------------------------------------------------------------------------------------
    /* Check if session info are set */
    function lightCheckBeforeStart() {
        $this->logger->all("StepInto lightCheckBeforeStart");
        $secu = new BRISecurite();
        $secu->lightCheck();
    }

    function checkBeforeStart() {
        $this->logger->debug("StepInto checkBeforeStart");
        $secu = new BRISecurite();
        $secu->Check();
    }

    // --------------------------------------------------------------------------------------
    // Inputs parser
    // --------------------------------------------------------------------------------------
    function decodeInput() {
        $retour = new BRIWSMessageClient2Server();
        $contenu = array();

        # debug
        $content = trim(file_get_contents("php://input"));
        $this->logger->debug("BRIWSApi::decodeInput\nPHP input is:\n -->" . $content . "<--");
        # end debug
        //Make sure that it is a POST request.
        if (strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0) {
            throw new Exception('Request method must be POST!');
        }

        // selon le contenu parsing different
        $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
        $this->logger->debug("BRIWSApi::decodeInput contentType is -->" . $contentType . "<--");
        if (strstr($contentType, 'application/json') === FALSE) {
            if (strstr($contentType, 'x-www-form-urlencoded') === FALSE) {
                if (strstr($contentType, 'multipart/form-data') === FALSE) {
                    throw new Exception('Content type must be: application/json OR x-www-form-urlencoded- find OR multipart/form-data ' . $contentType);
                } else {
                    $contenu = $this->_decodeMultiPartFormData();
                }
            } else {
                $contenu = $this->_decodeFormURLEncodedInput();
            }
        } else {
            $contenu = $this->_decodeJSONInput();
        }

        $err = $retour->buildFromArray($contenu);
        if ($err->FAILED()) {
            $this->logger->debug("buildFromArray:: failed - err :" . $err->toString());
            $this->logger->debug("buildFromArray:: Dump du context :" . is_array($contenu) . " Contenu: -->" . (is_array($contenu) ? BRITools::arrayToString($contenu) : $contenu));
            throw new Exception('iBRIWSApi::decodeInput # unable to parse -- err:' . $err->toString());
        }
        return $retour;
    }

    // --------------------------------------------------------------------------------------
    // Private Inputs parser selon les infos entrees
    // --------------------------------------------------------------------------------------
    private function _decodeJSONInput() {
        $this->logger->debug("BRIWSApi::_decodeJSONInput --> try to decode input as JSON ...");

        //Receive the RAW post data.
        $content = trim(file_get_contents("php://input"));

        //Attempt to decode the incoming RAW post data from JSON.
        $decoded = json_decode($content, true);
        if ($decoded == null) {
            $this->logger->debug("BRIWSApi::_decodeJSONInput -- json decoded: NULL");
            throw new Exception('iBRIWSApi::_decodeJSONInput # unable to parse -- invalid json format test it first ...');
        } else
            $this->logger->debugTab("BRIWSApi::_decodeJSONInput --> json:\n", $decoded);
        return $decoded;
    }

    private function _decodeFormURLEncodedInput() {
        $this->logger->debug("BRIWSApi::_decodeFormURLEncodedInput --> try to decode input as FORMurlEncoded ...");
        foreach ($_POST as $key => $value) {
            $msg .= '[' . $key . '] = ';
            if (is_array($value))
                $msg .= BRITools::arrayToString($value);
            else
                $msg .= $value;
            $msg .= '; ';
        }
        $this->logger->debug("BRIWSApi::_decodeFormURLEncodedInput --> POST Vlaues are:\n" . $msg);


        $decode = array();
        foreach ($_POST as $key => $value) {
            $decode[$key] = $value;
        }
        return $decode;
    }

    private function _decodeMultiPartFormData() {
        $this->logger->debug("BRIWSApi::_decodeFormURLEncodedInput --> try to decode input as MULTIPART");

        $decode = array();
        if (isset($_POST)) {
            $this->logger->debugTab("decode POST:", $_POST);
            $decode['_args'] = array();
            foreach ($_POST as $key => $value) {
                if (substr($key, 0, 1) === "_") {
                    $decode [$key] = $value;
                } else {
                    $UnArg = array();
                    $UnArg['nom'] = $key;
                    $UnArg['val'] = $value;
                    array_push($decode['_args'], $UnArg);
                }
            }
            $this->logger->debugTab("BRIWSApi::_decodeFormURLEncodedInput --> POST Values are:\n", $decode);
        }

        if (isset($_FILES)) {
            $this->logger->debugTab("BRIWSApi::_decodeFormURLEncodedInput --> FILES:", $_FILES);
            $decode['__FILES__'] = array();
            foreach ($_FILES as $key => $value) {
                $isMultipleUpload = false;
                if (is_array($_FILES[$key]['name'])) {
                    $isMultipleUpload = true;
                }
                if (!$isMultipleUpload) {
                    if ($_FILES[$key]['error'] != 0) {
                        continue;
                    }
                    if ($_FILES[$key]['size'] < 1) {
                        continue;
                    }
                    $unFichier = array();
                    $unFichier['key'] = $key;
                    $unFichier['name'] = $_FILES[$key]['name'];
                    $unFichier['type'] = $_FILES[$key]['type'];
                    $unFichier['absolute_path'] = $_FILES[$key]['tmp_name'];
                    $decode['__FILES__'][BriTools::UUID()] = $unFichier;
                } else {
                    for ($i = 0; $i < count($_FILES[$key]['name']); $i++) {
                        if ($_FILES[$key]['error'][$i] != 0) {
                            continue;
                        }
                        if ($_FILES[$key]['size'][$i] < 1) {
                            continue;
                        }
                        $unFichier = array();
                        $unFichier['key'] = $key . '_indice_' . $i;
                        $unFichier['name'] = $_FILES[$key]['name'][$i];
                        $unFichier['type'] = $_FILES[$key]['type'][$i];
                        $unFichier['absolute_path'] = $_FILES[$key]['tmp_name'][$i];
                        $decode['__FILES__'][BRITools::UUID()] = $unFichier;
                        $this->logger->debugTab("BRIWSApi::_decodeFormURLEncodedInput --> FILES decode Interne: ", $decode);
                    }
                }
            }
        }


        if (count ($decode) == 0) {
            // read incoming data
            $input = file_get_contents('php://input');

            // grab multipart boundary from content type header
            preg_match('/boundary=(.*)$/', $_SERVER['CONTENT_TYPE'], $matches);
            $boundary = $matches[1];

            // split content by boundary and get rid of last -- element
            $a_blocks = preg_split("/-+$boundary/", $input);
            array_pop($a_blocks);

            // loop data blocks
            foreach ($a_blocks as $id => $block) {
                if (empty($block))
                    continue;

                // you'll have to var_dump $block to understand this and maybe replace \n or \r with a visibile char
                // parse uploaded files
                if (strpos($block, 'application/octet-stream') !== FALSE) {
                    // match "name", then everything after "stream" (optional) except for prepending newlines 
                    preg_match("/name=\"([^\"]*)\".*stream[\n|\r]+([^\n\r].*)?$/s", $block, $matches);
                }
                // parse all other fields
                else {
                    // match "name" and optional value in between newline sequences
                    preg_match('/name=\"([^\"]*)\"[\n|\r]+([^\n\r].*)?\r$/s', $block, $matches);
                }
                $a_data[$matches[1]] = $matches[2];
            }
        }
        return $decode;
    }

}
?>


