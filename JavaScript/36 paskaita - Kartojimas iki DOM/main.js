//                  JS pagrindai

/*
1. Kintamieji :

  string       - žodinis kintamasis/reikšmė : rašomas kabutėse: '' / "" / ``
  number       - skaitinis kintamasis/skaičius
boolean/bool - loginis kintamasis (true/false)

  null         - tuščias/ kai turi kintamąjį, bet iš jo ta reikšmė yra paimta

  undefiened   - neapibrėžtas/ kintamasis, kuriam nebuvo suteikta reikšmė

  NaN          - Not a Number trumpinys(atlikti negalimi veiksmai)


  array        - masyvas

  [reiksme, reiksme, reiksme, .... ]

  object       - objektas

  {raktas: reikšmė, raktas1: reikšmė, .......};

  Tiek objektas, tiek masyvas yra konteineriniai kintamieji. Tai reiškia, kad jų viduje galima talpinti keletą
  reikšmių (gali būti skirtingų kintamųjų tipų: string, number, bool, null...).

2. Operatoriai :

  Matematiniai (+ trumpiniai); + ; - ; * ; /
  Palyginimo; = == === > >= < <=
  Loginiai IR ARBA NE

3. Sąlygos :

  if;
  elseIf;
  else;
  switch;
  ternary (sąlyga?tiesa:melas) (sąlyga&&tiesa)

4. Ciklai :

  for (for in; for of);
  while (do while);
  iteraciniai masyvų metodai (for each; map; reduce; filter);

5. Funkcijos :

  paprastas funkcijos deklaravimas (senasis būdas);
  anoniminės;
  arrow/lambda

6. Metodai :

  number/math;
  string;
  array;
  object;
  destruktūrizavimas

*/

  console.groupCollapsed('JS array,string methods practice')

// 1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.

let grazinaStringa = (stringMasyvas1) => stringMasyvas1.toString();

// 2) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 0645234, grąžina 0-6-45234)

function printEvenDigits(number) {
  const elements = number.toString().split("");
  const result = elements.map((element, i) => {
    return parseInt(element) % 2 === 0 && i < elements.length - 1 ? element + "-" : element;
  }).join("");
  console.log(result);
}


// 3) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)

function reverseString(str) {
  // empty string
  let result = "";
  
  // Iterate atvirksciai
  for (let i = str.length - 1; i >= 0; i--) {
    // Add each character 
    result += str[i];
  }
  
  // result string
  return result;
}


// 4) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes ir grąžintų likusias (išvestų į konsolę). (paduodama masyvas=[1,4,5,6,4,8,4,5], funkcija: func(masyvas, 4,6,8), grąžina: [1,5,5]).

function removeValues(arr, ...values) {
  // filter to remove the values 
  const result = arr.filter(x => !values.includes(x));
  
  // result array
  console.log(result);
}


// 5) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.

function printMinMax(arr) {
  // Math.min and Math.max
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  
  // Print 
  console.log(`Minimum value: ${min}`);
  console.log(`Maximum value: ${max}`);
}


// 6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.

function vienodi(arr1, arr2) {
  // Use filter and includes to find the common values
  const result = arr1.filter(x => arr2.includes(x));
  
  // Print
  console.log(result);
}

// 7) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])

function createArray(arr1, arr2) {
  // Use map to create the new array
  const result = arr2.map(i => arr1[i]);
  
  // Return 
  return result;
}

// 8) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į konsolę išspausdintų tik unikalius duomenis. ???

function printUniqueValues(arr) {
  // Use a Set and the spread operator to find and print the unique values
  console.log([...new Set(arr)]);
}

// 9) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose.

function printCommonValues(...arrays) {
  // find the common values
  const result = arrays.reduce((acc, arr) => {
    return acc.filter(x => arr.includes(x));
  });
  
  // Print 
  console.log(result);
}


// 10) Parašykte funkciją, kuri iš jai paduoto skaičių masyvo atrinktų n'tąjį didžiausią skaičių. (iš funkcija([12,54,1,65,78,91,45],3) grąžintų 65).

