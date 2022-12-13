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
  },{
    vardas: 'Tadas',
    amzius: 29,
    turiVaiku: false
  }
];

// kuriame objektų masyvą su klasėmis 
{
class Asmuo{
  constructor(a,b,c){
    this.vardas = a.split(' ')[0];  //nukerpa pavarde
    this.pavarde = a.split(' ')[1]; // nukerpa varda
    this.amzius = b;
    this.turiVaiku = c;
  }
  pasisveikinaSu(vardas){
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
  constructor(pavadinimas,skonis,kaina){
    this.pavadinimas = pavadinimas;
    this.skonis = skonis;
    this.kaina = kaina;
  }
  kainosKeitimas(keitimasProcentais){ //kai nori pakeisti kaina (88 eilute), galima rasyti ir kitoki procenta kiek nori sumazint, padidint kaina
    return this.kaina + this.kaina * keitimasProcentais/100
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
  constructor(name, year){
    this.name = name;
    this.year = year;
    this.helloCar = `Labas, šiuo metu vairuoju ' + ${this.name} mašina buvo pagaminta ${this.year} metais.`;
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
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
  }
  area (){
    let staciakampioPlotas = this.width* this.height;
    return staciakampioPlotas;
  }
  perimeter (){
    let staciakampioPerimetras =  this.width*2 + this.height*2;
    return staciakampioPerimetras;
  }
}
let staciakampiai =[
  new Rectangle(5,10),
  new Rectangle(2,8),
  new Rectangle(3,8)
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
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  coordinates(){
    return `(${this.x}, ${this.y})`;
  }
  distance(taskas){
    return `Atstumas tarp  dviejų taškų yra: ${Math.hypot(this.x-taskas.x,this.y-taskas.y)}`;
    //this.x-taskas.x pirma pakeliami kvadratu abu skaiciai, viena is kito atima, tada sudeda su this.y-taskas.y ir is ju sumos traukia sakni 
  }
}
let taskas1 = new Point (3,12);
let taskas2 = new Point (5,9);
let taskas3 = new Point (2,8);
let taskas4 = new Point (23,2);
let taskas5 = new Point (1,21);
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

  class Rectangle_3D{
    constructor(width, height, depth){
      this.width = width;
      this.height = height;
      this.depth = depth;
    }
    volume(){
      let turis = this.width*this.height*this.depth;
      return turis;
    }
    surfaceArea(){
      let pavirsiausPlotas = 2*((this.width*this.height)+(this.width*this.depth)+(this.height*this.depth));
      return pavirsiausPlotas;
      //S=2(ab+ac+bc)
    }
    perimeter(){
      let perimetras = 4*(this.width+this.height+this.depth);
      return perimetras;
      //Perimeter of a Square, (P) = 4 × Side units.
    }
  }
    let kvadratas = new Rectangle_3D(2,2,4);

  // pasitikrinam
    console.log(kvadratas.volume());
    console.log(kvadratas.surfaceArea());
    console.log(kvadratas.perimeter());

console.groupEnd();