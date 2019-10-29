// zadatak 1

var a = 4;
var b = 2;

var zbir = a + b;
console.log(zbir);

var razlika = a - b;
console.log(razlika);

var proizvod = a * b;
console.log(proizvod);

var kolicnik = a / b;
console.log(kolicnik);

var ostatak = a % b;
console.log(ostatak);

var stepen = Math.pow(a, b);
console.log(stepen);

// zadatak 3
var br = 3;

if (br % 3 == 0) {
    console.log(`broj ${br} je deljiv sa 3`);

} else {
    console.log(`broj ${br} nije deljiv sa 3`)
}

//zadatak 4

var i = 0;
for (i = 1; i <= 1000; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}