function findNthLargest(arr, n) {
  // Use sort and reverse to find the nth largest number
  const filtruoti = arr.sort((a, b) => b - a);
  return filtruoti[n - 1];
}

console.groupEnd();

console.groupCollapsed('JS ciklai ir funkcijos')
// 1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.

let masyvas = [1, 2, 3, 4, 5];

for (let i = 0; i < masyvas.length; i++) {
  console.log(masyvas[i]);
}


// 2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 2; i < arr.length; i += 3) {
  console.log(arr[i]);
}

// 3) Parašyti funkciją, kuri išspausdintų kas kažkelintą elementą iš jai pateikto masyvo.

function printEveryNthElement(arr, n) {
  for (let i = n - 1; i < arr.length; i += n) {
    console.log(arr[i]);
  }
}

// 4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.

const arr1 = [12, 54, 1, 65, 78, 91, 45];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > 54) {
    console.log(arr1[i]);
  }
}

// 5) Parašyti funkciją, kuri iš pateikto masyvo išspausdintų tik elementus, kurie prasideda nurodyta raide.

function printElementsStartingWith(arr, letter) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === letter) {
      console.log(arr[i]);
    }
  }
}

// 6) Parašyti ciklą, kuris surikiuotų masyvą didėjimo tvarka. (tik su string ir tik su numbers (2ciklus)).

let masyvasNumbers = [3,46,7,997,864,335,112,445,899,21,111,34,45];
function sortNumbers(masyvasNumbers){
  return masyvasNumbers.sort(function(a,b){return a-b})
}
console.log(sortNumbers(masyvasNumbers));


let masyvasStrings1 = ['aš', 'labas', 'aŠ', 'masyvas', 'ūsas', 'ąsa', 'ąžuolas'];
function sortStrings(masyvasStrings1){
  return masyvasStrings1.sort(function(a,b){return a.localeCompare(b)})
}
console.log(sortStrings(masyvasStrings1));


// 7) Parašyti funkciją, kuri iš masyvo atrinktų tik lyginius skaičius, juos surikiuotų mažėjimo tvarka ir išspausdintų konsolėje.

function printSortedEvenNumbers(numbers) {
  // Atrinkti tik lyginius skaičius
  const evenNumbers = numbers.filter(number => number % 2 === 0);

  // Surikiuoti skaičius mažėjimo tvarka
  const sortedEvenNumbers = evenNumbers.sort((a, b) => b - a);

  // Išspausdinti skaičius konsolėje
  console.log(sortedEvenNumbers);
}

console.groupEnd();

console.groupCollapsed('JS array,string,number')

// 1) Pasirašyti / susikurti string kintamąjį.

let hello = 'Kaip tau sekasi';


// 2) Pasirašyti / susikurti number kintmąjį.

let skaicius = 20;

// 3) Pasirašyti / susikurti masyvą tik su string kintamaisiais.

let stringMasyvas = ['labas','kaledos', 'praejo','papaprapapa'];

// 4) Pasirašyti / susikurti masyvą tik su number kintamaisiais.

let skaiciuMasyvas = [1,2,3,4,6];

// 5) Pasirašyti / susikurti masyvą ir su string ir su number kintamaisiais.

let misrusMasyvas = ['labas', 'hello', 'man', 25, 'metai', 28, 36];

// 6) Išvesti pirmąją 1'os užduoties kintamojo raidę.

console.log(hello[0])

// 7) Išvesti paskutinę 1'os užduoties kintamojo raidę.

console.log(hello[hello.length - 1])

// 8) Išvesti viduriniąją 1'os užduoties kintamojo raidę.

const vidurineRaide = Math.floor(hello.length / 2);
console.log(hello[vidurineRaide]);

// 9) Pasirašyti funkciją, kuri iš jai pateikto string kintamojo išvestų jai nurodytą raidę (kelintąją). Pvz.:(uzd9("labas", 3) => "b").

function getLetter(string, index) {
  return string[index - 1];
}
console.log(getLetter('Labas', 3))

// 10) Patikrinti ar 2'os užduoties kintamasis yra lyginis skaičius.

if (skaicius % 2 === 0) {
  console.log('Lyginis');
} else {
  console.log('Nelyginis');
}

