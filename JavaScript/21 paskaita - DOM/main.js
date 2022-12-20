//      simple DOM manipulation

// bandymas1



// let div = document.createElement('div');
// let h1 = document.createElement('h1')
// let p = document.createElement('p')
// let text = document.createElement('Pavadinimas');
// h1.append(text);
// text = document.createTextNode('Paragrafas su daug teksto');
// p.append(text);

// div.append(h1);
// div.append(p);


// bandymas1.append(div)



  let bandymas1 = document.querySelector('#bandymas1');

  let data = "paragrafas su daug teksto";

  bandymas1.innerHTML += `
  <button class="slepti">Slėpti</button>
  <button class="rodyti nonDisplay">Rodyti</button> 


<div nonDisplay>
<h1>Pavadinimas</h1>
<p>${data}, kuris yra htmle</p>
</div>
`;




// bandymas 2

let bandymas2 = document.querySelector('#bandymas2');

let antraste = 'super duper JS';
let paragrafas = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus consectetur ea accusamus, nostrum sunt excepturi ipsam sit quas deleniti, non perspiciatis quasi! Magni rem autem consequatur officiis amet iste.';

for (let i = 0; i < 5; i++) {
  bandymas2.innerHTML += `<div>
  <h1>${antraste}</h1>
  <p>${paragrafas}</p>
  </div>
  `;
}

// bandymas 3

let bandymas3 = document.querySelector('#bandymas3');
let antrastes = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7'];
let paragrafai = [
  'Lorem ipsum dolor sit amet consectetur. 1',
  'Lorem ipsum dolor sit amet consectetur.2',
  'Lorem ipsum dolor sit amet consectetur. 3',
  'Lorem ipsum dolor sit amet consectetur. 4',
  'Lorem ipsum dolor sit amet consectetur. 5',
  'Lorem ipsum dolor sit amet consectetur. 6',
  'Lorem ipsum dolor sit amet consectetur. 7'
];
for (let i = 0; i < antrastes.length; i++) {
  bandymas3.innerHTML += `
  <div>
  <h1>${antrastes[i]}</h1>
  <p>${paragrafai[i]}</p>
  </div>
  `;
}


// bandymas 4

let bandymas4 = document.querySelector('#bandymas4');

let data4 = [
  {
    antraste: 'A1',
    paragrafas: 'Tekstas1'
  },
  {
    antraste: 'A2',
    paragrafas: 'Tekstas2'
  },
  {
    antraste: 'A3',
    paragrafas: 'Tekstas3'
  },
  {
    antraste: 'A4',
    paragrafas: 'Tekstas4'
  },
  {
    antraste: 'A5',
    paragrafas: 'Tekstas5'
  }
];
for (let i = 0; i < data4.length; i++) {
  bandymas4.innerHTML += `
  <div>
    <h1>${data4[i].antraste}</h1>
    <p>${data4[i].paragrafas}</p>
  </div>
  `;
};

// mygtukai task1 

let sleptiMygtukas = document.querySelector('.slepti');
let rodytiMygtukas = document.querySelector('.rodyti');

sleptiMygtukas.addEventListener('click', function(){
  sleptiMygtukas.classList.add('.nonDisplay');
  bandymas1.children[2].classList.add('nonDisplay');
  rodytiMygtukas.classList.remove('nonDisplay');
});
rodytiMygtukas.addEventListener('click', function(){
  sleptiMygtukas.classList.remove('nonDisplay');
  bandymas1.children[2].classList.remove('nonDisplay');
  rodytiMygtukas.classList.add('nonDisplay');
});


// kitas budas

/* <button class="sleptiRodyti">Slėpti</button> */

// let sleptiRodyti = document.querySelector('.sleptiRodyti');

// sleptiRodyti.addEventListener('click', function () {
//   if(sleptiRodyti.innerText === "Slėpti"){
//     sleptiRodyti.innerText = "Rodyti";
//     bandymas1.children[1].classList.toggle('nonDisplay');
//   } else if(sleptiRodyti.innerText === "Rodyti"){
//     sleptiRodyti.innerText = "Slėpti";
//     bandymas1.children[1].classList.toggle('nonDisplay');
//   }
//   // bandymas1.children[1].classList.toggle('nonDisplay');
// });

// let sleptiRodyti = document.querySelector('.sleptiRodyti');
// sleptiRodyti.addEventListener('click', function(){
//   if(sleptiRodyti.innerText === 'Slėpti'){
//     sleptiRodyti.innerText = "Rodyti";
//     bandymas1.children[1].classList.toggle('nonDisplay');
//   }else if (sleptiRodyti.innerText === 'Rodyti'){
//     sleptiRodyti.innerText = "Slėpti";
//     bandymas1.children[1].classList.toggle('nonDisplay');
//   }
// })



