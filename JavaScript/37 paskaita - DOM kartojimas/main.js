// Filter
//   syntax:
//     filter((element, index, array) => { ... });
//   pvz:
//     items.filter( item => item > 10);
//   Ką daro:
//     Pereina per kiekvieną masyvo elementą ir jį prafiltruoja (taip kaip nurodyta iškviečiamojoje funkcijoje) ir sugrąžina tik tuos, kurie atitiko filtrą.
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//   Videos:
//     https://youtu.be/8kyLmsMYBBI
//     https://youtu.be/Q85O152q6UI
//     https://youtu.be/4_iT6EGkQfk
//     https://youtu.be/qmnH5MT_luk - ilgi bet, tikrai informatyvūs su paprastais paaiškinimais ir pavyzdžiais video pas šitą žmogelį.


// Reduce
//   syntax:
//     reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue);
//   pvz:
//     items.reduce((total, current) => {total + current}, 0);
//   Ką daro:
//     Sudeda visus masyvo elementus rekursijos būdu. Galima nustatyti pradinę reikšmę(nuo kokio skaičiaus skaičiuos).
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//   Videos:
//     https://youtu.be/tVCYa_bnITg
//     https://youtu.be/g1C40tDP0Bk
//     https://youtu.be/PAwd4gjb7aI
//     https://youtu.be/wM6WkVNMDuI


// Užduotys:
// 	/* Kur parašyta "naudojant" - privalu panaudoti tą metodą, bet galima naudoti ir kitus jei to neužtenka */
// 1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]


let meniu = [
  {id:0, name:"Burgeris", inStock:false, primeCost:2, cost:5},
  {id:1, name:"Burgeris_2", inStock:true, primeCost:2, cost:5},
  {id:2, name:"Burgeris_3", inStock:true, primeCost:2, cost:5},
  {id:3, name:"Burgeris_4", inStock:false, primeCost:2, cost:5},
  {id:4, name:"Burgeris_5", inStock:true, primeCost:2, cost:5},
  {id:5, name:"Pzza", inStock:false, primeCost:3, cost:7},
  {id:6, name:"Pizza_2", inStock:true, primeCost:0.3, cost:7},
  {id:7, name:"Pizza_3", inStock:false, primeCost:0.3, cost:7},
  {id:8, name:"Drink", inStock:true, primeCost:0.3, cost:2},
  {id:9, name:"Drink_2", inStock:false, primeCost:0.3, cost:2}
];

// 2) Naudojant 1 užduoties masyvą:
//   2.1) Naudojant filter - išfiltruoti tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje.

let itemsInStock = meniu.filter(item => item.inStock === true)
console.log(itemsInStock)


//   2.2) Naudojant map ir 2.1 masyvą - sukurti naują masyvą, kuriame būtų suskaičiuotas ir išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje.

let profit = meniu.map(item => item.cost - item.primeCost);
console.log(profit)


//   2.3) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje. (galima sukurti kelis užsakymus)

let uzsakymai = [
  {name: "Burgeris", kiekis: 2},
  {name: "Pzza", kiekis: 3},
  {name: "Burgeris_5", kiekis: 2}
];


//   2.4) Naudojant reduce - suskaičiuoti kiek pelno suteiks 2.3 masyvo užsakymas ir tai atvaizduoti konsolėje. (arba užsakymai, jei 2.3 dalyje sukūrėte keletą užsakymų)

let pelnas = uzsakymai.reduce(function(sum, item) {
  // Gauname produkto objektą iš meniu masyvo, pagal jo pavadinimą
  let produktas = meniu.find(p => p.name === item.name);
  // Grąžiname pelną, kurį suteiks šis užsakymas
  return sum + (produktas.cost - produktas.primeCost) * item.kiekis;
}, 0); // Pradinis reikšmė sumai yra 0

console.log(pelnas);


//   2.5) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje.

/* map()              -      grąžina naują masyvą su pateiktos funkcijos iškvietimu kiekviename šio masyvo elemente.

// pavyzdys :

// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2); //šioje eilutėje 1*2;4*2..... sudaugina visus masyvo skaičius su 2

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]
// */
// let naujasMasyvas = mokinimuisiSkirtasMasyvas.map(element => element+5);
// console.log(naujasMasyvas);
// console.log(mokinimuisiSkirtasMasyvas);

