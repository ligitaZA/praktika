//              KLASĖS

/*
Klasė yra objektų kūrimo šablonas.
Klasė privaloi būti aprašyta prieš į ją kreipiantis.
Klasių pavadinimai rašomi iš didžiųjų raidžių.
Klasės konstruktoriuje this yra privalomas

class KlasesPavadinimas {
  constructor(par1, par2){
    this.par1 = par1;
    this. par2 = par2;
  }
  methods....
}
*/
// kuriame objektų masyvą be klasių
let asmenysBeKlasiu = [
  {
    vardas: 'Ligita',
    amzius: 25,
    turiVaiku: false
  }, {
    vardas: 'Tadas',
    amzius: 29,
    turiVaiku: false
  }
];

// kuriame objektų masyvą su klasėmis 
{
  class Asmuo {
    constructor(a, b, c) {
      this.vardas = a.split(' ')[0];  //nukerpa pavarde
      this.pavarde = a.split(' ')[1]; // nukerpa varda
      this.amzius = b;
      this.turiVaiku = c;
    }
    pasisveikinaSu(vardas) {
      return this.vardas + ' pasisveikina su ' + vardas; //metodas
    }
  }
  let asmenysSuKlasemis = [
    new Asmuo('Lukas Lukauskas', 10, false),
    new Asmuo('Joana Kleinauske', 56, true)
  ];
  console.log(asmenysSuKlasemis)
  console.log(asmenysSuKlasemis[0].pasisveikinaSu('Jonas'))
  // // let zmogus = new Asmuo('Vardas', 99, false);
  // console.log(zmogus);
};

// task


class Ledai {
  constructor(pavadinimas, skonis, kaina) {
    this.pavadinimas = pavadinimas;
    this.skonis = skonis;
    this.kaina = kaina;
  }
  kainosKeitimas(keitimasProcentais) { //kai nori pakeisti kaina (88 eilute), galima rasyti ir kitoki procenta kiek nori sumazint, padidint kaina
    return this.kaina + this.kaina * keitimasProcentais / 100
    //0.60 + 0.60 * -37/100
  }
}

let leduMasyvas = [
  new Ledai('Dadu', "karameliniai", 1.504577),
  new Ledai('Nykštukas', 'vanilinis', 1.207788),
  new Ledai('Tirpuko', 'avietiniai', 0.64988),
  new Ledai('Pols', 'šokoladiniai', 2.3770)
];
console.log(leduMasyvas);

// iškonsolinam atskirus elementus

leduMasyvas.forEach(ledas => console.log(ledas.pavadinimas));

leduMasyvas.forEach(ledas => console.log(ledas.skonis));

leduMasyvas.forEach(ledas => console.log(ledas.kaina.toFixed(2)));

console.groupCollapsed('ledu kaina su 37 proc nuolaida ')
//ledu kaina su 37 proc nuolaida 
leduMasyvas.forEach(ledas => console.log(ledas.kainosKeitimas(-37).toFixed(2)));
console.groupEnd();

console.groupCollapsed('padidinimas per 10ct')

leduMasyvas.forEach(ledas => {
  ledas.kaina += 0.1;
  console.log(ledas.kaina.toFixed(2))
});

console.groupEnd();



//                Užduotys
//    TASK 1


console.groupCollapsed('TASK 1')

//1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" parametrus. +
//1.1) Sukurkite papildomą parametrą "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais"). +
//1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()'). +

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.helloCar = `Šiuo metu vairuoju ${this.name}, mašina buvo pagaminta ${this.year} metais.`;
  }
  //metodas
  age() {
    let dabartineData = new Date();
    dabartineData = dabartineData.getFullYear();
    return dabartineData - this.year;
  }
}
let masinos = [
  new Car('Chevrolet', 2020),
  new Car('BMW', 2018),
  new Car('Nissan', 2014),
  new Car('Mercedes Benz', 2013)
];
masinos.forEach(masina => console.log(masina.age()));

console.groupEnd();




//        TASK 2

