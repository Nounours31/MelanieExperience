<?php
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/tools/BRIUID.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Tools
 *
 * @author PFS
 */
class BRITools {
    public static function arrayToString($array) {
        $s = "";
        if (!is_array($array))
            return $array;
        
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                $r = BRITools::arrayToString($value);
                $s .= '['.$key.' : ['.$r.']]';
            }
            else if (is_object($value)) {
                $r = get_class ($value);
                $s .= '['.$key.' : {obj: '.$r.'}]';
            }
            else {
                $s .= '['.$key.' : {'.$value.'}]';
            }
        }
        return $s;
    }
    
    
    public static function isInputsValides($aListInputAttendues, $methode) {
        if (!isset($methode)) return false;
        
        foreach ($aListInputAttendues as $value) {
            if (!array_key_exists($value, $methode))    return false;
            if (!isset ($methode[$value]))              return false;
            if (strlen ($methode[$value]) < 1)          return false;

        }
        return true;
    }
    
    
    public static function echapJSONPourMessageOut($msgOut) {
        $healthy = array("[", "]", "{", "}", ":", ",", "'", "\"", "\\");
        $yummy   = array("<", ">", "<", ">", "#", "#", "-", "-", "-");        
        $newphrase = str_replace($healthy, $yummy, $msgOut);
        return $newphrase;
    }

    public static function UUID() {
        return BRIUID::guid();
    }
    
    public static function myJsonEncode ($msg) {
        $retour = json_encode($msg);
        $_l = new BRILogger('BRITools::myJsonEncode');
        
        $IsErrorRaised = true;
        switch (json_last_error()) {
            case JSON_ERROR_NONE:
            $IsErrorRaised = false;
            break;
            case JSON_ERROR_DEPTH:
                $_l ->fatal(' - Profondeur maximale atteinte');
            break;
            case JSON_ERROR_STATE_MISMATCH:
                $_l ->fatal( ' - Inadéquation des modes ou underflow');
            break;
            case JSON_ERROR_CTRL_CHAR:
                $_l ->fatal( ' - Erreur lors du contrôle des caractères');
            break;
            case JSON_ERROR_SYNTAX:
                $_l ->fatal( ' - Erreur de syntaxe ; JSON malformé');
            break;
            case JSON_ERROR_UTF8:
                $_l ->fatal( ' - Caractères UTF-8 malformés, probablement une erreur d\'encodage');
            break;
            default:
                $_l ->fatal( ' - Erreur inconnue');
            break;
        }   
        if ($IsErrorRaised) {
            $retour = json_encode($msg, JSON_HEX_TAG | JSON_HEX_AMP  | JSON_HEX_APOS  | JSON_UNESCAPED_UNICODE  | JSON_PARTIAL_OUTPUT_ON_ERROR  | JSON_INVALID_UTF8_IGNORE );
            switch (json_last_error()) {
                case JSON_ERROR_NONE:
                    $_l ->fatal(' OK ... ');
                break;
                case JSON_ERROR_DEPTH:
                    $_l ->fatal(' - Profondeur maximale atteinte');
                break;
                case JSON_ERROR_STATE_MISMATCH:
                    $_l ->fatal( ' - Inadéquation des modes ou underflow');
                break;
                case JSON_ERROR_CTRL_CHAR:
                    $_l ->fatal( ' - Erreur lors du contrôle des caractères');
                break;
                case JSON_ERROR_SYNTAX:
                    $_l ->fatal( ' - Erreur de syntaxe ; JSON malformé');
                break;
                case JSON_ERROR_UTF8:
                    $_l ->fatal( ' - Caractères UTF-8 malformés, probablement une erreur d\'encodage');
                break;
                default:
                    $_l ->fatal( ' - Erreur inconnue');
                break;
            }   
        }
        return $retour;
    }
}
