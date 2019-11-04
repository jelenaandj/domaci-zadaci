//Koliko zadati mesec ima dana, 
//Postoji boolean koji govori da li je godina prestupna.

// let time = new Date();
// let month = time.getMonth();
// console.log(month);

// let dayinmonth = 0;
// dayinmonth = time.getDay()
// console.log(dayinmonth);

// let year = time.getFullYear();
// console.log(year);

let month = 4;
let numbofdays = 1;
let isLeap = false;



/*if (year % 4 == 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`)
}*/

switch (month + 1) {
    case 1:
        numbofdays = 31;
        break;
    case 2:
        numbofdays = 28;
        break;
    case 3:
        numbofdays = 31;
        break;
    case 4:
        numbofdays = 30;
        break;
    case 5:
        numbofdays = 31;
        break;
    case 6:
        numbofdays = 30;
        break;
    case 7:
        numbofdays = 31;
        break;
    case 8:
        numbofdays = 31;
        break;
    case 9:
        numbofdays = 30;
        break;
    case 10:
        numbofdays = 31;
        break;
    case 11:
        numbofdays = 30;
        break;
    case 12:
        numbofdays = 31;
        break;

}
if (isLeap == false) {
    console.log(`number of days in ${month}. month is ${numbofdays}`);
} else {
    console.log(`true`);
}