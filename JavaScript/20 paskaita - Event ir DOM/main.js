let renkames1 = document.querySelector('p');
console.dir(renkames1); // grazina interaktyviu savybiu sarasa
console.log(renkames1) // grazina elementa(tekstas, skaicius..)


for(let i = 0; i<renkames1.length; i++){
  renkames1[i].addEventListener('click', function(event){
    console.dir(event); 
    console.log('paspaudei ant ' + i + ' "ojo paragrafo')});
}   //taip uzrasius veiks spaudziant ant kiekvieno paragrafo

let renkames2 = document.querySelector('html');
renkames2.addEventListener('keydown', function(event){
  console.dir(event); 
  console.log('Paspaudei ' + event.key + ' raidę')});

  let visiH1 = document.querySelectorAll('h1');

  for(let i=0; i <visiH1.length; i++){
    console.dir(visiH1[i]);
    visiH1[i].textContent += " :)" // keiciame duomenis
    visiH1[i].style.color = 'red' // keiciame duomenis
  }


  // TASK 2 
//Iš JS'o selektinti elementus 10 naudojant skirtingų selektorių.
console.groupCollapsed('TASK 2/3')

  let rinktis1 = document.querySelector('main');
  console.log(rinktis1);

  let rinktis2 = document.querySelector('#events');
  console.log(rinktis2);

  let rinktis3 = document.querySelector('#DOM');
  console.log(rinktis3);

  let rinktis4 = document.querySelector('section');
  console.log(rinktis4);

  let rinktis5 = document.querySelector('.pirmas');
  console.log(rinktis5);

  let rinktis6 = document.querySelector('.antras');
  console.log(rinktis6);

  let rinktis7 = document.querySelector('.apieEvents');
  console.log(rinktis7);

  let rinktis8 = document.querySelector('.parametrai');
  console.log(rinktis8);

  let rinktis9 = document.querySelector('.apieDOM');
  console.log(rinktis9);

  let rinktis10 = document.querySelector('.parinktiDOM');
  console.log(rinktis10);

  // TASK 3
 // Išbandyti 5 skirtingus event'ų listener'ius.


  let rinktis = document.querySelector('.pirmas');
  rinktis.addEventListener("mouseover", function(event){
    console.dir(event); 
    console.log('Mouse over!')});


    let clickOnEvent = document.querySelector('#DOM');
    clickOnEvent.addEventListener('click', function(event){
      console.dir(event); 
      console.log('Clicked on event')});


    let mouseover = document.querySelector('.antras');
    mouseover.addEventListener('mouseover', function(event){
      console.dir(event); 
      console.log('mouseover!')});
  

    let mousemove = document.querySelector('.parinktiDOM');
    mousemove.addEventListener('mousemove', function(event){
      console.dir(event); 
      console.log('mousemove')});
  
      let mouseenter = document.querySelector('#events');
      mouseenter.addEventListener('mouseenter', function(event){
        console.dir(event); 
        console.log('pele')});


console.groupEnd();
console.groupCollapsed('TASK 4')

// TASK 4
// Uždėti vienodą event'ą, 5'iems vienu metu selektintiems elementams.

let pasirinktiPenkis1 = document.querySelectorAll('.pirmas, .antras, .spalva')
for(let i = 0; i < pasirinktiPenkis1.length; i++){
  pasirinktiPenkis1[i].addEventListener('click', function(event){
    console.dir(event); 
    console.log('paspaudei ant vieno iš paragrafo pavadinimų')});
}
// pabaigti 
for(let i = 0; i<renkames1.length; i++){
  renkames1[i].addEventListener('click', function(event){
    console.dir(event); 
    console.log('paspaudei ant ' + i + ' "ojo paragrafo')});
} 
console.groupEnd();



// kurti DOM iš JS'o

let DOM_is_JS = document.querySelector('#DOM_is_JS');

//1 būdas
DOM_is_JS.innerHTML += "<p> Labas iš Java Script'o</p>";

// 2 būdas
let paragrafas = document.createElement("p"); //susikuri elementa koki nori ideti i puslapi
let tekstas = document.createTextNode("text content - tekstas iš JS"); // sukuri teksta, kuri nori ideti
paragrafas.append(tekstas) //paragrafui pridedame teksta
DOM_is_JS.append(paragrafas) //dokumento sekcijai prideti i dokumenta

console.log(paragrafas)
// paragrafas.textContent =


// dom stilizavimas iš JS
 
paragrafas.style.color = 'red';   //nepatogus

// 1 variantas
paragrafas.className  = 'tekstas'; //pasirašai klasę css faile, ir čia kreipiesi į css. htmle sitos klases nera, viskas js

// 2 variantas
paragrafas.setAttribute('class', 'tekstas');//atributo vardas(gali buti class, id) ir atributo reiksme

// 3 variantas
//geriausias budas yra kreiptis i klasiu sarasa
paragrafas.classList.add('tekstas');
paragrafas.classList.add('tekstas2');
paragrafas.classList.add('darvienaklase');

paragrafas.classList.remove('darvienaklase')


// task 5

let calculator = document.querySelector('#calc');

console.dir(calculator);
calculator.children[0].addEventListener('submit', function(e){
  e.preventDefault()
  console.dir(e);
  let skaicius1 = e.target.skaicius1.valueAsNumber;
  let skaicius2 = e.target.skaicius2.valueAsNumber;
  let veiksmas = document.querySelector('#veiksmas').value;
  let calculate;

  if(veiksmas == '+') {
    calculate = skaicius1 + skaicius2
  }else if(veiksmas == '-') {
    calculate = skaicius1 - skaicius2;
  }else if(veiksmas == '*') {
    calculate = skaicius1 * skaicius2;
  }else if(veiksmas == '/') {
    calculate = skaicius1 / skaicius2;
  }else if(veiksmas == 'saknis') {
    calculate = skaicius1* 1/skaicius2;
  }else if(veiksmas == 'laipsnis') {
    calculate = skaicius1,skaicius2;
  }else if(veiksmas == 'liekana'){
    calculate = skaicius1 % skaicius2;
}
  document.querySelector('#output').innerHTML = calculate
});

// let calculator = document.querySelector('#calc');

// console.dir(calculator);
// calculator.children[0].addEventListener('submit', function(e){
//   e.preventDefault()
//   console.dir(e);
//   let skaicius1 = e.target.skaicius1.valueAsNumber;
//   let skaicius2 = e.target.skaicius2.valueAsNumber;
//   let veiksmas = document.querySelector('#veiksmas').value;
//   let veiksmas;

// switch(veiksmas){
//     case '+':
//     atsakymas = skaicius1 + skaicius2;
// break;  // teisingai
//     console.log(sum);
//     break;
//     case '/':
//     let div = skaicius1 / skaicius2
//     console.log(div);
//     break;
//     case '-':
//     let min = skaicius1 - skaicius2
//     console.log(min);
//     break;
//     case '*':
//     let kart = skaicius1 * skaicius2
//     console.log(kart);
//     break;
//   }
  // document.querySelector('#output').innerHTML = atsakymas;

  
//   document.querySelector('#output').innerHTML = sum, div, min, kart
// });

  
