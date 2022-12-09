// Lambda ir array functions

/*


*/


// lambda sintakse
/*

parametras => veiksmas; 

(parametras1, parametras2) => veiksmas;

(parametras1, parametras2) => { veiksmas1;
veiksmas2;

return ats;
}


let pavadinimas = (parametras1, parametras2) => { return veiksmas };
*/
// Lambda išraiška yra naujoviškas, sutrumpintas funkcijų užrašymo būdas.
// Tai yra standartizuotas funkcijų užrašymo būdas nuo Ecma6 versijos (2015). JIsa yra trumpensis, patogesnis, greitesnis.

//senuoju

function daugyba(par1, par2) {
  return par1 * par2;
}
//  naujuoju - lambda/arrow

let daugyba1 = (par1, par2) => par1 * par2



// Tasks
// 1) Parašykite lambda, kuri grąžina tekstą "Labas!".

let tekstas = () => console.log('Labas!');

//2) Parašykite lambda, kuri grąžina dviejų kintamųjų sudėtį.

let sudetis = (pirmas, antras) => pirmas + antras;

// 3) Parašykite lambda, kuri grąžina jai paduoto teksto ilgį.

let tekstoIlgis = (tekstas) => tekstas.length;

// 4) Parašykite lambda, kuri grąžina jai paduoto teksto pirmąją raidę.

let pirmaRaide = (raide) => raide[0];

// 5) Parašykite lambda, kuri grąžina jai paduoto teksto paskutinę raidę.

let paskutineRaide = (raide) => raide.charAt(raide.length - 1);

// 6) Parašykite lambda, kuri grąžina jai paduoto skaičiaus kvadratą.

let kvadratas = (number) => Math.pow(number, 2);

// 7+) Parašykite lambda, kuri iš jai paduoto masyvo išveda visus kintamuosius į konsolę.

// pataisyti
let masyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let kintamieji = () => console.log(masyvas);

// 8+) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas antrą kintamąjį į konsolę.

let kintamieji3 = (masyvas2) => {
  for (let i = 0; i < masyvas2.length; i += 2) {
    console.log(masyvas2[i]);
  }
}
//pataisyti
// let masyvas1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let kintamieji2 = () => {
//   for (let i = 0; i < masyvas1.length; i += 2) {
//     console.log(masyvas1[i]);
//   }
// }

// kitas budas paduodant elementa ji irasius konsoleje



// 9++) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas kažkelintą (nurodytą) kintamąjį į konsolę.

let task9 = (masyvas3, kaskelinta) => {
  for (let i = 0; i < masyvas3.length; i += kaskelinta) {
    console.log(masyvas3[i]);
  }
}

// 10+)11+) Parašykite lambda, kuri iš jai paduoto skaičių masyvo į konsolę išveda tik lyginius/nelyginius skaičius.

let task10 = (masyvas) => {
  for (let i = 0; i <= masyvas.length - 1; i++) {
    if (masyvas[i] % 2 == 0) {
      console.log(masyvas[i] + ' lyginis')
    } else {
      console.log(masyvas[i] + ' nelyginis')
    }
  }
}
// nelyginio iesko kai % 2 !==0


// 12+) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius ilgesnius nei 3 simbolių. 

let task12 = (masyvas) => {
  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i].length > 3) {
      console.log(masyvas[i]);
    }
  }
}


// 13++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie prasideda kažkokia (nurodyta) raide.
// galima daryti palyginimą
let task13 = (masyvas, par2) => {
  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i][0].includes(par2)) {
      console.log(masyvas[i]);
    }
  }
}

// 14+++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie yra ilgesni nei A, bet trumpesni nei B ir prasideda mažąja raide. (A - trumpiausias galimas žodžio ilgis, B - ilgiausias galimas žodžio ilgis).


// 15+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais.

let task15 = (masyvas) => {
  let masyvas1 = [];
  for (let element of masyvas) {
    typeof (element) === 'string' ? masyvas1.push(element) : null;
  } return masyvas1;
}

//16++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie yra ilgesni nei A. (A - trumpiausias galimas žodžio ilgis).

