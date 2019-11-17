////////////1
let recept1 = {
    imeRecepta: 'mafini',
    tezinaRecepta: 'pocetni',
    sastojci: ['100 g šećera', '1 kesica vanilinog šećera', '2 jajeta', '50 gr istopljene crne čokolade', '200 ml mleka'],
}

let recept2 = {
    imeRecepta: 'krofne',
    tezinaRecepta: 'laki',
    sastojci: ['1 kašičica soli', '50 gr. svežeg kvasca', '3 žumanceta', '100 gr. čokolade', '60 gr. šećera', '150 ml. mleka'],
}

let recept3 = {
    imeRecepta: 'pileca corba',
    tezinaRecepta: 'srednji',
    sastojci: ['1 rendana šargarepa', '200 g pilećeg mesa', 'ulje', '1 kašika brašna', '1/2 kašičice bibera'],
}

let recept4 = {
    imeRecepta: 'makarone',
    tezinaRecepta: 'tezak',
    sastojci: ['200 g makarona', '400 ml kisele vode', '200 ml pavlake za kuvanje', ' 150 ml mleka', '200 g sira', ' 2 jajeta'],
}

let recept5 = {
    imeRecepta: 'paprikas',
    tezinaRecepta: 'majstor',
    sastojci: ['1 pile', '1 kg krompira', '1 dl ulja', '1 šargarepa', '1 paradajz', '2 glavice crnog luka', '1 paprika'],
}



function ispisiRecept(recept) {
    return `${recept.imeRecepta}:\n${recept.tezinaRecepta}\n${recept.sastojci}`
}

console.log(ispisiRecept(recept1));
console.log(ispisiRecept(recept2));
console.log(ispisiRecept(recept3));
console.log(ispisiRecept(recept4));
console.log(ispisiRecept(recept5));


///////// zadatak2

let svirecepti = [recept1, recept2, recept3, recept4, recept5];

svirecepti.forEach(recept => {
    if (recept.tezinaRecepta == 'laki' || recept.tezinaRecepta == 'pocetni') {
        console.log(`${recept.imeRecepta}:\n<Laki || Pocetni>\n${recept.sastojci}`);
    }
});