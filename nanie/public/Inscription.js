import '../sass/myApps.scss';
import $ from 'jquery';
var Inscription = /** @class */ (function () {
    function Inscription() {
    }
    Inscription.prototype.main = function () {
        // ------------------------------------------------------------
        // Point d'entree de la page principale: 'root' 
        // ------------------------------------------------------------
        var rootDiv = $('.root');
        rootDiv.append('<p>Coucou</p>');
    };
    return Inscription;
}());
// ------------------------------------------------------------
// Call effectue par le JS du HTML
// ------------------------------------------------------------
var a = new Inscription();
a.main();
//# sourceMappingURL=Inscription.js.map