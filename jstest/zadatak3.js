var n = 14;
var text = '';


for (let i = 1; i <= n; i++) {
    text = '';
    for (let j = 1; j <= 8; j++) {
        if (5 - i == j || 3 + i == j) {
            text += '*';
        } else {
            text += ' ';
        }

    }
    console.log(text);


}


for (let i = 1; i <= n; i++) {
    text = '';
    for (let j = 1; j <= 9; j++) {
        if (j == i || j == 8 - i) {
            text += '*';
        } else {
            text += ' ';
        }

    }
    console.log(text);


}