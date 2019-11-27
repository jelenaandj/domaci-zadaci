// Зашто користимо JSON?

//da bi nasa web app komuncirala sa serverom

// Зашто су модули корисни? +Пример

//da bi jasno odvojili funkcionalnosti aplikacije tj module, view i service (MVC) i mogli da koristimo stare i ubacujemo nove elemente i module.
//na primeru sa itBootPizza mozemo dodavati pizze i menjati informacije na samo jednom mestu. 


// Шта је ECMAScript?
//standard na kome se zasniva js



// Опишите како функционишу HTTP захтеви и шта је то REST API.

//web app salje zahtev za nekim resursom serveru i 
//onda server preko svojih end pontova prikuplja i salje nazad korisniku.
// REST je arhitektonski obrazac za dizajn api-ja. koristi http zahteve GET POST PUT DELETE


// Која је разлика између == и === ?
// '5'==5 true
// '5'===5 false; strozije poredjenje od samo ==
// 


// Шта враћа console.log(typeof typeof true);
// Објаснити зашто

//vraca string zato sto typeof operator uvek vraca string; 
console.log(typeof true); //boolean
console.log(typeof typeof true); //string