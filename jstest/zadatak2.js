//Napisati program koji racuna prosek brojeva deljivih sa 7 u intervalu od M do N 
//uključujući M i N


var m = 1;
var n = 22;
var i = 1;
var sum = 1;
var average = 1;
for (i = m; i < n; i++) {
    if (i % 7 == 0) {
        console.log(i);
        sum += i;
    }




}
average += sum / i;
console.log(average);