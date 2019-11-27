console.log('It Works! :D');
//document.querySelector('#btn-add').addEventListener('click',()=>console.log("HAHA"));console.log('It Works! :D');

/*class Transaction {
    constructor(name, pib, dateIssued, value) {
        this.name = name;
        this.pib = pib;
        this.dateIssued = dateIssued;
        this.value = value;
        this.currency = 'RSD';
        let date = new Date();
        this.timestamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        this.dateStamp = getDate();
    }
}
 */
let transactions = [];

const btnLog = document.querySelector('#btn-log');
btnLog.addEventListener('click', () => {
    console.log(transactions);
});

const txtCompanyName = document.querySelector('#txt-company-name');
const txtCompanyPIB = document.querySelector('#txt-company-pib');
const txtDate = document.querySelector('#txt-time');
const txtValue = document.querySelector('#txt-value');
const btnAdd = document.querySelector('#btn-add');
const itemList = document.querySelector('#item-list');

[txtCompanyName, txtCompanyPIB, txtDate, txtValue].forEach(el => {
    el.addEventListener('keyup', (e) => {
        if (e.keyCode == 13) addTransaction();
    });
});

btnAdd.addEventListener('click', addTransaction);

function addTransaction() {
    let date = new Date();
    let transaction = {
            name: txtCompanyName.value.trim(),
            pib: txtCompanyPIB.value,
            date: txtDate.value,
            value: txtValue.value,
            currency: 'RSD',
            timestamp: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            dateStamp: getDate()
        }
        //let transaction = new Transaction(txtCompanyName.value.trim(), txtCompanyPIB.value, txtDate.value, txtValue.value);
    if (transaction.name == '') {
        return alert('Invalid comapny name!');
    }
    if (transaction.pib.length != 8 || isNaN(transaction.pib)) {
        return alert('Invalid PIB');
    }
    if (transaction.dateIssued == '') {
        return alert('Invalid date');
    }
    if (isNaN(transaction.value) || transaction.value == '') {
        return alert('Invalid value');
    }
    let itemContainer = document.createElement('div');
    itemContainer.className = 'item-container';
    let itemInfo = document.createElement('div');
    itemInfo.className = 'item-info';
    let itemInfoDivOne = document.createElement('div');
    addLabel('company-name', transaction.name, itemInfoDivOne);
    addLabel('company-pib', transaction.pib, itemInfoDivOne);
    addLabel('time-created', `${transaction.dateIssued}`, itemInfoDivOne);
    addLabel('price-value', `${transaction.value} ${transaction.currency}`, itemInfoDivOne);

    let itemInfoDivTwo = document.createElement('div');
    let currentDateTime = `<span>[${getDate()}]</span><span>${getTime()}</span>`;

    addLabel('insert-timestamp', currentDateTime, itemInfoDivTwo);

    itemInfo.appendChild(itemInfoDivOne);
    itemInfo.appendChild(itemInfoDivTwo);

    let itemActions = document.createElement('div');
    itemActions.className = 'item-actions';

    let btnDelete = document.createElement('button');
    btnDelete.className = 'item-trashCan';
    btnDelete.innerHTML = 'DELETE';
    btnDelete.addEventListener('click', deleteTransaction);

    itemActions.appendChild(btnDelete);
    itemContainer.appendChild(itemInfo);
    itemContainer.appendChild(itemActions);
    itemList.appendChild(itemContainer);

    console.log(transaction);

    txtCompanyName.value = '';
    txtCompanyPIB.value = '';
    txtDate.value = '';
    txtValue.value = '';

    transactions.push(transaction);
}

function deleteTransaction(e) {
    e.target.parentElement.parentElement.remove();
}

function addLabel(labelClass, labelValue, parentElem) {
    let label1 = document.createElement('label');
    label1.className = labelClass;
    label1.innerHTML = labelValue + ' ';
    parentElem.appendChild(label1);
}

function getDate() {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function getTime() {
    let date = new Date();
    return `@${date.getHours()}:${date.getMinutes()}`;
}