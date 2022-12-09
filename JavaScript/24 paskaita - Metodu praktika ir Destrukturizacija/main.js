//        užduotys be ir  su iteraciniais metodais

let zodziuMasyvas = ['labas', 'mano', 'as', 'kibinas', 'kaliause', 'frakas', 'knyga', 'arbata', 'labailabailabaiilgaszodis', 'siektiektrumpesniszodis'];
let skaiciuMasyvas = [1,2,3,4,5,-19,0,123,452,6,-1];
let misrusMasyvas = ['kremas', true, 'vazelinas', 'termometras',1,65, 'lempa', 'kaledos', false,12];

// task1
// funkcija - į konsolę išspausdinti pateikto masyvo duomenis atskirose eilutėse
console.groupCollapsed('task1')
// be iteracinio metodo
let uzd_be = (masyvas) => {
  for( let i=0; i<masyvas.length; i++){
    console.log(masyvas[i])
  }
}
//su iteraciniu metodu

let uzd_su = (masyvas) => {
  masyvas.forEach(element => console.log(element)); // maziau kodo, greiciau
}
console.log(uzd_su(misrusMasyvas));
console.groupEnd();


//task2

// funkcija - gražintų(return) masyvą , kuriame tik skaičiai didesni už 10 iš jai pateikto skaičių masyvo.
// reikia susikurti tuščią masyvą talpinti duomenis


console.groupCollapsed('task2')
let uzd2_be = (masyvas) =>{
  let grazinamasMasyvas = [];
  for(i=0; i<masyvas.length; i++){
    if(masyvas[i]>10){
      grazinamasMasyvas.push(masyvas[i])
    } 
  }return grazinamasMasyvas
}

let uzd2_su = (masyvas)=> masyvas.filter(element=>element > 10)   // sutrumpinta

console.log(uzd2_su(skaiciuMasyvas))
console.groupEnd();

// task 3

// funkcija - kuri patikrintų ar jai duotame string masyve bent vienas elementas yra ilgesnis nei 5 raidžių žodis ir gražintų true/false.
console.groupCollapsed('task3')
let uzd3_be = (masyvas) =>{
  for (let i=0; i<masyvas.length; i++){
    if(masyvas[i].length > 5){
      return true;
    }
  }
}
console.log(uzd3_be(zodziuMasyvas));

let uzd3_su = (masyvas) =>{
  return masyvas.some(element=>element.length > 5)
}
console.log(uzd3_su(zodziuMasyvas))
console.groupEnd();


// task 4
// funkcija - kuri jai paduotame mišriame masyve rastų ir gražintų pirmąjį kintamąjį, kuris yra skaičius.

console.groupCollapsed('task4')

let uzd4_be = (masyvas) =>{
  for(i=0; i<masyvas.length; i++){
    if(typeof(masyvas[i]) === 'number'){
      return masyvas[i];
    }
  }
}
console.log(uzd4_be(misrusMasyvas))

let uzd4_su = (masyvas)=>masyvas.find(element=> typeof(element) === 'number');

console.log(uzd4_su(misrusMasyvas))

console.groupEnd();


// savarankiskos uzduotys

// Iteracinių masyvų metodų užduotys:
// 1) Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).

console.groupCollapsed('Savarankiškos užduotys. TASK 1')
const cars = ["BMW", "VW", "Audi"];

let task1 = (cars) => cars.forEach(element => console.log(element));
console.log(task1(cars))

console.groupEnd();


// 2) Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

console.groupCollapsed('Savarankiškos užduotys. TASK 2');

cars.forEach((value, index) => console.log(index + ": " + value));


console.groupEnd();


//  3) Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").
console.groupCollapsed('Savarankiškos užduotys. TASK 3');

const vardai = ["Dovilė", "irMa", "Agnė"];const naujiVardai = vardai.map((m) => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase());
console.log(naujiVardai)

console.groupEnd();

//4) Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.
console.groupCollapsed('Savarankiškos užduotys. TASK 4');

const metai = [25, 26, 29, 30, 45, 3, 5];
console.log(metai.filter((a)=> a >= 18));

console.groupEnd();


//5) Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
console.groupCollapsed('Savarankiškos užduotys. TASK 5');

const miestai = ["kAunas", "Klaipeda", "Šilutė", "Kėdainiai", "Šiauliai"];
console.log(miestai.find(a => a.charAt(0) === "K"));

console.groupEnd();


//6) Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

console.groupCollapsed('Savarankiškos užduotys. TASK 6');

console.log(miestai.some(a => a.charAt(0) === a.charAt(0).toLowerCase()));

console.groupEnd();


//7) Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda iš mažosios, bet ar visi iš didžiosios.
console.groupCollapsed('Savarankiškos užduotys. TASK 7');

console.log(miestai.every(a => a.charAt(0) === a.charAt(0).toUpperCase()));

console.groupEnd();

console.groupCollapsed('Burgeris')

//papildomos uzduotys 


