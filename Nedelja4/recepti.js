let recept1 = {
    imeRecepta: 'mafini',
    tezinaRecepta: 'pocetni',
    sastojci: ['100 g šećera', '1 kesica vanilinog šećera', '2 jajeta', '50 gr istopljene crne čokolade', '200 ml mleka'],
}

class Recepti {
    constructor(name, tezina, sastojci) {
        this.imeRecepta = name;
        this.tezina = tezina;
        this.sastojci = sastojci;
    }
}
let mafini = new Recepti(recept1.imeRecepta, recept1.tezinaRecepta, recept1.sastojci);
// console.log(mafini);

function ispisiRecept(recept) {
    return `${recept.imeRecepta}:\n${recept.tezinaRecepta}\n${recept.sastojci}`;
}
console.log(ispisiRecept(mafini));