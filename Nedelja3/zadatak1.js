function max(a, b, c) {
    var broj = a > b ? a : b;
    var veciBroj = broj > c ? broj : c;
    return veciBroj;
}
console.log(`najveci broj je ${max(1, 3, 6)}`);




function cena(cena, poluprecnik) {
    let rezultat;
    rezultat = cena / (Math.pow((poluprecnik), 2) * Math.PI);
    return rezultat

}
console.log(`cena pizze po cm² je ${cena(150,15)} din`);