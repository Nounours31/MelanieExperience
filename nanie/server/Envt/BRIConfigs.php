<?php 

abstract class eConfigConnues
{
    const Nanie = 0;
    const Paps = 1;
    // etc.
}

class BRIConfigs {
    const _currentConfig = eConfigConnues::Nanie;

     const _DBUser = [ 'root', 'root' ];
     const _DBPassword = [ '', '' ];
     const _DBBaseName = [ 'melanie_fages', 'melanie_fages' ];
     const _DBHost = [ '127.0.0.1', '127.0.0.1' ];
     const _DBPort = [ 3307, 3306 ];
}
?>