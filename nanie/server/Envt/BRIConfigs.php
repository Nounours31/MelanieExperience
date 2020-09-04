<?php 

abstract class eConfigConnues
{
    const Nanie = 0;
    const Paps = 1;
    // etc.
}

class BRIConfigs {
    private const _currentConfig = eConfigConnues.Nanie;

    private const _ajaxWSURL = [ 'http://localhost/nanie/server/WS/BRIWS.php', 'http://localhost:88/nanie/server/WS/BRIWS.php'];

    private const _DBUser = [ 'root', 'root' ];
    private const _DBPassword = [ '', '' ];
    private const _DBBaseName = [ 'melanie_fages', 'melanie_fages' ];
    private const _DBHost = [ '127.0.0.1', '127.0.0.1' ];
    private const _DBPort = [ 3307, 3306 ];


    public static function DBUser() { return self::_DBUser[self::_currentConfig]; }
    public static function DBPassword() { return self::_DBPassword[self::_currentConfig]; }
    public static function DBBaseName() { return self::_DBBaseName[self::_currentConfig]; }
    public static function DBHost() { return self::_DBHost[self::_currentConfig]; }
    public static function DBPort() { return self::_DBPort[self::_currentConfig]; }
}
?>