let stringMasyvas = ['masyvas', 'vardas', 'pavarde', 'labadienavisogero', 'as', 'laba', 'tai']
let tusciasMasyvas = [];
let task16 = (masyvas, daugiauNei) => {
  for (i=0; i < masyvas.length; i++) {
    if (typeof (masyvas[i]) === 'string' && masyvas[i].length > daugiauNei){
      tusciasMasyvas.push(masyvas[i])
    }else {}
    }console.log(tusciasMasyvas)
  }



//17++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie prasideda didžiąja raide.

//18+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais.

let task18 = (masyvas) => {
  for (let element of masyvas) {
    typeof (element) === 'number' ? console.log(element) : null;
  }
}


//19+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A. (A - mažiausias galimas skaičius).

let skaiciuMasyvas = [1,3,5,666,7774,35,56,54,22,1,0, 'labas']
let tusciasMasyvas2 = [];

let task19 = (masyvas, daugiauNei) => {
  for (i=0; i < masyvas.length; i++) {
    if (typeof (masyvas[i]) === 'number' && masyvas[i].length > daugiauNei){
      tusciasMasyvas.push(masyvas[i])
    }else {}
    }console.log(tusciasMasyvas)
  }




// 20+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra mažesni negu A. (A - didžiausias galimas skaičius).

//21++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A, bet mažesni negu B. (A - mažiausias galimas skaičius, B - didžiausias galimas skaičius).

//22+++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A, bet mažesni negu B ir lyginiai arba nelyginiai (lyginis - true, nelyginis - false) (arba galima priskirti raides, tarkim jei nori lyginių, parašai "l" kaip parametrą, jei nelyginių, parašai "n" kaip parametrą ir pns.)





// Neiteracinių masyvų metodų užduotys:
//   1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.


let grazinaStringa = (stringMasyvas1) => stringMasyvas1.toString();

//   2) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)
//isirasytio nauja masyva pries for ir grazinti ji apversta


let versti = [1,2,3,4,5,6,7]
  let task2neit1 = (versti) =>{  
    let answerArray =[]
    for (let i = versti.length - 1; i >= 0; i--){
       answerArray.push(versti[i]);
    }return answerArray
}

//   3) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius. (galima su forEach arba paprastu for)

let findMaxMin = (array) => {
  let largest = array[0];
  let smalest = array[0];
  for(let i = 0; i < array.length; i++) {
     if(array[i] > largest) {
        largest = array[i];
     }
     else if (array[i] < smalest) {
        smalest = array[i];
     }
  };
  return {
     smalest, largest
  }
 }

//   4) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.

let taskneit4 = [1,2,3,4,5,6,7];
let taskneit41 = [4,5,6,7,8,34,55,1,4];
let vienodi = (arr, arr1)
for(i=0; i<arr1.length; i++){
  arr.includes(arr1[i] ? console.log(arr1[i]) : null) ;
}
vienodi(taskneit4,taskneit41)

let vienodosReiksmes = (array1, array2)=>array2.filter(function (element) {
  return array1.indexOf(element) !== -1;
});


// be metodo
  let ArrayAnswer= [];
  function arrayMatch(arr1, arr2){
    for(var i=0 ; i<arr1.length ; ++i) {
      for(var j=0 ; j<arr2.length ; ++j) {
        if(arr1[i] == arr2[j]) {    // If element is in both the arrays
          ArrayAnswer.push(arr1[i]); // Push to arr array
        }
      }
    }
     
    return ArrayAnswer;  // Return the arr elements
  }


//   5) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])

let raidziuMasyvas = ["a", "b", "c", "d", "e", "f"];

let skaicMasyvas = [0, 3, 4];

let uzd_5_task = (masyvas1, masyvas2) => {

  let naujasMasyvas = [];

  for (let i = 0; i < masyvas2.length; i++) {

    naujasMasyvas.push(masyvas1[masyvas2[i]]);

  }

  return naujasMasyvas;

}








// let words = [];
// let result = words.filter(word => word.length > 3);

// console.log(result);

