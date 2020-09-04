enum eConfigConnues {
    Nanie = 0,
    Paps = 1
}

export class cConfigs {
    private static readonly _currentConfig: eConfigConnues = eConfigConnues.Nanie;

    private static readonly _ajaxWSURL: string[] = [
        '/nanie/server/WS/BRIWS.php', /* Nanie */
        '/nanie/server/WS/BRIWS.php' /* Paps */
    ];

    public static ajaxWSURL() : string {
        return cConfigs._ajaxWSURL[cConfigs._currentConfig];
    }

}