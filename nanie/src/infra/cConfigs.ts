enum eConfigConnues {
    Nanie = 0,
    Paps = 1
}

export class cConfigs {
    private static readonly _currentConfig: eConfigConnues = eConfigConnues.Nanie;

    private static readonly _ajaxWSURL: string[] = [
        'http://localhost/nanie/server/WS/BRIWS.php', /* Nanie */
        'http://localhost:88/nanie/server/WS/BRIWS.php' /* Paps */
    ];

    public static ajaxWSURL() : string {
        return cConfigs._ajaxWSURL[cConfigs._currentConfig];
    }

}