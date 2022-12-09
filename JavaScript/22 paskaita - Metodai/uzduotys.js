console.groupCollapsed('TASKS')

//task1
// Number:
//   1) Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją console() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).


let milkPrice = 1;

if(Number.isInteger(milkPrice)){
  console.log('Centų nereikia')
}else {
  console.log('Centų reikės')
}

// task 1.2
// 2) Pakoreguok pirmą pratimą, kad console taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).

if (Number.isInteger(milkPrice)) {
  console.log('Centų nereikia')
} else {
  console.log('Centų reikės')
}
console.log(milkPrice.toFixed(2))

// task 1.3 
// 3) Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trimis skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let kaina = Number(document.getElementById('kaina').value);
    let kiekis = Number(document.getElementById('kiekis').value);

    let total = kaina * kiekis;
  
    const isviso = document.createElement('h1');
    isviso.textContent = total.toFixed(2);
    document.querySelector('form').append(isviso);
  });

//   String:
//  1) Sukurk du input'us - vieną, kur vartotojas įves savo vardą; 
//kitą - skaičių. 
//Pirma, patikrink ar skaičius sveikas (jei ne - console). Jei sveikas, po apačia sukurk h1 elementą, kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.

document.querySelector('#task2').addEventListener (('submit'), (e) => {
    e.preventDefault();
    let vardas = document.getElementById('vardas').value;
    let skaicius = Number(document.getElementById('skaicius').value);
    if (Number.isInteger(skaicius)) {
      let h1 = document.createElement('h1');
      h1.textContent = vardas.repeat(skaicius);
      document.querySelector('#task2').append(h1);
    } else {
      console.log('įvedei nelyginį skaičių.'); 
    }
  })

  // 2) Sukurk input, kur vartotojas įves savo vardą. Įvedus - console'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.
  
  {
      document.getElementById('vardas').addEventListener(('keyup'), (e) => {
   e.preventDefault ();
    let vardas = document.getElementById('vardas').value.trim();
    console.log('Vardo raidžių yra: ' + vardas.length);
  });
  }


  // 3) Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.
  
  document.querySelector('#task3').addEventListener(('submit'), (e) => {
    e.preventDefault();
    let pilnasvardas = document.getElementById('pilnasvardas').value.trim().split(' ');
    let vardas = document.createElement('h1');
    vardas.textContent = pilnasvardas[0];
  
    let pavarde = document.createElement('h1');
    pavarde.textContent = pilnasvardas[1];
  
    document.querySelector('#task3').append(vardas, pavarde);
  });
  
//  4) Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis. Jeigu žodžių daugiau negu du, tuomet antrąjį, trečiąjį ir visus likusius išvesti į antrąjį h1 laukelį.
  
document.querySelector('#task3').addEventListener(('submit'), (e) => {
  e.preventDefault();
  let pilnasvardas = document.getElementById('pilnasvardas').value.trim().split(' ');
  let vardas = document.createElement('h1');
  vardas.textContent = pilnasvardas[0];

  let pavarde = document.createElement('h1');
  pavarde.textContent = pilnasvardas[1].concat(' ', pilnasvardas[2]);

  document.querySelector('#task3').append(vardas, pavarde);
});