// const pirmaUzduotis = [
//   {
//     title: "Mona Lisa",
//     paragraph: "Mona Lisa, also called Portrait of Lisa Gherardini, wife of Francesco del Giocondo, Italian La Gioconda, or French La Joconde, oil painting on a poplar wood panel by Leonardo da Vinci, probably the world’s most famous painting. It was painted sometime between 1503 and 1519, when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris, where it remained an object of pilgrimage in the 21st century. The sitter’s mysterious smile and her unproven identity have made the painting a source of ongoing investigation and fascination.",
//     image: "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg"
//   }, {
//     title: "Leonardo da Vinci paintings",
//     images: [
//       "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
//       "https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg",
//       "https://www.leonardodavinci.net/images/gallery/lady-with-an-ermine.jpg"
//     ]
//   }, {
//     title: "Works of Greatests of Artists",
//     imagesTitles: ["Mona Lisa", "Last Supper", "Lady With An Ermine", "David", "The Creation of Adam", "Venus de Milo"],
//     images: [
//       "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
//       "https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg",
//       "https://www.leonardodavinci.net/images/gallery/lady-with-an-ermine.jpg",
//       "https://cdn.britannica.com/06/60906-050-FECBBC51/David-marble-sculpture-Michelangelo-Accademia-Florence.jpg",
//       "https://www.michelangelo.org/images/artworks/the-creation-of-adam.jpg",
//       "https://cdn.britannica.com/02/222202-050-40E1A83B/Statue-of-Venus-de-Milo-Louvre-Paris-France.jpg"
//     ],
//     paragraphs: [
//       "Mona Lisa, also called Portrait of Lisa Gherardini, wife of Francesco del Giocondo, Italian La Gioconda, or French La Joconde, oil painting on a poplar wood panel by Leonardo da Vinci, probably the world’s most famous painting. It was painted sometime between 1503 and 1519, when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris, where it remained an object of pilgrimage in the 21st century. The sitter’s mysterious smile and her unproven identity have made the painting a source of ongoing investigation and fascination.",
//       "Last Supper, Italian Cenacolo, one of the most famous artworks in the world, painted by Leonardo da Vinci probably between 1495 and 1498 for the Dominican monastery Santa Maria delle Grazie in Milan. It depicts the dramatic scene described in several closely connected moments in the Gospels, including Matthew 26:21–28, in which Jesus declares that one of the Apostles will betray him and later institutes the Eucharist. According to Leonardo’s belief that posture, gesture, and expression should manifest the “notions of the mind,” each one of the 12 disciples reacts in a manner that Leonardo considered fit for that man’s personality. The result is a complex study of varied human emotion, rendered in a deceptively simple composition.",
//       "Lady with an Ermine is a painting by Leonardo da Vinci, from around 1489-1490. That stunning picture is 40.3 cm wide and 54.8 cm high, oil on walnut board. Unfortunately, the original background has been overlaid probably in the 17th c. The subject of the portrait is identified as Cecilia Gallerani, and was probably painted at a time when she was the mistress of Lodovico Sforza, Duke of Milan and Leonardo was in the service of the Duke.",
//       "David, marble sculpture executed from 1501 to 1504 by the Italian Renaissance artist Michelangelo. The statue was commissioned for one of the buttresses of the cathedral of Florence and was carved from a block of marble that had been partially blocked out by other sculptors and left outdoors. After Michelangelo completed the sculpture, the Florentine government decided instead to place it in front of the Palazzo Vecchio. The original is now in the Accademia, and copies have been installed in the Piazza della Signoria and the Piazzale Michelangelo, which overlooks Florence.",
//       "Of all the marvelous images that crowd the immense complex of the Sistine Ceiling, The Creation of Adam is undoubtedly the one which has most deeply impressed posterity. No wonder, for here we are given a single overwhelming vision of the sublimity of God and the potential nobility of man unprecedented and unrivaled in the entire history of visual art. No longer standing upon earth with closed eyes and mantle, the Lord floats through the heavens, His mantle widespread and bursting with angelic forms, and His calm gaze accompanying and reinforcing the movement of His mighty arm. He extends His forefinger, about to touch that of Adam, who reclines on the barren coast of earth, barely able as yet to lift his hand. The divine form is convex, explosive, paternal; the human concave, receptive, and conspicuously impotent. The incipient, fecundating contact about to take place between the two index fingers has often been described as a spark or a current, a modern electrical metaphor doubtless foreign to the sixteenth century, but natural enough considering the river of life which seems about to flow into the waiting body.",
//       "Venus de Milo, ancient statue commonly thought to represent Aphrodite, now in Paris at the Louvre. It was carved from marble by Alexandros, a sculptor of Antioch on the Maeander River about 150 BCE. It was found in pieces on the Aegean island of Melos on April 8, 1820, and was subsequently presented to Louis XVIII (who then donated it to the Louvre in 1821). Though it was reconstructed to a standing posture, the statue’s arms were never found. An inscription that is not displayed with the statue states that “Alexandros, son of Menides, citizen of Antioch of Maeander made the statue.” The figure’s origin on the island of Melos has led some to think she may be Amphitrite, the Greek goddess of the sea."
//     ]
//   }
// ];
// //1
// let first1 = document.querySelector('#first1');
// first1.innerHTML += 
// `
// <h1>${data[0].title}</h1> 
// <p>${data[0].paragraph}</p>
// <img src="${data[0].image}">
// `
// ;



