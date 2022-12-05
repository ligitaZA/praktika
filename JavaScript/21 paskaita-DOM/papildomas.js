//    užduotys
// 1) Naudodamiesi data[0] duomeninis atlikite šiuos veiksmus:
// 	1.1) JS'u sekcijoje sukurkite antraštę.
// 	1.2) JS'u sekciją papildykite paragrafu su tekstu.
// 	1.3) JS'u sekciją papildykite paveikslėliu.
// 	1.4) JS'u sekciją stilizuokite priskirdami klases.

let data = [
    {
      title: "Mona Lisa",
      paragraph: "Mona Lisa, also called Portrait of Lisa Gherardini, wife of Francesco del Giocondo, Italian La Gioconda, or French La Joconde, oil painting on a poplar wood panel by Leonardo da Vinci, probably the world’s most famous painting. It was painted sometime between 1503 and 1519, when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris, where it remained an object of pilgrimage in the 21st century. The sitter’s mysterious smile and her unproven identity have made the painting a source of ongoing investigation and fascination.",
      image: "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg"
    }, {
      title: "Leonardo da Vinci paintings",
      images: [
        "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
        "https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg",
        "https://www.leonardodavinci.net/images/gallery/lady-with-an-ermine.jpg"
      ]
    }, {
      title: "Works of Greatests of Artists",
      imagesTitles: ["Mona Lisa", "Last Supper", "Lady With An Ermine", "David", "The Creation of Adam", "Venus de Milo"],
      images: [
        "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
        "https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg",
        "https://www.leonardodavinci.net/images/gallery/lady-with-an-ermine.jpg",
        "https://cdn.britannica.com/06/60906-050-FECBBC51/David-marble-sculpture-Michelangelo-Accademia-Florence.jpg",
        "https://www.michelangelo.org/images/artworks/the-creation-of-adam.jpg",
        "https://cdn.britannica.com/02/222202-050-40E1A83B/Statue-of-Venus-de-Milo-Louvre-Paris-France.jpg"
      ],
      paragraphs: [
        "Mona Lisa, also called Portrait of Lisa Gherardini, wife of Francesco del Giocondo, Italian La Gioconda, or French La Joconde, oil painting on a poplar wood panel by Leonardo da Vinci, probably the world’s most famous painting. It was painted sometime between 1503 and 1519, when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris, where it remained an object of pilgrimage in the 21st century. The sitter’s mysterious smile and her unproven identity have made the painting a source of ongoing investigation and fascination.",
        "Last Supper, Italian Cenacolo, one of the most famous artworks in the world, painted by Leonardo da Vinci probably between 1495 and 1498 for the Dominican monastery Santa Maria delle Grazie in Milan. It depicts the dramatic scene described in several closely connected moments in the Gospels, including Matthew 26:21–28, in which Jesus declares that one of the Apostles will betray him and later institutes the Eucharist. According to Leonardo’s belief that posture, gesture, and expression should manifest the “notions of the mind,” each one of the 12 disciples reacts in a manner that Leonardo considered fit for that man’s personality. The result is a complex study of varied human emotion, rendered in a deceptively simple composition.",
        "Lady with an Ermine is a painting by Leonardo da Vinci, from around 1489-1490. That stunning picture is 40.3 cm wide and 54.8 cm high, oil on walnut board. Unfortunately, the original background has been overlaid probably in the 17th c. The subject of the portrait is identified as Cecilia Gallerani, and was probably painted at a time when she was the mistress of Lodovico Sforza, Duke of Milan and Leonardo was in the service of the Duke.",
        "David, marble sculpture executed from 1501 to 1504 by the Italian Renaissance artist Michelangelo. The statue was commissioned for one of the buttresses of the cathedral of Florence and was carved from a block of marble that had been partially blocked out by other sculptors and left outdoors. After Michelangelo completed the sculpture, the Florentine government decided instead to place it in front of the Palazzo Vecchio. The original is now in the Accademia, and copies have been installed in the Piazza della Signoria and the Piazzale Michelangelo, which overlooks Florence.",
        "Of all the marvelous images that crowd the immense complex of the Sistine Ceiling, The Creation of Adam is undoubtedly the one which has most deeply impressed posterity. No wonder, for here we are given a single overwhelming vision of the sublimity of God and the potential nobility of man unprecedented and unrivaled in the entire history of visual art. No longer standing upon earth with closed eyes and mantle, the Lord floats through the heavens, His mantle widespread and bursting with angelic forms, and His calm gaze accompanying and reinforcing the movement of His mighty arm. He extends His forefinger, about to touch that of Adam, who reclines on the barren coast of earth, barely able as yet to lift his hand. The divine form is convex, explosive, paternal; the human concave, receptive, and conspicuously impotent. The incipient, fecundating contact about to take place between the two index fingers has often been described as a spark or a current, a modern electrical metaphor doubtless foreign to the sixteenth century, but natural enough considering the river of life which seems about to flow into the waiting body.",
        "Venus de Milo, ancient statue commonly thought to represent Aphrodite, now in Paris at the Louvre. It was carved from marble by Alexandros, a sculptor of Antioch on the Maeander River about 150 BCE. It was found in pieces on the Aegean island of Melos on April 8, 1820, and was subsequently presented to Louis XVIII (who then donated it to the Louvre in 1821). Though it was reconstructed to a standing posture, the statue’s arms were never found. An inscription that is not displayed with the statue states that “Alexandros, son of Menides, citizen of Antioch of Maeander made the statue.” The figure’s origin on the island of Melos has led some to think she may be Amphitrite, the Greek goddess of the sea."
      ]
    }
];
// 1
let first1 = document.querySelector('#first1');
first1.innerHTML += 
`
<div class="task1">
<h1>${data[0].title}</h1> 
<p>${data[0].paragraph}</p>
<img src="${data[0].image}">
</div>
`
;
// 2
// 2) Naudodamiesi data[1] duomenimis atlikite šiuos veiksmus:
// 	2.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.
// 	2.2) JS'u sekciją stilizuokite priskirdami klases.


