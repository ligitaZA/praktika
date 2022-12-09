// // Masyvu metodai
// //     * - svarbiausi
// /*
// Iteraciniai masyvu metodai -

// sintakse visu, apart reduce, reduceRight, sort

//  //forEach((element) => { /* … */ //})
// // forEach((element, index) => { /* … */ })
// // forEach((element, index, array) => { /* … */ })
// /*

// 1.*       forEach()        -     vieną kartą vykdo pateiktą funkciją kiekvienam masyvo elementui.

// pavyzdys :

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// // expected output: "a"
// // expected output: "b"
// // expected output: "c"

// array1.forEach((element, iteracija)=> console.log('Masyvo ' + iteracija, element)); 
// */
// console.groupCollapsed("forEach");
// mokinimuisiSkirtasMasyvas.forEach(elementas => console.log("Masyvo elementas: ", elementas));
// console.log('');
// mokinimuisiSkirtasMasyvas.forEach((elementas, iteracija) => console.log("Masyvo "+ iteracija +" elementas: ", elementas));
// console.log('');
// mokinimuisiSkirtasMasyvas.forEach((elementas, iteracija, masyvas) => console.log("Masyvo "+ iteracija +" elementas: ", elementas, ';  Sekantis elementas yra: ', masyvas[iteracija+1]));
// console.groupEnd();

// /*2.*       map()              -      grąžina naują masyvą su pateiktos funkcijos iškvietimu kiekviename šio masyvo elemente.

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
// 3.*        filter()              -  ifiltruotuoja is masyvo elementus pagal pateikta salyga. 

// pavyzdys :
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"
// */
// let naujasFiltruotasMasyvas = mokinimuisiSkirtasMasyvas.filter(element => typeof(element) === "string");
// console.log(naujasFiltruotasMasyvas);
// console.log(mokinimuisiSkirtasMasyvas);

// /*
// 4.*        reduce()              -  Mažinimo() metodas grąžina vieną reikšmę: sukauptą funkcijos rezultatą. reiksme buna modifikuotas masyvas

// pavyzdys :
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10
// */
// let reduceintasMasyvas = mokinimuisiSkirtasMasyvas.reduce((bendras, elementas) => {
//   console.log(bendras);
//   return bendras + ' ' + elementas;
// }, 'pradžia');
// console.log(reduceintasMasyvas);
// console.log(mokinimuisiSkirtasMasyvas);
/*
5.        reduceRight()         - mazina masyva is desines i kaire iki vienos reiksmes.

pavyzdys :
const array1 = [[0, 1], [2, 3], [4, 5]];

const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(result);
// expected output: Array [4, 5, 2, 3, 0, 1]


6.        some()                - grąžina true, jei bent vienas masyvo elementas išlaiko pateiktos funkcijos atliktą testą.

pavyzdys : 
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

7.        every()               -  grąžina tiesa, jei visi masyvo elementai išlaiko pateiktos funkcijos atliktą testą.  

pavyzdys : 
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

8.        find()                -  Metodas find() grąžina pirmąjį pateikto masyvo elementą, kuris atitinka pateiktą testavimo funkciją. Jei jokios reikšmės netenkina testavimo funkcijos, grąžinamas neapibrėžtas.

pavyzdys : 
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// expected output: 12


9.        findIndex()           -   Metodas findIndex() grąžina pirmojo masyvo elemento indeksą, atitinkantį pateiktą testavimo funkciją. Jei nė vienas elementas netenkina testavimo funkcijos, grąžinamas -1.

pavyzdys : 
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

10.       findLast()           -    Metodas findLast() kartoja masyvą atvirkštine tvarka ir grąžina pirmojo elemento, kuris tenkina pateiktą testavimo funkciją, reikšmę. Jei jokie elementai netenkina testavimo funkcijos, grąžinamas neapibrėžtas.

pavyzdys : 
const array1 = [5, 12, 50, 130, 44];
const found = array1.findLast((element) => element > 45);
console.log(found);
// expected output: 130

11.       findLastIndex()       -  Metodas findLastIndex() kartoja masyvą atvirkštine tvarka ir grąžina pirmojo elemento, atitinkančio pateiktą testavimo funkciją, indeksą. Jei nė vienas elementas netenkina testavimo funkcijos, grąžinamas -1.

pavyzdys :
const array1 = [5, 12, 50, 130, 44];
const isLargeNumber = (element) => element > 45;
console.log(array1.findLastIndex(isLargeNumber));
// expected output: 3  (of element with value: 130)

11.       flatMap()             -  flatMap()Array flatMap“ () metodas pirmiausia susieja kiekvieną elementą naudodamas atvaizdavimo funkciją, 
tada suploja jį į naują masyvą. Sujungia flat() ir map() metodus i viena.

pavyzdys : 
let flatmapPvz = ["nesusiprateliu konfideracija", ["MEOW ", "jau"], "man galva ", ["plysta"]];

console.log(flatmapPvz.flatMap((element) => element)); 

// expected output 
["nesusiprateliu konfideracija, MEOW , jau, man galva, plysta"]

///arba kad aiskiau su skaiciais

const arr1 = [1, 2, [4, 5], 6, 7, [8]] ;

console.log(arr1.flatMap((element) => element)); 

// expected output 
[1, 2, 4, 5, 6, 7, 8]


sort()                          -  metodas surusiuoja masyvo elementus.

pavyzdys :
//string rusiavimas, pagal abecele
let months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

//skaiciu rusiavimas pagal skaicius maziausias nuo didziausio, bet tikrina tik pirmus skaicius 
let arrayRusiavimas = [1, 30, 4, 21, 100000];
array1.sort();
console.log(arrayRusiavimas);
// expected output: Array [1, 100000, 21, 30, 4]
*/

