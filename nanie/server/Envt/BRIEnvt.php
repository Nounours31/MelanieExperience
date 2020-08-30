<?php
ini_set('error_reporting', E_ALL);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
ini_set('display_errors', 'on');

include_once $_SERVER['DOCUMENT_ROOT'].'nanie/server/Envt/BRIConst.php';

class BRIEnvt {
    const isLOCALSERVER = true;
    const _DEBUGLEVEL = BRIConst::_ALL;
    const _DEBUGMAIL = true;
    const _DEBUGMAIL_EMAIL = 'pfs@3ds.com';
    
    
    // Cookie de cnx
    const COOKIE_LOGGING = "BricoCookie";

    // access DB
    const DBUser = "root"; //root; 
    const DBPassword =""; /* */
    const DBBaseName= "nanie";
    const DBHost = "127.0.0.1";
    const DBPort = 3306;

    
    // les path
    const relativeDocRoot = 'nanie/';
    const relativeWSPath = 'nanie/server/WS/BRIWS.php';
    
    // fichier a uploader
    const ExternalFilePATHTODISK = 'upload/';
    
    // log php
    const tracePATHTODISK = 'logs/';
    const traceFILE = "traces.log";

    
    
    public static function getDebugLevel () {
        return self::_DEBUGLEVEL;
    }
            
}