// 11) Patikrinti ar 2'os užduoties kintamasis yra nelyginis skaičius.

if (skaicius % 2 !== 0) {
  console.log('Nelyginis');
} else {
  console.log('Lyginis');
}

// 12) Patikrinti ar 2'os užduoties kintamasis yra sveikasis skaičius.

if (Number.isInteger(skaicius) && skaicius > 0) {
  console.log('Sveikasis skaičius');
} else {
  console.log('Ne sveikasis');
}

// 13) Parašyti funkciją, kuri pateiktų informaciją ar jai paduotas number kintamasis yra: lyginis/nelyginis skaičius. Pvz.: (uzd13(5) => nelyginis);

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('Lyginis');
  } else {
    console.log('Nelyginis');
  }
}

// 14) Iš 3'čios užduoties masyvo išvesti tik ilgesnius nei 5 simbolių žodžius.

for (let i = 0; i < stringMasyvas.length; i++) {
  if (stringMasyvas[i].length > 5) {
    console.log(stringMasyvas[i]);
  }
}

// 15) Iš 3'čios užduoties masyvo išvesti tik trumpesnius nei 8 simbolių žodžius.

for (let i = 0; i < stringMasyvas.length; i++) {
  if (stringMasyvas[i].length < 8) {
    console.log(stringMasyvas[i]);
  }
}

// 16+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio pirmąsias raides.

for (let i = 0; i < stringMasyvas.length; i++) {
    console.log(stringMasyvas[i][0]);
  }

// 17+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio paskutiniąsias raides.

for (let i = 0; i < stringMasyvas.length; i++) {
    console.log(stringMasyvas[i][stringMasyvas[i].length - 1]);
  }

// 18++) Parašyti funkciją, kuri iš jai pateikto masyvo išvestų tik tuos žodžius, kurie yra ilgesni negu A, bet trumpesni negu B. Pvz.:(funkcija uzd18(masyvas, a, b) => uzd18(["Labas", "ate", "Katašunis"], 4, 8) => "Labas")

function filterWords(array, a, b) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > a && array[i].length < b) {
      console.log(array[i]);
    }
  }
}

// 19) Sudėti visus 4'tos užduoties masyvo kintamuosius ir sumą išvesti į konsolę.

//iteruoja per masyvo elementus
let sum = 0;

for (const value of skaiciuMasyvas) {
  sum += value;
}
console.log(sum);

// 20) Sudėti kas antrą 4'tos užduoties masyvo kintamąjį ir sumą išvesti į konsolę.

let sum1 = 0;

for (let i = 1; i < skaiciuMasyvas.length; i += 2) {
  sum1 += skaiciuMasyvas[i];
}
console.log(sum1);

// 21+) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį ir išvestų sumą į konsolę.

let sum2 = 0;
let intervalas = 3; // Kas trečią elementą sudėsime

for (let i = intervalas - 1; i < skaiciuMasyvas.length; i += intervalas) {
  sum2 += skaiciuMasyvas[i];
}
console.log(sum2);

// 22++) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį tik tada, jeigu tas kintamasis yra lyginis arba nelyginis (nurodyti funkcijai) ir išvestų sumą į konsolę. Pvz.:(funk([1,2,3,4,5,6,7,8], 3, false) => 3)


// 23) Iš 5'tos užduoties masyvo atrinkite skaičius į vieną masyvą, o string'us į kitą.

let numbersArray = [];
let stringsArray = [];

for (let i = 0; i < misrusMasyvas.length; i++) {
  if (typeof misrusMasyvas[i] === 'number') {
    numbersArray.push(misrusMasyvas[i]);
  } else {
    stringsArray.push(misrusMasyvas[i]);
  }
}

console.log(numbersArray); // [25, 28, 36]
console.log(stringsArray); // ['labas', 'hello', 'man', 'metai']

console.groupEnd();



console.groupCollapsed('JS kartojimas ir HigherOrderFunctions')
// 1.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A.

// be lambda ir metodu
function filterNumbers1(array, a) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > a) {
      result[result.length] = array[i];
    }
  }
  return result;
}

