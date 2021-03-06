<?php
ini_set('error_reporting', E_ALL);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
ini_set('display_errors', 'on');

include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/Envt/BRIConst.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/nanie/server/Envt/BRIConfigs.php';

class BRIEnvt {
    const isLOCALSERVER = true;
    const _DEBUGLEVEL = BRIConst::_ERROR;
    const _DEBUGMAIL = true;
    const _DEBUGMAIL_EMAIL = 'planninglabo.mel@gmail.com';
    
    const SMTP_GMAIL = 'smtp.gmail.com';
    const SMTP_GMAIL_USER = 'planninglabo.mel@gmail.com';
    const SMTP_GMAIL_USER_PWD = 'wylgyrobtfqxuijm';

    
    // Cookie de cnx
    const COOKIE_LOGGING = "BricoCookie";

    // access DB
    const DBUser = BRIConfigs::_DBUser[BRIConfigs::_currentConfig];
    const DBPassword = BRIConfigs::_DBPassword[BRIConfigs::_currentConfig];
    const DBBaseName= BRIConfigs::_DBBaseName[BRIConfigs::_currentConfig];
    const DBHost = BRIConfigs::_DBUHost[BRIConfigs::_currentConfig];
    const DBPort = BRIConfigs::_DBPort[BRIConfigs::_currentConfig];

    
    // les path
    const relativeDocRoot = '/nanie/';
    const relativeWSPath = '/nanie/server/WS/BRIWS.php';
    const PathToVault = '/nanie/server/vault';
    const ShortPathToVault = 'server/vault';
    
    // fichier a uploader
    const ExternalFilePATHTODISK = 'upload/';
    
    // log php
    const tracePATHTODISK = '/nanie/logs/';
    const traceFILE = "traces.log";

    
    
    public static function getDebugLevel () {
        return self::_DEBUGLEVEL;
    }
            
}
