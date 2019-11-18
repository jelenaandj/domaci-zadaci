let companyName = document.querySelector('#txt-company-name');
let companyPIB = document.querySelector('#txt-company-pib');
let companyDate = document.querySelector('#txt-time');
let companyValue = document.querySelector('#txt-value');
let insertButton = document.querySelectorAll('#btn-add');
let timeStamp = document.querySelector('#insert-timestamp');
let container = document.querySelector('#item-list');




document.querySelector('#btn-add').addEventListener('click', function() {

    let companyNameValue = companyName.value;
    let companyPIBValue = companyPIB.value;
    let companyDateValue = companyDate.value;
    let companyValueVal = companyValue.value;

    if (companyNameValue.trim() == '' || companyPIBValue == '' || companyPIBValue.length > 8 || companyPIBValue.length < 8 || companyDateValue == '' || companyValueVal == isNaN(companyValueVal)) { alert('greska'); return; }

    let companyNameContainer = document.createElement('p');
    companyNameContainer.className = 'sveFakture';
    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerHTML = 'delete';


    companyNameContainer.innerHTML = companyNameValue + companyPIBValue + companyDateValue + companyValueVal;


    companyNameContainer.innerHTML = companyPIBValue;
    companyNameContainer.className = 'name-container';
    container.appendChild(companyNameContainer);
    container.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {

        companyNameContainer.remove();
        deleteButton.remove();

    })

    let x = new Date();

    companyNameContainer.innerHTML = companyNameValue + ' ' + companyPIBValue + ' ' + companyDateValue + ' ' + companyValueVal + ' ' + x;
    console.log(companyNameContainer);

});