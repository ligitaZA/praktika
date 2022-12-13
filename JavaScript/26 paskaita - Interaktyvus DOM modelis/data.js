const meniu = [
  {
    id: '0',
    pavadinimas: "Kebabas lėkštėje",
    sudetis: ['vištiena', 'šviežios daržovės', 'Chalapos paprikos', 'marinuoti agurkėliai', 'gruzdintos bulvytės', 'padažas'],
    kaina: 5.5
  },{
    id: '1',
    pavadinimas: "Didelis kebabas lavaše",
    sudetis: ['lavašas', 'vištiena', 'šviežios daržovės', 'padažas'],
    kaina: 4.6
  },{
    id: '2',
    pavadinimas: "Mažas kebabas lavaše",
    sudetis: ['lavašas', 'vištiena', 'šviežios daržovės', 'padažas'],
    kaina: 4.1
  },{
    id: '3',
    pavadinimas: "Didelis kebabas lavaše su traškučiais",
    sudetis: ['lavašas', 'vištiena', 'agurkai', 'pomidorų griežinėliai', 'svogūnai', 'traškučiai', 'padažas'],
    kaina: 4.6
  },{
    id: '4',
    pavadinimas: "Mažas kebabas lavaše su traškučiais",
    sudetis: ['lavašas', 'vištiena', 'agurkai', 'pomidorų griežinėliai', 'svogūnai', 'traškučiai', 'padažas'],
    kaina: 4.1
  },{
    id: '5',
    pavadinimas: "Kebabas pitoje",
    sudetis: ['itališka duonelė', 'vištiena', 'šviežios daržovės', 'padažas'],
    kaina: 4.5
  },{
    id: '6',
    pavadinimas: "Gruzdintos bulvytės",
    sudetis: ['bulvytės', 'padažas'],
    kaina: 2.5
  },{
    id: '7',
    pavadinimas: "Gruzdinti koldūnai su mėsos įdaru",
    sudetis: ['koldūnai', 'padažas'],
    kaina: 3.2
  },{
    id: '8',
    pavadinimas: "Gruzdinti koldūnai su trijų sūrių įdaru",
    sudetis: ['koldūnai', 'padažas'],
    kaina: 3.7
  },{
    id: '9',
    pavadinimas: "Gruzdinti koldūnai su saliamio ir sūrio įdaru",
    sudetis: ['koldūnai', 'padažas'],
    kaina: 3.7
  },{
    id: '10',
    pavadinimas: "Bulvytės + vištiena + padažas",
    sudetis: ['bulvytės', 'vištiena', 'padažas'],
    kaina: 4
  },{
    id: '11',
    pavadinimas: "Coca Cola",
    sudetis: ['kola'],
    kaina: 1.5
  },{
    id: '12',
    pavadinimas: "Fanta",
    sudetis: ['fanta'],
    kaina: 1.5
  },{
    id: '13',
    pavadinimas: "Sprite",
    sudetis: ['sprite'],
    kaina: 1.5
  }
];














// // Susikurti duomenų failą
// const meniu = [
//   {
//     id: '0',
//     pavadinimas: 'Kebabas lėkštėje',
//     sudetis: ['Vištiena', 'šviežios daržovės', 'chalapos paprikos', 'marinuoti agurkėliai', 'gruzdintos bulvytės', 'padažas'],
//     kaina: 5.50
//   },{
//     id: '1',
//     pavadinimas: 'Didelis kebabas lavaše',
//     sudetis: ['Lavašas', 'vištiena', 'šviežios daržovės', 'padažas'],
//     kaina: 4.60
//   },{
//     id: '2',
//     pavadinimas: 'Mažas kebabas lavaše',
//     sudetis: ['Lavašas', 'vištiena', 'šviežios daržovės', 'padažas'],
//     kaina: 4.10
//   },{
//     id: '3',
//     pavadinimas: 'Didelis kebabas lavaše su traškučiais',
//     sudetis: ['Lavašas', 'vištiena', 'agurkai', 'pomidorų giežinėliai', 'svogūnai', 'traškučiai', 'padažas'],
//     kaina: 4.60
//   },{
//     id: '4',
//     pavadinimas: 'Mažas kebabas lavaše su traškučiais',
//     sudetis: ['Lavašas', 'vištiena', 'agurkai', 'pomidorų giežinėliai', 'svogūnai', 'traškučiai', 'padažas'],
//     kaina: 4.10
//   },{
//     id: '5',
//     pavadinimas: 'Kebabas pitoje',
//     sudetis: ['Itališka duonelė', 'vištiena', 'šviežios daržovės', 'padažas'],
//     kaina: 4.50
//   },{
//     id: '6',
//     pavadinimas: 'Gruzdintos bulvytės',
//     sudetis: ['bulvytės','padažas'],
//     kaina: 2.50
//   },{
//     id: '7',
//     pavadinimas: 'Gruzdinti koldūnai su mėsos įdaru',
//     sudetis: ['Koldūnai', 'padažas'],
//     kaina: 3.20
//   },{
//     id: '8',
//     pavadinimas: 'Gruzdinti koldūnai su trijų sūrių įdaru',
//     sudetis: ['Koldūnai', 'padažas'],
//     kaina: 3.20
//   },{
//     id: '9',
//     pavadinimas: 'Gruzdinti koldūnai su saliamio ir sūrui įdaru',
//     sudetis: ['Koldūnai', 'padažas'],
//     kaina: 3.7
//   },{
//     id: '10',
//     pavadinimas: 'Bulvytės + vištiena + padažas',
//     sudetis: ['Bulvytės', 'vištiena', 'padažas'],
//     kaina: 4
//   },{
//     id: '11',
//     pavadinimas: 'Coca-cola',
//     sudetis: ['kola'],
//     kaina: 1.5
//   },{
//     id: '12',
//     pavadinimas: 'Fanta',
//     sudetis: ['fanta'],
//     kaina: 1.5
//   },{
//     id: '13',
//     pavadinimas: 'Sprite',
//     sudetis: ['sprite'],
//     kaina: 1.5
//   }
// ];
// // Susikurti formą, kurioje gali pasirinkti 1 patiekalą.