// /*

let uzsakymoMasyvas = uzsakymai.map(item => ({
  itemas: item.name,
  kiekis: item.kiekis,
  kaina: meniu.find(p => p.name === item.name).cost * item.kiekis
}));

console.log(uzsakymoMasyvas)


// 3) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale. (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius, C - didžiausias galimas masyvo skaičius). (naudoti Math.random())

function sukurtiMasyva(a, b, c) {
  let masyvas = []; // Sukuriame tuščią masyvą
  for (let i = 0; i < a; i++) {
    // Generuojame skaičių nuo B iki C (įskaitant B ir C)
    let skaicius = Math.floor(Math.random() * (c - b + 1)) + b;
    // Įdedame skaičių į masyvą
    masyvas.push(skaicius);
  }
  return masyvas; // Grąžiname sugeneruotą masyvą
}
// Išbandome funkciją:
let masyvas = sukurtiMasyva(5, 10, 20); // Sukurs 5 skaičių masyvą, kurie bus nuo 10 iki 20 (įskaitant 10 ir 20)
console.log(masyvas);


// 4) Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį. (tarpai ir skiriamieji ženklai neturi būti įtraukti).

const atskirtiZodzius = eilute => eilute.split(/[\s,.]+/);

// Išbandome funkciją:
let masyvas1 = atskirtiZodzius("Mano vardas yra Ligita, o gimimo metai 1997");
console.log(masyvas1);


// 5) Naudojant 3'ios užduoties masyvą išfiltruoti lyginius skaičius.

let lyginiai = masyvas.filter(skaicius => skaicius % 2 === 0);
console.log(lyginiai);


// 6) Naudojant 3'ios užduoties masyvą išfiltruoti nelyginius skaičius.

let nelyginiai = masyvas.filter(skaicius => skaicius % 2 !== 0);
console.log(nelyginiai);


// 7) Naudojant 3'ios užduoties masyvą išfiltruoti sveikuosius skaičius.

let sveikieji = masyvas.filter(skaicius => Number.isInteger(skaicius));
console.log(sveikieji); // Filtruotas masyvas su sveikaisiais skaičiais


// 8) Sukurti funkciją, kuri 3'ios užduoties masyvą išfiltruotų A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).

function filtruotiIntervale(masyvas, a, b) {
  return masyvas.filter(skaicius => skaicius >= a && skaicius <= b );
}
 let filtruotasMasyvas = filtruotiIntervale(masyvas, 5, 15);
 console.log(filtruotasMasyvas)


// 9) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.

const filtruotiDidziasias = masyvas => masyvas.filter(zodis => zodis[0] === zodis[0].toUpperCase());
let masyvas2 = filtruotiDidziasias(masyvas1);
console.log(masyvas2)


// 10) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.

const filtruotiMAzasias = masyvas => masyvas.filter(zodis => zodis[0] === zodis[0].toLowerCase());
let masyvas3 = filtruotiMAzasias(masyvas1);
console.log(masyvas3)


// 11) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide prasidedančius žodžius.

const filtruotiNurodyta = (masyvas, raide) => masyvas.filter(zodis => zodis.startsWith(raide));
let masyvas4 = filtruotiNurodyta(masyvas1, "L");
console.log(masyvas4);


// 12) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide pasibaigiančius žodžius.

const filtruotiNurodyta2 = (masyvas, raide) => masyvas.filter(zodis => zodis.endsWith(raide));
let masyvas5 = filtruotiNurodyta2(masyvas1, "s");
console.log(masyvas5);


// 13) Naudojant reduce metodą suskaičiuoti 5'tos užduoties masyvo bendrą sumą.

let bendraSuma = [lyginiai];
let sum = 0;
for(let n of lyginiai)
sum += n;
// 
//arba

// const sum = bendraSuma.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// }, 0)

console.log(sum)

// 14) Naudojant reduce metodą suskaičiuoti 6'tos užduoties masyvo bendrą sandaugą.

let sandauga = [nelyginiai];
let daugyba = 1;
for(let n of nelyginiai)
daugyba *= n;

console.log(daugyba)

// FindIndex
//   Syntax:
//     findIndex((element, index, array) => { ... } )
//   Pvz:
//     const isLargeNumber = (element) => element > 13;
//   Ką daro:
//     Suranda ir grąžina indeksą to elemento esančio masyve, kuris pirmasis tenkina pateiktą salygą.
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