// ForEach, Filter, Reduce ir Map:
  // 1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]

  let meniu = [
    {id:0, name:"Burgeris", inStock:true, primeCost:2, cost:5},
    {id:1, name:"Burgeris_2", inStock:true, primeCost:2, cost:5},
    {id:2, name:"Burgeris_3", inStock:true, primeCost:2, cost:5},
    {id:3, name:"Burgeris_4", inStock:true, primeCost:2, cost:5},
    {id:4, name:"Burgeris_5", inStock:true, primeCost:2, cost:5},
    {id:5, name:"Pzza", inStock:true, primeCost:3, cost:7},
    {id:6, name:"Pizza_2", inStock:true, primeCost:0.3, cost:7},
    {id:7, name:"Pizza_3", inStock:true, primeCost:0.3, cost:7},
    {id:8, name:"Drink", inStock:true, primeCost:0.3, cost:2},
    {id:9, name:"Drink_2", inStock:true, primeCost:0.3, cost:2}
];

  // 2) Naudojant forEach - išvesti masyvą į konsolę.

  let extra2 = (meniu) => meniu.forEach(element => console.log(element));
  console.log(extra2(meniu))

  // 3) Naudojant forEach - išvesti tik masyvo vardus ir kainas į konsolę.
  let extra3 = (meniu) => meniu.forEach(element=>console.log(element.name + ": " + element.cost));
  console.log(extra3(meniu));

  // 4) Išfiltruoti (for{if{}}) tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).


  //   4.1) Naudojant map ir 4'tos užduoties masyvą - sukurti naują masyvą, kuriame būtų name ir suskaičiuotas bei išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).
  //   4.2) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (galima sukurti kelis užsakymus)
  //   4.3) Suskaičiuoti kiek pelno suteiks 4.2 masyvo užsakymas ir tai atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (arba užsakymai, jei 4.2 dalyje sukūrėte keletą užsakymų)
  //   4.4) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).



console.groupEnd();




// Destruktūrizavimas
/*
Tai elemento ar elementų skirstymas į dalis.

array destr.. syntax
let [a,b] = masyvas;  (priskyrimas paeiliui)
let [a, , b] = masyvas; (elemento praleidimas)
let [a, , b, ...c] = masyvas; (likusių elementų priskyrimas);
let [a= 'default value', , b, ...c] = masyvas; (likusių elementų priskyrimas); galima priskirti nustatytas reiksmes, kurios bus priskirtos tokiu atveju, kai destrukturizuoijamame elemente ta reiksme bus undefined

object destr.. syntax
let {a, b} = objektas;
let a, b : kitasB}= objektas; (priskyrimas pagal pervadinta raktini zodi)
let {a, b : kitasB, ...like} = objektas; (priskyrimas likusiu elementu kurie nebuvo parinkti)
let {a, b : kitasB, c='c default' ...like} = objektas; (nearstu raktiniu zodziu default nustatymas)
*/
// be
let masyvas = ['labas', 34, 'hello', 'zodis', true, 87]
let a = masyvas[0];
let b = masyvas[1];
console.log(a,b);

// su 
// let [z, , x, ...visiLike] = masyvas; // jei nori praleisti kazkoki elementa tai tiesiog tarpas ir kablelis

let [z= 'default value', , x, ...visiLike] = masyvas; 
// visiLike ... taskeliai priskiria visas likusias reiksmes
console.log(z,x, visiLike);

// function
let destr = (arg1, arg2, ...args) =>{
  console.log(arg1, arg2, args);
}
destr(1,2,3,4,5,6,7);


// obj be destr

let objektas = {
  vardas: 'ligita',
  amzius: 25,
  vieta: {
    salis: 'lietuva',
    miestas: 'silute'
  },
  gyvena : 'name'
}
// let vardas = objektas.vardas;
// let amzius = objektas.amzius;
// console.log(vardas,amzius);


//su destr
// let {vardas, amzius}= objektas;

// let {vardas, amzius, ...kitkas}= objektas;
let {amzius, vardas: pilnasVardas, pavarde='pavardenis', ...kitkas}= objektas;
console.log(pilnasVardas, amzius, pavarde, kitkas);

console.groupCollapsed('Destruktūrizavimo užduotys');
// Destruktūrizavimas:
  // 1) Naudodami destructuring priskirkite 2 kintamiesiems 2 reikšmes.

let destrMasyvas = ['puodelis', 23, 'kremas', 'veidrodis', true, 56, 'nu', 'daug', 'lempa', 75];

let [pirmas, antras] = destrMasyvas;
console.log(pirmas, antras)


  // 2) Naudodami destructuring priskirkite 10 kintamųjų 10 reikšmių.

let [vie, du, trys, ket, penk, sesi, sept, ast, dev, des] = destrMasyvas;
console.log(vie, du, trys, ket, penk, sesi, sept, ast, dev, des);

  // 3) Naudodami destructuring priskirkite 3 kintamiesiems 5 reikšmes.
let destrMasyvas2 = [true, 56, 'nu', 'daug', 'lempa'];
let [vien,du2,trys1] = [1,2,3,4,5]

console.log(vien, du1, trys1);

  // 4) Naudodami destructuring priskirkite 1 kintamajam visas reikšmes išskyrus pirmas 3.

  let[ , , , ...labas] = destrMasyvas2;
  console.log(labas);
  // 5) Naudodami destructuring priskirkite 3 kintamiesiems 3 reikšmes paimtas iš objekto.

  let object = {
    vardas1: 'jadze',
    amzius1: 53,
    vieta1: 'kaimas'
  }

  let {vardas1, amzius1, vieta1} = object;
  console.log(vardas1, amzius1, vieta1);

  // 6) Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.

 let first = "First";
  let second = "Second";
  [first, second] = [second, first];
  
  console.log("first:", first);
  console.log("second:", second);

// dvieju kintamuju reiksmiu sukeitimas

let a1 = 5;
let b1 = 10;
let saugykla = a1;
a1=b1;
b1=saugykla;
console.log(a1,b1);

let a2 = 5;
let b2 = 10;
[a2,b2]= [b2,a2];
comsole.log(a2,b2)


console.groupEnd();

let a3 = 5;
let b3 = 10;
a3 = a3+b3; // 15
b3= a3-b3; // 5
a3=a3-b3; // 10
console.log(a3,b3)