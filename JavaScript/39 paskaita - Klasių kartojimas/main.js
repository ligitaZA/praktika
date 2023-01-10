// Pateikiamas 9 aukštų daugiabučio parduodamų butų sąrašas.
// Kiekviename laiptinės aukšte yra po 3 butus.
// Daugiabučio laiptinių skaičius yra mažesnis, nei 20.

// Duomenys tokie: buto numeris, bendras plotas, kambarių skaičius, pardavimo kaina, telefono numeris. Duomenys talpinami faile 'duomenys.json'. (reiktų bent 10 butų)

// Suraskite butus, kurie turi nurodytą kambarių skaičių, yra nurodytame aukšte ir kurių kaina neviršija nurodytos kainos, ir juos išveskite į ekraną/konsolę/failą 'atsakymas.json'.

// Aukšto numeris nurodomas intervalu [nuo, iki]. Aukšto numeris išskaičiuojamas iš buto numerio. Butų numeriai yra iš aibės [1, laiptinių skaičius daugintas iš 27].

// Pvz.:
//   Duomenys:
//     butoNumeris:5, bendrasPlotas:54.2, kambariuSkaicius:3, pardavimoKaina:67000, telefonoNumeris:866666666
//     butoNumeris:21, bendrasPlotas:46, kambariuSkaicius:2, pardavimoKaina:54000, telefonoNumeris:867776666
//     butoNumeris:50, bendrasPlotas:78.9, kambariuSkaicius:4, pardavimoKaina:98500, telefonoNumeris:866667777
//   Nurodymai:
//     kambariuSkaicius:2, aukstoNumerisNuo:5, aukstoNumerisIki:7, kainaIki:99999
//   Atsakymas:
//     butoNumeris:21, bendrasPlotas:46, kambariuSkaicius:2, pardavimoKaina:54000, telefonoNumeris:867776666
      
      const butoNumeris = 55;
      const aukstoNumeris = butoNumeris  % 27 === 0 ? 9 : Math.ceil((butoNumeris % 27)/3);
      console.log(aukstoNumeris)



// 1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" atributus.
// 1.1) Sukurkite papildomą atributą "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais").
// 1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()').

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

// 2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" atributus.
// 2.1) Sukurkite papildomą atributą "color" ir priskirkite jam randomly parinktą spalvą.
// 2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
// 2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.

class Rectangle {
  constructor(width,height){
    this.width = width;
    this.height = height;
    this.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`; 
  }
  area(){
    let plotas = this.width * this.height;
    return plotas;
  }
  perimeter (){
    let perimetras = this.width * 2 + this.height * 2;
    return perimetras;
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

// 3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" atributus.
// 3.1) Sukurkite papildomą atributą "coordinates" ir priskirkite jam "x" ir "y" reikšmes.
// 3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).

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

// 4) Sukurkite klasę vardu "3D_Rectangle" ir duokite jai "width", "height" ir "depth" atributus.
// 4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.
// 4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.
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