console.groupCollapsed('TASK 2')
// 2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" parametrus. +
//   2.1) Sukurkite papildomą parametrą "color" ir priskirkite jam randomly parinktą spalvą. +
//   2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą. +
//   2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą. +

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`; // tas pats - Math.floor(Math.random()*16777215).toString(16)
  }
  area() {
    let staciakampioPlotas = this.width * this.height;
    return staciakampioPlotas;
  }
  perimeter() {
    let staciakampioPerimetras = this.width * 2 + this.height * 2;
    return staciakampioPerimetras;
  }
}
let staciakampiai = [
  new Rectangle(5, 10),
  new Rectangle(2, 8),
  new Rectangle(3, 8)
];

// pasitikrinam ar veikia area ir perimeter
staciakampiai.forEach(staciakampis => console.log(staciakampis.area()));

staciakampiai.forEach(staciakampis => console.log(staciakampis.perimeter()));

console.groupEnd();



//          TASK 3

console.groupCollapsed('TASK 3');

// 3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus. +
//   3.1) Sukurkite metodą "coordinates", kuris grąžina "x" ir "y" reikšmes.(x;y) +
//   3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą). +

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  coordinates() {
    return `(${this.x}, ${this.y})`;
  }
  distance(taskas) {
    return `Atstumas tarp  dviejų taškų yra: ${Math.hypot(this.x - taskas.x, this.y - taskas.y)}`;
    //this.x-taskas.x pirma pakeliami kvadratu abu skaiciai, viena is kito atima, tada sudeda su this.y-taskas.y ir is ju sumos traukia sakni 
  }
}
let taskas1 = new Point(3, 12);
let taskas2 = new Point(5, 9);
let taskas3 = new Point(2, 8);
let taskas4 = new Point(23, 2);
let taskas5 = new Point(1, 21);
console.log(taskas1.distance(taskas2));
console.log(taskas3.distance(taskas5));
// ima taskas3 ir taskas5 ir skaiciuoja atstuma tarp ju su math.hypot (186 eilute)

console.groupEnd();




//          TASK 4

console.groupCollapsed('TASK 4');

//  4) Sukurkite klasę vardu "Rectangle_3D" ir duokite jai "width", "height" ir "depth" parametrus. +
// 4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.+
// 4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.+
// 4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.

class Rectangle_3D {
  constructor(width, height, depth) {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }
  volume() {
    let turis = this.width * this.height * this.depth;
    return turis;
  }
  surfaceArea() {
    let pavirsiausPlotas = 2 * ((this.width * this.height) + (this.width * this.depth) + (this.height * this.depth));
    return pavirsiausPlotas;
    //S=2(ab+ac+bc)
  }
  perimeter() {
    let perimetras = 4 * (this.width + this.height + this.depth);
    return perimetras;
    //Perimeter of a Square, (P) = 4 × Side units.
  }
}
let kvadratas = new Rectangle_3D(5, 2, 4);

// pasitikrinam
console.log(kvadratas.volume());
console.log(kvadratas.surfaceArea());
console.log(kvadratas.perimeter());

console.groupEnd();



//          TASK 5
// 5+) Pabandyti sukurti UI (User Interface (Vartotojo Sąsaja)) 1-4 užduotims ir spausdinti informaciją į ekraną. (Kas nori pasižiūrėkite JS Canvas ir su juo pabandykite atvaizduoti figūras puslapyje(bent jau 2D))
console.groupCollapsed('TASK 5')

document.querySelector("#task1")
  .addEventListener("submit", e => {
    e.preventDefault();
    let modelis = e.target.elements.pavadinimas.value;
    let metai = e.target.elements.pagaminta.value;
    let masina = new Car(modelis, metai);
    document.querySelector("#automobiliai > div").innerHTML += `
    <div>
      <h1> Automobilis:  ${masina.name} <br> Metai: ${masina.year} </h1>
      <p> ${masina.helloCar} </p>
      <p> Jūsų automobilis ${masina.name} yra ${masina.age()} metų amžiaus.</p>
    </div>
  `;
    e.target.elements.pavadinimas.value = null;
    e.target.elements.pagaminta.value = null;
  });


document.querySelector('#task2').addEventListener('submit', e => {
  e.preventDefault();
  let plotis = e.target.elements.width.value;
  let aukstis = e.target.elements.height.value;
  let staciakampis = new Rectangle(plotis, aukstis);
  document.querySelector('#rectangle > div').innerHTML += `
  <div>
  <h2>Plotas: ${staciakampis.area()}</h2>
  <h2>Perimetras:${staciakampis.perimeter()}</h2>
  </div>
  <h2>Stačiakampis pagal pateiktą plotį ir aukštį (px):`;
  
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
     ctx.fillStyle = `${staciakampis.color}`;
  ctx.fillRect(10, 10, `${plotis}`,`${aukstis}` );
 
  e.target.elements.width.value = null;
  e.target.elements.height.value = null;

});

console.groupEnd();





// // Canvas
console.groupCollapsed('Canvas')
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");

// // Create gradient
// var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);

// const canvas = document.getElementById("canvas");
// const ct = canvas.getContext("2d");

// for (let i = 0; i < 6; i++) {
//   for (let j = 0; j < 6; j++) {
//     ct.fillStyle = `rgb(
//         ${Math.floor(255 - 42.5 * i)},
//         ${Math.floor(255 - 42.5 * j)},
//         0)`;
//     ct.fillRect(j * 25, i * 25, 25, 25);
//   }
// }

console.groupEnd();