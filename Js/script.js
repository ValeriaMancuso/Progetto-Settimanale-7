var Utente = /** @class */ (function () {
    function Utente(_credito, _numeroChiamate) {
        this._credito = _credito;
        this._numeroChiamate = _numeroChiamate;
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    Utente.prototype.ricarica = function (valore) {
        return this.credito + valore;
    };
    Utente.prototype.chiamata = function (minuti) {
        return this.credito = this.credito - ((0.20 * minuti) * this.numeroChiamate);
    };
    Utente.prototype.numero404 = function () {
        return this.credito;
    };
    Utente.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Utente.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return Utente;
}());
var primoUtente = new Utente(60, 2);
console.log('PRIMO UTENTE');
console.log('Credito iniziale: ', primoUtente.credito);
primoUtente.ricarica(10);
primoUtente.chiamata(3);
console.log('Credito residuo: ', primoUtente.numero404());
console.log('Numero Chiamate: ', primoUtente.getNumeroChiamate());
console.log('Chiamate azzerate: ', primoUtente.azzeraChiamate());
var secondoUtente = new Utente(40, 3);
console.log('-------------');
console.log('SECONDO UTENTE');
console.log('Credito iniziale: ', secondoUtente.credito);
secondoUtente.ricarica(20);
secondoUtente.chiamata(5);
console.log('Credito residuo: ', secondoUtente.numero404());
console.log('Numero Chiamate: ', secondoUtente.getNumeroChiamate());
console.log('Chiamate azzerate: ', secondoUtente.azzeraChiamate());
var terzoUtente = new Utente(30, 2);
console.log('-------------');
console.log('TERZO UTENTE');
console.log('Credito iniziale: ', terzoUtente.credito);
terzoUtente.ricarica(20);
terzoUtente.chiamata(3);
console.log('Credito residuo: ', terzoUtente.numero404());
console.log('Numero Chiamate: ', terzoUtente.getNumeroChiamate());
console.log('Chiamate azzerate: ', terzoUtente.azzeraChiamate());
