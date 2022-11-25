interface Smartphone {
    credito: number;
    numeroChiamate: number;

    ricarica(valore: number): void;
    chiamata(minuti: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

class Utente implements Smartphone {
    credito: number;
    numeroChiamate: number;
    
   
    constructor(public _credito: number, public _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
          
    }

    public ricarica(valore: number): number {
        return this.credito + valore;
    }
    public chiamata(minuti: number): number {
        return this.credito = this.credito - ((0.20 * minuti) * this.numeroChiamate);
    }
    public numero404(): number {
        return this.credito;
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): number {
       return this.numeroChiamate = 0;
    }

    
}

let primoUtente = new Utente(60,2);
console.log('PRIMO UTENTE');
console.log('Credito iniziale: ', primoUtente.credito);

primoUtente.ricarica(10);
primoUtente.chiamata(3);

console.log('Credito residuo: ', primoUtente.numero404());
console.log('Numero Chiamate: ', primoUtente.getNumeroChiamate());
console.log('Chiamate azzerate: ', primoUtente.azzeraChiamate());

let secondoUtente = new Utente(40,3);

console.log('-------------');

console.log('SECONDO UTENTE');
console.log('Credito iniziale: ', secondoUtente.credito);

secondoUtente.ricarica(20);
secondoUtente.chiamata(5);

console.log('Credito residuo: ', secondoUtente.numero404());
console.log('Numero Chiamate: ', secondoUtente.getNumeroChiamate());
console.log('Chiamate azzerate: ', secondoUtente.azzeraChiamate());

let terzoUtente = new Utente(30,2);
console.log('-------------');

console.log('TERZO UTENTE');
console.log('Credito iniziale: ', terzoUtente.credito);

terzoUtente.ricarica(20);
terzoUtente.chiamata(3);

console.log('Credito residuo: ', terzoUtente.numero404());
console.log('Numero Chiamate: ', terzoUtente.getNumeroChiamate());
console.log('Chiamate azzerate: ', terzoUtente.azzeraChiamate());


