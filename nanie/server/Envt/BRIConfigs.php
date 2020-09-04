<?php 

abstract class eConfigConnues
{
    const Nanie = 0;
    const Paps = 1;
    // etc.
}

class BRIConfigs {
    private const _currentConfig = eConfigConnues.Nanie;

    public const _ajaxWSURL = [ 'http://localhost/nanie/server/WS/BRIWS.php', 'http://localhost:88/nanie/server/WS/BRIWS.php'];
    public const _DBUser = [ 'root', 'root' ];
    public const _DBPassword = [ '', '' ];
    public const _DBBaseName = [ 'melanie_fages', 'melanie_fages' ];
    public const _DBHost = [ '127.0.0.1', '127.0.0.1' ];
    public const _DBPort = [ 3307, 3306 ];
}
?>