let task2 = document.querySelector("#task2");

task2.innerHTML += `
  <div class="task2">
  <h1>${data[1].title}</h1>
    <div class="task2_image_container">
      ${
        data[1].images.map(function(image){
          return `<img src="${image}">`;
        })
      }
    </div>
  </div>
`;

// for(let image of data[1].images){
//   console.log(image);
// }
// console.log("---------------------");
// data[1].images.forEach(function(image){
//   `<img src="${image}">`
// });
/* <img src="${data[1].images[0]}">
  <img src="${data[1].images[1]}">
  <img src="${data[1].images[2]}"></img> */



  // task3 

  // 3) Naudodamiesi data[2] duomenimis atlikite šiuos veiksmus:
  // 3.0) Sutvarkykite data[2] viduje esančius duomenis.
	// 3.1) JS'u sekcijoje sukurkite antraštę su paveiksliukais.
	// 3.2) JS'u sekciją papildykite paveiksliukų pavadinimais. (paveiksliukus ir jų pavadinimus laikyti atskiruose div'uose)
	// 3.3) JS'u sekciją papildykite kiekvienam pavadinimui/paveiksliukui skirtais aprašymais.(paveiksliukus ir jų pavadinimus bei aprašymus laikyti atskiruose div'uose)
	// 3.4) JS'u sekciją stilizuokite priskirdami klases.

  let task3 = document.querySelector('#task3');

for (let i = 0; i < data[2].imagesTitles.length; i++) {
  task3.innerHTML += `
  <div class="inner">
    <h1>${data[2].imagesTitles[i]}</h1>
  <div class="imagesAndPar">
    <img src="${data[2].images[i]}">
    <p>${data[2].paragraphs[i]}</p>
  </div>
  </div>
  `;
};