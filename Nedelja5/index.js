let listaOpis = document.querySelector('#lista');
let opis = document.querySelector('#opis');
let iznosOpis = document.querySelector('#iznos');
let dugme = document.querySelector('#dugme');
let totalPrihod = document.querySelector('#totalPrihod');
let totalRashod = document.querySelector('#totalRashod');

var sumaPrihoda = 0;
var sumaRashoda = 0;

dugme.addEventListener('click', function() {
    let divv = document.createElement("div");
    divv.className = 'divZaispis';

    if (listaOpis.value == 'prihod' && listaOpis.value.trim() != '') {
        sumaPrihoda += parseInt(iznosOpis.value);
        ispis('#ispisPrihoda', divv);
        totalPrihod.innerHTML = sumaPrihoda;

        updateHeaderProcenat();
    } else if (listaOpis.value == 'rashod' && totalPrihod.innerHTML > 0) {
        sumaRashoda += parseInt(iznosOpis.value);
        ispis('#ispisRashoda', divv);
        totalRashod.innerHTML = sumaRashoda;

        updateHeaderProcenat();
    } else { alert('Greska'); }
    return;
});

function ispis(divZaIspis, divv) {
    let opisDiv = document.createElement("label");
    opisDiv.innerHTML = opis.value;

    let iznosOpisDiv = document.createElement("label");
    iznosOpisDiv.innerHTML = iznosOpis.value;

    divv.appendChild(opisDiv);
    divv.appendChild(iznosOpisDiv);

    let deleteDugme = document.createElement('button');
    deleteDugme.className = 'dugme-za-brisanje';
    deleteDugme.innerHTML = 'Izbrisi';
    deleteDugme.addEventListener('click', function() {
        divv.remove();
        if (divZaIspis == '#ispisPrihoda') {
            sumaPrihoda -= divv.children[1].innerHTML;
            totalPrihod.innerHTML = sumaPrihoda;
        }
        if (divZaIspis == '#ispisRashoda') {
            sumaRashoda -= divv.children[1].innerHTML;
            totalRashod.innerHTML = sumaRashoda;
        }
        updateHeaderProcenat();

        let totalRezultat = document.querySelector('#total');
        totalRezultat.innerHTML = sumaPrihoda - sumaRashoda;
        updateProcenat();
    });

    if (listaOpis.value == 'rashod') {
        let procenat = document.createElement('p');
        procenat.className = 'procenatZaRashode';
        procenat.innerHTML = Math.round(iznosOpis.value * 100 / sumaPrihoda) / 100;

        divv.appendChild(procenat);
    }

    updateProcenat();

    divv.appendChild(deleteDugme);

    document.querySelector(divZaIspis).appendChild(divv);

    let totalRezultat = document.querySelector('#total');
    totalRezultat.innerHTML = sumaPrihoda - sumaRashoda;
    return;
}

function updateProcenat() {
    let inputs = document.querySelectorAll('.procenatZaRashode');
    if (inputs.length > 0) {
        inputs.forEach(element => {
            if (element != 'undefined' && element != null && sumaPrihoda > 0) {
                element.innerHTML = Math.round(element.previousElementSibling.innerHTML * 100 / sumaPrihoda) / 100;
            } else {
                element.innerHTML = 0;
            }
        });
    }
}

function updateHeaderProcenat() {
    let vrednost = Math.round(sumaRashoda * 100 / sumaPrihoda) / 100;
    document.querySelector('#procenat').innerHTML = isFinite(vrednost) && vrednost != null ? vrednost : 0;
}

let a = new Date;
let m = '';

switch (a.getMonth() + 1) {
    case 1:
        m = 'Januar';
        break;
    case 2:
        m = 'Februar';
        break;
    case 3:
        m = 'Mart';
        break;
    case 4:
        m = 'April';
        break;
    case 5:
        m = 'Maj';
        break;
    case 6:
        m = 'Jun';
        break;
    case 7:
        m = 'Jul';
        break;
    case 8:
        m = 'Avgust';
        break;
    case 9:
        m = 'Septembar';
        break;
    case 10:
        m = 'Oktobar';
        break;
    case 11:
        m = 'Novembar';
        break;
    case 12:
        m = 'Decembar';
        break;
    default:
        break;
}

document.querySelector("#heder").innerHTML = `Dostupan budzet za ${m}`;