// const formSec = document.querySelector('#form');
// const form = document.createElement('form');



// let div = document.createElement('div');
// div.classList.add('patiekaloSelektas');
// let select = document.createElement('select');
// select.setAttribute('name', 'patiekalas');
// select.setAttribute('id', 'patiekalas');

// meniu.forEach(item => {
//     let option = document.createElement('option');
//     option.setAttribute('value', item.id);
//     let text = document.createTextNode(item.pavadinimas);
//     option.append(text);
//     select.append(option);
// });
// div.append(select);
// form.append(div);

// div = document.createElement('div');
// div.classList.add('submitDiv');
// let input = document.createElement('input');

// input.setAttribute('type', 'submit');
// input.setAttribute('value', 'Užsisakyti');

// div.append(input);
// form.append(div);

// formSec.append(form);


// // saskaita
// const saskaita = document.querySelector('#saskaita');
// let saskaitosSukurimas = (preke) => {
//   let mainDiv = document.createElement('div');

//   let p1 = document.createElement('p');
//   p1.classList.add('date');
//   let text = document.createTextNode(gautiDabartiniLaika());
//   p1.append(text);

//   let h4 = document.createElement('h4');
//   text = document.createTextNode("Įmonės pav");
//   h4.append(text);

//   let h1 = document.createElement('h1');
//   text = document.createTextNode('Sąskaita');
//   h1.append(text);

//   const hr = document.createElement('hr');
//   const hr1 = document.createElement('hr');
//   const hr2 = document.createElement('hr');

//   const ul = document.createElement('ul');
//   // ul

//   let p2 = document.createElement('p');
//   p2.classList.add('bendraKaina');
//   text = document.createTextNode('bendraKaina');
//   p2.append(text);

//   let h2 = document.createElement('h2');
//   text = document.createTextNode('Padėkojimas');
//   h2.append(text);

//   mainDiv.append(p1, h4, h1, hr, ul, hr1, p2, hr2, h2);
//   saskaita.append(mainDiv);
// }

// let gautiDabartiniLaika = () => {
//   // let date = new Date().toISOString();
//   // date = date.replace("T", " ");
//   // date = date.slice(0, date.indexOf(" ")+1)+
//   //         (Number(date.slice(date.indexOf(" ")+1, date.indexOf(" ")+3))+2)+
//   //         date.slice(date.indexOf(" ")+3, date.indexOf(" ")+6);
//   let date = new Date();
//   let dateString = date.toLocaleString('lt-LT');
//   return dateString;
// }
// saskaitosSukurimas();

// document.querySelector('#form > form').addEventListener('submit', e => {
//   e.preventDefault();
//   console.dir(e);
//   saskaitosSukurimas();
// })
// // const saskaita = document.querySelector('#saskaita');
// // let saskaitosSukurimas = (preke) =>{
// //   let div = document.createElement('div');
// //   let p = document.createElement(p);
// //   p.classList.add('date');
// //   let text = document.createTextNode(gautiDabartiniLaika());
// //   p.append(text)

// //   let h4 = document.createElement('h4')
// //   text = document.createTextNode('Įmonės pav.');
// //   h4.append();

// //   let h1 = document.createElement('h1')
// //   text = document.createTextNode('Sąskaita');
// //   h1.append();

// //   const hr = document.createElement('hr');

// //   const ul = document.createElement('ul')

// //   p = documen.createElement('p');
// //   p.classList.add('bendraKaina');


// //   let h2 = document.createElement('h2')
// //   text = document.createTextNode('Padėka')
// //   h2.append(text);


// //   mainDiv.append(p1, h4,h1,hr, ul, hr, p2, hr, h2)
// //   saskaita.append(mainDiv)
// // }

// // let gautiDabartiniLaika = ()=> {
// //   // let date = new Date().toISOString();
// //   // date = date.replace("T"," ");
// //   // date = date.slice(0, date.indexOf(" ")+1) + (Number(date.slice(date.indexOf(" ")+1, date.indexOf(" ")+3))+2) + date.slice(date.indexOf(" ")+3, date.indexOf(" ")+6);
// //   // return date;
// //   var date = new Date(); 
// //   var dateString = date.toLocaleString('lt-LT'); 
// //   console.log(dateString);
// // }


// //Pateikus formą, apačioje atvaizduojama sąskaita.

// // Patobulinti formą, kad būtų galima pasirinkti patiekalų kiekį. Pakoreguoti sąskaitą.

// //Patobulinti formą, kad būtų galima pasirinkti daugiau nei vieną patiekalą. Pakoreguoti sąskaitą, kad veiktų tvarkingai