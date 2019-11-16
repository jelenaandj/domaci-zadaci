//////////////////

let sastojak1 = {
    imeSastojka: 'secer',
    kolicina: 1,
    cena: 80,
}
let sastojak2 = {
    imeSastojka: 'jaje',
    kolicina: 3,
    cena: 10,
}
let sastojak3 = {
    imeSastojka: 'cokolada',
    kolicina: 1,
    cena: 100,
}
let sastojak4 = {
    imeSastojka: 'vanilin secer',
    kolicina: 2,
    cena: 20,
}
let sastojak5 = {
    imeSastojka: 'mleko',
    kolicina: 1,
    cena: 150,
}

let recept1 = {
    imeRecepta: 'mafini',
    tezinaRecepta: 'pocetni',
    sastojci: [sastojak1, sastojak2, sastojak3, sastojak4, sastojak5],
    ukupnaCena: function() {
        let ukupno = 0;
        this.sastojci.forEach(sastojak => {
            ukupno += sastojak.kolicina * sastojak.cena;
        });
        return ukupno;
    }
}
console.log(recept1.ukupnaCena());