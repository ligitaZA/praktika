// žodiniai metodai, skaičių metodai, masyvų metodai

// Number

/* kreipimasis į number metodus prasideda žodžiu 'Math' už jo rašome tašką '.' ir už taško rašome metodo pavadinimą ir skliaustelius su galimais parametrais pvz Math.random(); (45.42354).toFixed(3) - nukirpimas. rasys 3 skaicius po kablelio 45.423

Math - atlieka skaičiavimus, pateikia dduomenis.

Number - atlieka pakeitimus, konvertavimus
*/

console.groupCollapsed();

let number = 50.2354675;

console.log(number.toFixed);
console.log(Math.floor(number));
console.log(Math.random( ) * number);
console.log(number.toString);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Math.pow(5,2)); // kelimas kvadratu
console.log(Math.sqrt(25));
console.log((Math.random() * number).toFixed(2));
console.log(number.toFixed(4)*1);
console.log();
console.log();

console.groupEnd();

// string

/*
String metodai yra kazkokius funkcijos, kurios atlieka kazkokius veiksmus su duotosiomis zodinemis reiksmemis.
Tam tikri metodai parametrus priima, kiti ne.

Beveik visi string metodai yra naudojami, daugelis panašūs į masyvų metodus.
*/
console.groupCollapsed();

let zodis = 'Labas . kjed .  . . . uheidugq  673//        p';
console.log(zodis.split(' '));
console.log(zodis[0]) // string galima traktuoti kaip masyva, nes veikia taip pat. dabar ismetu L raide, nes ji yra 0-oji.
console.log(zodis.charAt(0));
console.log(zodis.charAt(zodis.length-1));
console.log(zodis.length);
console.log(zodis.trim()); // isvalo tuscius tarpus
console.log(zodis.trim().split(' '));
console.log(zodis.includes(' s'));
console.log(zodis.slice(5,10));
console.log(zodis.replaceAll('.', ',')) // pakeicia taskelius i kablelius
console.log(zodis.replaceAll(/[0-9]/g, 'x')) // regex
console.log(zodis.concat(', ', 'labas', zodis));
console.log(zodis.toUpperCase());
console.groupEnd();

// regExp
/*
regular expresion - reguliariosios israiskos - yra nurodytos simboliu sekos, kurias turi atitikti vartotojo vedama informacija. tai gali buti tel nr kaip pavyzdys apacioje.

/d - digit [0-9]
[0-9] - digit nuo 0 iki 9
[a-z][A-Z] - chart nuo tokio iki tokio simbolio
{sk} - kiek sykiu kartoti pries tai nurodyta informacija
^ - kodo, sekos pradzia 
$ - sekos pabaiga
\s - tarpas
..........
*/
{
 let phoneRegex = ('^\(\+[0-9]{3})\s[0-9]{3}\s[0-9]{5}$'); 
}

// telefono numeris (+666) 666 6666

// console.groupCollapsed('TASKS')

// //task1
// // Number:
// //   1) Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją console() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).


// const milkPrice = 2;

// if(Number.isInteger(milkPrice)){
//   console.log('Centų nereikia')
// }else {
//   console.log('Centų reikės')
// }

// // task 2 
// // 2) Pakoreguok pirmą pratimą, kad console taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).


// if (Number.isInteger(milkPrice)) {
//   console.log('Centų nereikia')
// } else {
//   console.log('Centų reikės')
// }
// console.log(milkPrice.toFixed(2))

// // task 3 
// // 3) Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trimis skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     let kaina = Number(document.getElementById('kaina').value);
//     let kiekis = Number(document.getElementById('kiekis').value);
  
//     let total = kaina * kiekis;
  
//     const priceDisplay = document.createElement('h1');
//     priceDisplay.textContent = total.toFixed(2);
//     document.body.append(priceDisplay);
//   });



// //   JS string metodai, pratimai:
// // 1. Sukurk du input'us - vieną, kur vartotojas įves savo vardą; 
// // kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - console.log). 
// // Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas
// // tiek kartų, kiek skaičius nurodo.

// document.querySelector('form').addEventListener (('submit'), (e) => {
//   e.preventDefa
//   const name = document.getElementById('name').value;
//   const number = Number(document.getElementById('number').value);
//   if (Number.isInteger(number)) {
//     const h1 = document.createElement('h1');
//     h1.textContent = name.repeat(number);
//     document.body.append(h1);
//   } else {
//     console.log('Number is not an integer'); 
//   }
// })

// // 2. Sukurk input, kur vartotojas įves savo vardą.
// // Įvedus - console.log'ink kokio ilgio yra vardas. 
// // Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.


// document.getElementById('name').addEventListener(('keyup'), (e) => {
//  e.preventDefault ();
//   const name = document.getElementById('name').value.trim();
//   console.log('Length: ' + name.length);
// })

// // 3. Sukurk input, kur vartotojas įves savo pilną vardą
// // (t.y.vardą ir pavardę).Padaryk, kad JS pridėtų du h1 
// // tag'us, viename - vardas, kitame - pavardė.

// document.getElementById('pilnasvardas').addEventListener('keyup', () => {
// const pilnasvardas = document.getElementById('pilnasvardas').value.trim().split(' ');

//   const name = document.createElement('h1');
//   name.textContent = pilnasvardas[0];

//   const surname = document.createElement('h1');
//   surname.textContent = pilnasvardas[1];

//   document.body.append(name, surname);
// });

// // 4. Pakoreguok trečią pratimą, kad įskaičiuotų, 
// // jei pavardė ilgesnė nei vienas žodis.

// document.getElementById('pilnasvardas').addEventListener('keyup', () => {
//   const pilnasvardas = document.getElementById('pilnasvardas').value.trim();

//   const name = document.createElement('h1');
//   name.textContent = pilnasvardas.split(' ')[0];

//   const surname = document.createElement('h1');
//   surname.textContent = pilnasvardas.replace(name, '').slice(1);

//   document.body.append(name, surname);
// });
// console.groupEnd();

