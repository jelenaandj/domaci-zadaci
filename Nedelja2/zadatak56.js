//.......p pizze
var precnik = 30;
var cena = 150;
var cenapocm2 = cena / (Math.pow((precnik / 2), 2) * Math.PI);
console.log(`cena pizze po cm² je ${cenapocm2} din`);

//FizzBuzz ако је број дељив и са 3 и са 5
// Fizz ако је број дељив само са 3
// Buzz ако је број дељив само са 5
// Број ако није дељив ни са 3 ни са 5
var g = 1;
for (g = 1; g < 106; g++) {
    if (g % 3 == 0 && g % 5 == 0) {
        console.log('FizzBuzz');
    } else if (g % 3 == 0) {
        console.log('Fizz');
    } else if (g % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(g);
    }
}