let username = document.createElement('input');
username.type = 'text';
username.placeholder = 'username';

let password = document.createElement('input');
password.type = 'text';
password.placeholder = 'password';

let button = document.createElement('button');
button.type = 'submit';
button.innerHTML = 'submit';


let app = document.querySelector('#app');

app.appendChild(username);
app.appendChild(password);
app.appendChild(button);

function get(username, pass) {
    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                if (user.username == username && user.pass == pass) {
                    alert(`korisnik postoji ${user.username} ${user.pass}`);
                    return;
                }
            })
        });
}

button.addEventListener('click', onClick);

function onClick() {
    let user = username.value;
    let pass = password.value;

    if (user.length < 3 || user.length > 15 || pass.length < 3 || pass.length > 15 || !isNaN(user[0])) {
        alert('greska');
    } else {
        get(user, pass);
    }
}


//da imamo backend pri kliku na dugme posle validacije poslala bih post metodom korisnikov unos backendu,
// a backend bi vrsio proveru jel postoji korisnik i vratio bi response na osnovu kog bi app dalje radila