//      OOP Principai

/*
Youtube:

TraversyMedia (gera info);

Programming with mosh;
The net ninja(geri tutorialai);
WebDev; (me tik js)
Free code camp; (daug info)
The coding train (naujienos ir projektai,  pradedančiąjam nelabai);
FireShip ();
CodeBullet (for fun);
KevinPowell (html ir css);
DevDreamer (trumpi, aiškūs video);


*/


/*
Inkapsiuliacija       - objekto vidiniia duomenys slepiamiir jais galima manipuliuoti tik naudojant objekto viešus metodus.

Abstrakcija           - objekto 
nepriklausomumas nuo išorinnių sudedamųjų dalių.

Paveldėjimas          - viena klasė gali būti kitos klasės konkretizacija.

Polimorfizmas         - paveldi, bet kažkiek modifikuoja, prideda naujų.
*/


class Gyvunas {
  #pavadinimas; // privatus
  #kojuKiekis
  constructor(pavadinimas, kojuKiekis) {
    this.pavadinimas = pavadinimas;
    this.kojuKiekis = kojuKiekis;
  }
  getPavadinimas() {
    return this.#pavadinimas; //paimi pavadinimas
  }
  setPavadinimas(naujasPavadinimas) {
    this.#pavadinimas = naujasPavadinimas; //pakeiti pavadinima
  }
  getKojuKiekis() {
    return this.#kojuKiekis;
  }
  setKojuKiekis(naujasKojuKiekis) {
    return this.#kojuKiekis = naujasKojuKiekis;
  }
  valgo() {
    return 'kazka'
  }
}

class Kate extends Gyvunas {   // klase kate gauna visus gyvunas nustatymus, negauna tik konstruktoriaus ir jo nustatymu
  constructor(kojuKiekis) {
    super('kate', kojuKiekis); //idedam gyvunas construktoriu su sitais nustatymais
  }
  #balsoVariantai = ['miau', 'mur', 'prrrrrru', 'sssssshhhhhh']
  #balsoVariantas() {
    return this.#balsoVariantai[Math.floor(Math.random() * this.#balsoVariantai.length)];
  }
  balsas() {
    return this.#balsoVariantas();
  }
  valgo() {
    return 'peles'
  }
}
class Voras extends Gyvunas {
  constructor(kojuKiekis) {
    super('Voras', kojuKiekis);
  }
  gasdina() {
    return 'bu'
  }
  valgo() {
    return 'muses'
  }
}

let gyvunas = [
  new Gyvunas('Kate', 4),
  new Kate(4),
  new Voras(8)
]


//1) Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname.
//1.1) JavaScripte pasirašykite klasę su konstruktoriumi, kuris turės vardą ir pavardę. Metodą - atsirasti lentelėje.
//1.2) Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization).
//1.3) Sukurkite objektą naudojant Klasę.
//1.4) Galiausiai iškvieskite metodą, kad pridėtų į lentelę.
//Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje esančioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

class Person {
  constructor(firstName, lastName) {
    this.firstName = this.getFormattedName(firstName);//vardas=sutvarkyto fullname vardui 
    this.lastName = this.getFormattedName(lastName);//pavarde=sutvarkyto fullname pavardei
  }
  getFormattedName(name) {
    return name[0].toLocaleUpperCase() + name.slice(1).toLocaleLowerCase(); //vardas ir pavarde grazinami, 0-oji raide verciama i didziaja o 1-oji nukerpama(nes liko), likes tekstas verciamas mazosios raidem
  }

  addToTheTable() { // idedu varda i table
    const usersListElement = document.querySelector("tbody#users-list"); //obvious
    const nameRow = document.createElement("tr");//kuriu table row
    const firstNameElement = document.createElement("td"); // kuriu table data kuriame bus mano name
    const lastNameElement = document.createElement("td");// kuriu table data kuriame bus mano last name

    firstNameElement.textContent = this.firstName; //i susikurta firstnameelement dedu savo firstname
    lastNameElement.textContent = this.lastName;// same tik kad dedu savo lastname

    nameRow.append(firstNameElement, lastNameElement); //appendinu abu

    usersListElement.append(nameRow); // appendinu visa table row
  }
}
const fullNameEntryForm = document.querySelector("form#fullNameEntry");//pasirenku forma, kur vartotojas ves savo duomenis

fullNameEntryForm.addEventListener("submit", (event) => { //dedu event listeneri submitui
  event.preventDefault();

  const fullName = document.querySelector("#fullNameInput").value.trim(); // is vartotojo ivesto inputo paimu value ir triminu (iskerpu white space)

  const firstName = fullName.split(" ")[0]; //splitinu ties tarpeliu pirma varda
  const lastName = fullName.slice(firstName.length).trim(); // slicinu first name ir triminu white space

  const user = new Person(firstName, lastName); //user prilyginamas naujam person su firstname ir lastname

  user.addToTheTable(); //user pridedamas i lentele

  // console.log({ user }); //consolinam
});



