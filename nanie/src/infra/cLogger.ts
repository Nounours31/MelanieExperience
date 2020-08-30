    export enum eLoggerLevel {
        All         = 0,
        Debug       = 50,
        Warning     = 100,
        Error       = 150,
        Fatal       = 200
    }

    export class cLogger {
        private _level: number = 0;

        constructor (level: eLoggerLevel, id: string = '') {
            this._level = level;
        }

        public All (msg: string): void {
            this._log(msg, eLoggerLevel.All);
        }

        public Debug (msg: string): void {
            this._log(msg, eLoggerLevel.Fatal);
        }

        public Warning (msg: string): void {
            this._log(msg, eLoggerLevel.Fatal);
        }

        public Error (msg: string): void {
            this._log(msg, eLoggerLevel.Fatal);
        }


        public Fatal(msg: string): void {
            this._log(msg, eLoggerLevel.Fatal);
        }

        private _log (msg: string, level: number): void {
            if (level > this._level)
                console.log (msg);
        }
    }