// Find
//   Syntax:
//     find((element, index, array) => { ... } )
//   Pvz:
//     const found = array1.find(element => element > 10);
//   Ką daro:
//     Suranda ir grąžina tą masyvo elementą, kuris pirmasis tenkina pateiktą salygą.
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//   Video:
//     https://youtu.be/sBVaoFg2ww4

// Some
//   Syntax:
//     some((element, index, array) => { ... } )
//   Pvz:
//     const even = (element) => element % 2 === 0;
//   Ką daro:
//     Tikrina ar bent vienas elementas masyve tenkina pateiktą salygą.
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//   Video:
//     https://youtu.be/RrvhtJYYKcw

// Every
//   Syntax:
//     every((element, index, array) => { ... } )
//   Pvz:
//     const isBelowThreshold = (currentValue) => currentValue < 40;
//   Ką daro:
//     Tikrina ar visi elementas masyve tenkina pateiktą salygą.
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
//   Video:
//     https://youtu.be/PJM3BaWu5Jw

// Includes
//   Syntax:
//     includes(searchElement, fromIndex)
//   Pvz:
//     pets.includes('cat');
//   Ką daro:
//     Patikrina ar masyve yra bent vienas nurodytas elementas ir grąžina true arba false.
//   Link:
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// 1) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra didenis už A (A - funkcijos parametras skaičius).

let rastiIndeksa = (element,a) => element.findIndex(x => x > a)
index = rastiIndeksa([3, 4, 6, 8, 9], 7) //atsakymas 3, nes tai yra 3 skaicius is masyvo eiles, kuris yra didesnis uz 7 (3 yra 0-tas; 4-pirmas...)

console.log(index)


// 2) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A (A - funkcijos parametras skaičius).

let rastiIndeksa2 = (element,a) => element.findIndex(x => x < a)
index = rastiIndeksa2([3, 4, 6, 8, 9], 7) //pirmas mazesnis yra 0-tas

console.log(index)



// 3) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda mažąja raide.


const rasti = masyvas1 => masyvas1.findIndex(zodis => zodis[0] === zodis[0].toLowerCase());
let rasta = rasti(['Labas', 'Kaip', 'tau', 'sekasi']);
console.log(rasta)



// 4) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja raide.

const rasti2 = masyvas2 => masyvas2.findIndex(zodis => zodis[0] === zodis[0].toUpperCase());
let rasta2 = rasti2(['Labas', 'Kaip', 'tau', 'sekasi']);
console.log(rasta2)


// 5+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

const ieskotiIndekso = (element, a, b) => 
element.findIndex(x => x > a && x < b);
const rastas = ieskotiIndekso([1, 3, 6, 8, 9], 2, 5);
console.log(rastas)  // Output: 1



// 6++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
// 7) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra didenis už A (A - funkcijos parametras skaičius).

const rastiElementa = (element, a) => 
element.find(x => x > a );
const elementas = rastiElementa([1, 3, 6, 8, 9], 7);
console.log(elementas)  


// 8) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A (A - funkcijos parametras skaičius).

const rastiElementa2 = (element, a) => 
element.find(x => x < a );
const elementas2 = rastiElementa2([1, 3, 6, 8, 9], 9);
console.log(elementas2)  



// 9) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda mažąja raide.

const rastiElementa3 = (element) => 
element.find(x => x[0] === x[0].toLowerCase());
const elementas3 = rastiElementa3(['Labas', 'Kaip', 'tau', 'sekasi']);
console.log(elementas3) 


// 10) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja raide.

const rastiElementa4 = (element) => 
element.find(x => x[0] === x[0].toUpperCase());
const elementas4 = rastiElementa4(['Labas', 'Kaip', 'tau', 'sekasi']);
console.log(elementas4) 

// 11+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

const rastiElementa5 = (element, a, b) => 
element.find(x => x > a && x < b);
const elementas5 = rastiElementa([1, 3, 6, 8, 9], 7, 9);
console.log(elementas5)  


// 12++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).

const rastiElementa6 = (element, A, B, raide1) => element.find(x => (x[0] === x[0].toUpperCase() || x[0] === x[0].toLowerCase()) && x.length > A && x.length < B);
const elementas6 = rastiElementa6(['Labas', 'kaip', 'tau', 'sekasi'], 2, 4, true);
console.log(elementas6)