// 2) Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis).
//   2.1) Per Klasę, sukuriamas objektas ir jis atvaizduojamas po forma (CSS'ą rašykite CSS'e) kaip atvaizduota nuotraukoje (./images/cars.PNG).
//   3.1) Paspaudus ant automobilio bloko - turi alert išmesti kainą ir mileage. (gal su CSS'u gražiai padaryti, kad užėjus ant elemento su pele, atsiranda laukelis nuotraukoje...)
class Car {
  constructor (brand, model, mileage, price, image) {
    this.brand = brand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.image = image;
  }
  post() {
    const container = document.querySelector('.container'); //kuriu konteineri paemus is html .container 
    const createDiv = document.createElement('div');
    createDiv.className = '.card';
    const createImage = document.createElement('img');
    createImage.src = this.image; //sukuriu elmenta kuris bus this image, kad irasius i forma isikeltu nurodytas
    const createText = document.createElement('h2');
    createText.innerText = `${this.brand} ${this.model}`;// kadangi noriu jog man ismestu brand ir model, tai idedu tus parametrus i inner text if h2
    createDiv.append(createImage, createText);
    container.append(createDiv);
    createDiv.addEventListener('click', () => { //pridedu event listeneri kad paspaudus ant paveikslelio ismetu kaina
      const createP = document.createElement('p');
      createP.innerText = `${this.price}`;
      createDiv.append(createP);
      console.log(this.price);
    })
  }
}

document.querySelector('#carForm').addEventListener('submit', (event) => { //event listeneris formai
  event.preventDefault();
  const brand = document.querySelector('#brand').value;
  const model = document.querySelector('#model').value;
  const mileage = document.querySelector('#mileage').value;
  const price = document.querySelector('#price').value;
  const image = document.querySelector('#image').value; //paimu visas value
  const car = new Car(brand, model, mileage, price, image);
  car.post(); //car ikeliamas
})


// 3+) (PVP battle) https://edabit.com/challenge/ifDM26p25bqS8EsFu
// 4+) (Shiritori) https://edabit.com/challenge/6o5tYwwbY2ys7XTm4


// Susikurti (h1-h6) Antraštės Klasę su tekstu, atributais
class Heading{
  constructor(props){
    this.props = props;
    return this.render();
  }

  render = () =>{
    this.htmlElement = document.createElement(`h${this.props.dydis}`);
    this.textElement = document.createTextNode(this.props.tekstas);   
    this.htmlElement.append(this.textElement);

    if(this.props.atributai){
      // jeigu atributai yra objektas
      Object.keys(this.props.atributai).forEach(raktas => {
        this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
      });

      // jeigu atributai yra masyvai masyve
      // this.props.atributai.forEach(atributas => {
      //   this.htmlElement.setAttribute(atributas[0], atributas[1]);
      // });
    }

    return this.htmlElement;
  }
}

let antraste1 = new Heading({
  dydis: '1',
  tekstas: 'Kaimietiškai',
  atributai: {
    class: 'klasesVardas darVienaKlase',
    id: 'kazkoksId',
    style: 'color:red'
  }
  // atributai: [ 
  //   ['class', 'klasesVardas darVienaKlase'],
  //   ['id', 'kazkoksId'],
  //   ['style', 'color:red']
  // ]
});
document.querySelector("body").append(antraste1);
document.querySelector("body").append(new Heading({
  dydis:'5',
  tekstas:'Labas rytas',
  // atributai: [
  //   ['style', 'font-size: 50px']
  // ]
  atributai: {
    style: 'font-size:50px'
  }
}));
document.querySelector("body").append(new Heading({
  dydis:'6',
  tekstas:'mažiukas'
}));

//5) Sukurti Klasę, kuri kurs paragrafus.

class Paragraph {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render = () => {
    this.htmlElement = document.createElement('p');
    this.textElement = document.createTextNode(this.props.tekstas);
    this.htmlElement.append(this.textElement);
    if (this.props.atributai) {
      Object.keys(this.props.atributai).forEach(raktas => {
        this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
      });
    }
    return this.htmlElement;
  }
}
let paragrafas1 = new Paragraph({
  tekstas:
    "Lorem ipsum dolor sit ame  consectetur adipisicing elit. Quisquam, quod.",
  atributai: {
    class: "klasesVardas darVienaKlase",
    id: "kazkoksId",
    style: "color:green"
  }
});
document.querySelector("body").append(paragrafas1);
document.querySelector("body").append(
  new Paragraph({
    tekstas: "Laba diena",
    atributai: {
      style: "font-size:20px"
    }
  })
);
document.querySelector("body").append(
  new Paragraph({
    tekstas: "Paragrafas"
  })
);