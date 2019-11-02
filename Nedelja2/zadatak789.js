//zadatak 7
var text = "";

for (var n = 1; n <= 5; n++) {
    text += "#";
    console.log(text);
}

//zadatak 8
for (var i = 1; i <= 5; i++) {
    var text = "";
    for (var j = 1; j <= 5; j++) {
        if (5 - i >= j) {
            text += " ";
        } else {
            text += "#";
        }
    }
    console.log(text);
}

//zadatak9
for (var i = 1; i <= 5; i++) {
    var text = "";
    for (var j = 1; j <= 11; j++) {
        if (5 - i >= j || 6 == j || 11 - 4 + i <= j) {
            text += " ";
        } else {
            text += "#";
        }
    }
    console.log(text);
}