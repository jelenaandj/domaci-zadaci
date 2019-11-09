let orderButtons = document.getElementsByClassName('btn-order');
console.log(orderButtons);
var orderCount = document.getElementById('counter');
var count = 1;

for (let button of orderButtons) {
    button.addEventListener('click', function() { orderButtonsCount(button); });
}


function orderButtonsCount(element) {
    console.log(element);
    orderCount.innerHTML = count++;
}

////...................................

let orderButtonsNow = document.getElementsByClassName('btn-order-now');


for (let button of orderButtonsNow) {
    button.addEventListener('click', function() { resetTozero(button) });
}

function resetTozero() {
    let time = new Date();
    if (count > 1) {
        alert(`Narucili ste ${count-1} pizza. ${dateToday(time)}`);
        count = 0;
        orderCount.innerHTML = 0;
    } else {
        alert(`Greska`);

    }
}

function dateToday(time) {
    time = new Date();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let timeString = `[${hours}:${minutes}:${seconds}  ${date}.${month+1}.${year}.]`
    return timeString;
}