// 13) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra didenis už A (A - funkcijos parametras skaičius).

const rastiElementa7 = (element, a) => 
element.some(x => x > a );
const elementas7 = rastiElementa7([1, 3, 6, 8, 9], 5);
console.log(elementas7)  


// 14) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A (A - funkcijos parametras skaičius).

const rastiElementa8 = (element, a) => 
element.some(x => x < a );
const elementas8 = rastiElementa8([1, 3, 6, 8, 9], 5);
console.log(elementas8)  

// 15) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda mažąja raide.

const rasti9 = masyvas1 => masyvas1.some(zodis => zodis[0] === zodis[0].toLowerCase());
let randa = rasti9(['Labas', 'Kaip', 'tau', 'sekasi', 'meskiukas']);
console.log(randa)

// 16) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja raide.

const rasti10 = masyvas1 => masyvas1.some(zodis => zodis[0] === zodis[0].toUpperCase());
let randa1 = rasti10(['Labas', 'Kaip', 'tau', 'sekasi', 'meskiukas']);
console.log(randa1)


// 17+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

const yraTarpAirB = (element, A, B) => element.some(x => x > A && x < B);

console.log(yraTarpAirB([1, 3, 6, 9], 6, 9));  
console.log(yraTarpAirB([1, 3, 6, 8, 9], 1, 6));  

// 18++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).


// grąžins logine reikšmę true, jeigu masyve ['Labas', 'Kaip', 'Tau', 'Sekasi'] yra bent vienas elementas, kuris prasideda didžiąja arba mažąja raide ir yra ilgesnis už 2, bet trumpesnis už 4 simbolius. Jeigu masyve nėra tokių elementų, funkcija grąžins logine reikšmę false.
const rastiElementa9 = (element, A, B, raide1) => element.some(x => (x[0] === x[0].toUpperCase() || x[0] === x[0].toLowerCase()) && x.length > A && x.length < B);
const elementas9 = rastiElementa9(['Labas', 'Kaip', 'Tau', 'Sekasi'], 1, 3, true);
console.log(elementas9)


// 19) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra didenis už A (A - funkcijos parametras skaičius).

let rasti11 = (element, a) => element.every(x => x > a);
const elementas11 = rasti11([1, 3, 6, 8, 9], 1);
console.log(elementas11) // nei vienas nera daugiau nei a

// 20) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A (A - funkcijos parametras skaičius).

let rasti12 = (element, a) => element.every(x => x < a);
const elementas12 = rasti12([1, 3, 6, 8, 9], 6);
console.log(elementas12)

// 21) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda mažąja raide.

const mazoji = masyvas1 => masyvas1.every(zodis => zodis[0] === zodis[0].toLowerCase());
let maza = mazoji(['Labas', 'Kaip', 'tau', 'sekasi', 'meskiukas']);
console.log(maza)


// 22) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja raide.

const didzioji = masyvas1 => masyvas1.every(zodis => zodis[0] === zodis[0].toUpperCase());
let didele = didzioji(['Labas', 'Kaip', 'tau', 'sekasi', 'meskiukas']);
console.log(didele)


// 23+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

const mazesnisDidesnis= (element, a, b) => 
element.every(x => x > a && x < b);
const elementasM = mazesnisDidesnis([1, 3, 6, 8, 9], 8, 9);
console.log(elementasM)  


// 24++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius). 

const visiAtitinka = (elementas, A, B, raide) => elementas.every(x => (x[0] === x[0].toUpperCase() || x[0] === x[0].toLowerCase()) && x.length > A && x.length < B);

const elementaskazkoks = visiAtitinka(['Labas', 'kaip', 'tau', 'sekasi'], 3, 5, true);
console.log(elementaskazkoks)


// 25) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė.

let nurodytaReiksme = ['Labas', 'kaip', 'tau', 'sekasi'];
console.log(nurodytaReiksme.includes('tau'))


// 26) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė, nuo pasirinkto indekso.

const rastiReiksme = (masyvas, reiksme, indeksas) => {
  return masyvas.slice(indeksas).find(el => el === reiksme) !== undefined;
}
console.log(rastiReiksme([1, 2, 3, 4, 5], 4, 2))