//su 
const filterNumbers2 = (array, a) => array.filter(number => number > a);

// 1.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B.

// be lambda ir metodu
function filterNumbers3(array, a, b) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > a && array[i] < b) {
      result[result.length] = array[i];
    }
  }
  return result;
}

//su
const filterNumbers4 = (array, a, b) => array.filter(number => number > a && number < b);

// 1.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B ir yra lyginiai arba nelyginiai (true/false).


// be lambda ir metodu
function filterNumbers5(array, a, b) {
  let result = {
    even: [],
    odd: []
  };
  for (let i = 0; i < array.length; i++) {
    if (array[i] > a && array[i] < b) {
      if (array[i] % 2 === 0) {
        result.even.push(array[i]);
      } else {
        result.odd.push(array[i]);
      }
    }
  }
  return result;
}

// su
const filterNumbers6 = (array, a, b) => {
  const lyginiai = array.filter(number => number > a && number < b && number % 2 === 0);
  const nelyginiai = array.filter(number => number > a && number < b && number % 2 !== 0);
  return {
    even: lyginiai,
    odd: nelyginiai
  };
};

// 1.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 1.1, 1.2 ir 1.3 užduotis. +

// 2.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A.

//be
function filterStrings1(array, a) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > a) {
      result[result.length] = array[i];
    }
  }
  return result;
}

// 2.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B.
// 2.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B ir prasideda didžiąja arba mažąja raidėmis (true/false).
// 2.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 2.1, 2.2 ir 2.3 užduotis.

// 3) Parašykite funkciją, kuri iš mišraus masyvo atrinktų tik number arba tik string kintamuosiuos (true/false).
// 3.1.1) Jeigu atrinkinėja skaičius, tai juos surikiuoti didėjimo arba mažėjimo tvarka (true/false) ir grąžintų sutvarkytą masyvą.
// 3.1.2) Prie 3.1.1 pridėti ir dydžio tikrinimą (ne mažesni negu A ir ne didesni negu B skaičiai (A<skaičius<B)).
// 3.2.1) Jeigu atrinkinėja žodžius, tai juos surikiuoti pagal abėcėlę A->Z arba Z->A (true/false) ir grąžintų sutvarkytą masyvą.
// 3.2.2) Prie 3.2.1 pridėti ir ilgio tikrinimą (ne trumpesni negu A ir ne ilgesni negu B žodžiai (A<=žodis.length<=B)).
// 3 užduoties galutinės versijos funkcijos ir jos kvietimo pvz.: 
// 	funkcija vardas(masyvas, numberArString, didejimoArMazejimo, minimum, maximum);
// 	let rikiuotas = vardas(masyvas3, true, false, 3, 6) -> kintamajam "rikiuotas" grąžina masyvą, kuris susideda iš masyvas3 buvusių elementų, kurie yra: true - number, false - mažėjimo tvarka, 3 - didesni negu 3, 6 - mažesni negu 6.


// extra1) Nenaudodami lambda sukurkite funkciją, kuri su callback galėtų grąžinti papildomą informaciją (kokią informaciją nesvarbu. Gali būti string + string iš callback jei jis yra).
// extra2) Nenaudodami lambda sukurkite funkciją kuriai padavus skaičių (1 parametras pirmai funkcijai), jinai grąžintų funkciją, kuri padaugintų pirmąjį skaičių, jai paduotuoju skaičiumi (1 parametras antrajai funkcijai).
// extra3) extra1 ir extra2 užduotis atlikite naudodami lambda.
// extra4) Sukurkite funkciją, kuri sort'ina jai paduotą masyvo informaciją pagal jūsų sumąstytą logiką. (sort metodo viduje kviesti kitą funkciją, kurioje aprašyta rikiavimo logika (grąžina -1 || 1 || 0). (Rikiavimo logika gali būti kokia tik sugalvosite. pvz: pradžioj lyginiai, po to nelyginiai; pradžioj sveikieji po to skaičiai su kalbeliais, pradžioj žodžiai prasidedantys didžiosiomis, po to mažosiomis raidėmis ir t.t.)

// EXTRA (viską baigus):
// 	Codewars
//  Edabit

console.groupEnd();