/*        Neiteraciniai metodai


1.          at()          - Metodas at() paima sveikojo skaičiaus reikšmę ir grąžina elementą pagal tą indeksą, leidžiantį naudoti teigiamus ir neigiamus sveikuosius skaičius. Neigiami sveikieji skaičiai skaičiuojami nuo paskutinio masyvo elemento.

pavyzdys : 
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// expected output: "Using an index of -2 item returned is 130"


2.          concat()      - Concat() metodas naudojamas sujungti du ar daugiau masyvų. Šis metodas nekeičia esamų masyvų, o grąžina naują masyvą

pavyzdys :

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


3.          copyWithin()  -  CopyWithin() metodas sekliai nukopijuoja dalį masyvo į kitą vietą tame pačiame masyve ir grąžina ją nekeisdamas ilgio.

pavyzdys : 
const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4)); 
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]

4.          entries()     -  Metodas entries() grąžina naują masyvo iteratoriaus objektą, kuriame yra kiekvieno masyvo indekso raktų/reikšmių poros.

pavyzdys :
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]


5.          fill()         - Metodas pakeičia visus masyvo elementus į statinę reikšmę, nuo pradžios indekso (numatytasis 0) iki pabaigos indekso (numatytasis masyvas.ilgis). Jis grąžina pakeistą masyvą.

pavyzdys :

const array1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]
// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]
console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
________________________________
6.          flat()         - metodas sukuria naują masyvą su visais antrinio masyvo elementais, rekursyviai sujungtais į jį iki nurodyto gylio.

pavyzdys:
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
___________________________________
7.          from()         - sukuria naują, negiliai nukopijuotą Array egzempliorių iš kartojamo arba į masyvą panašaus objekto.

pavyzdys:
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
__________________________________
8.          includes()     - metodas include() nustato, ar masyve yra tam tikra reikšmė tarp savo įrašų, atitinkamai grąžinant true arba false.

pavyzdys:
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

9.          isArray()      - statinis metodas nustato, ar perduota reikšmė yra masyvas.

pavyzdys:
Array.isArray(value)

10.          join()       - metodas sukuria ir grąžina naują eilutę, sujungdamas visus masyvo (arba į masyvą panašaus objekto) elementus, atskirtus kableliais arba nurodyta skyriklio eilute. Jei masyve yra tik vienas elementas, tada tas elementas bus grąžintas nenaudojant skyriklio.

pavyzdys : 
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"

11.           keys()       - metodas grąžina naują Array Iterator objektą, kuriame yra kiekvieno masyvo indekso raktai.

pavyzdys :
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();
for (const key of iterator) {
  console.log(key); // 0 1 2

12.            of()        - metodas sukuria naują masyvo egzempliorių iš kintamo argumentų skaičiaus, neatsižvelgiant į argumentų skaičių ar tipą.

Array.of(1, 2, 3); // [1, 2, 3]

13.             pop()         - išima paskutinį masyvo elementą.

pavyzdys :
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]


14.             push()         - Push() metodas prideda vieną ar daugiau elementų į masyvo pabaigą ir grąžina naują masyvo ilgį.

pavyzdys :
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

15.             reverse()       - apsuka masyva.

pavyzdys :
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]
items.reverse();
console.log(items); // [3, 2, 1]

16.             shift()       - sis metodas pašalina pirmąjį elementą iš masyvo.
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
// expected output: Array [2, 3]

17.             slice()       - Šis metodas išskaido dalį masyvo į naują masyvą. 

// pvz situoj situacijos a yra indeksas, nuo kurio prasideda pjūvis ir b yra indeksas, kuriame jis baigiasi, neįskaitant b. 
Jei nėra pabaigos indekso, ty b, tada visi kiti elementai prasideda nuo a yra supjaustytas.

let masyvas = [1,2,3,4];
let masyvasSlice = masyvas.slice(1,3)
console.log(masyvasSlice)
//expected output [2,3]

18.             splice()      - Šis metodas naudojamas norint ištrinti ir įterpti naujus elementus.

Čia a yra indeksas, kuriame norime įterpti / ištrinti elementus ir b yra elementų, kurie bus ištrinti, skaičius.
Viskas, kas pridėta po šių parametrų, pvz a ir b bus įterptas į rodyklę a.

Elementu istrynimas
let masyvasSpliceIstrynimas = masyvas.splice(0,1);
console.log(masyvasSpliceIstrynimas)
//expected output [2,3,4]

Elementu pridejimas
let masyvasSplicePridejimas = masyvas.splice(0,1,-1);
console.log(masyvasSplicePridejimas)
//expected output [-1,2,3,4]

19.             unshift()       -Šis metodas pradžioje prideda naują elementą

pavyzdys :
let masyvasUnshift = masyvas.unshift(0);
console.log(masyvasUnshift)
//Išvestis: [0,1,2,3,4]

20.             toString()      - pavercia konvertuoja masyvo elementus i string elementus. 
let masyvasToString = masyvas.toString()
console.log(masyvasToString)
///Išvestis: 1,2,3,4


21.             values()        -The values() method returns a new Array Iterator object that contains the values for each index in the array.
let languages = ["JavaScript", "Java", "C++"];

returns an Array Iterator object that contain values
let iteratorObject = languages.values();

// looping through iterator
for (let value of iteratorObject) {
  console.log(value);
}

// Output:
// JavaScript
// Java
// C++

22.             toLocateString() -method returns a string representing the elements of the array in a particular locale.
let array1 = ["Nepal", 1];

// returns string representation of array
let stringFromArray = array1.toLocaleString();

console.log(stringFromArray);

// Output:
// Nepal,1

*/

