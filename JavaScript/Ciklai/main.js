//                Kintamieji

/* 
  Objektas   -   Object   {raktas: reikšmė, raktas1: reikšmė, .......}
  Masyvas    -   Array    [reiksme, reiksme, reiksme, .... ]

  Tiek objektas, tiek masyvas yra konteineriniai kintamieji. Tai reiškia, kad jų viduje galima talpinti keletą reikšmių (gali būti skirtingų kintamųjų tipų).
  */

//               Objects

//     eiliškumas nesvarbus

{
  console.groupCollapsed('Objektai')
  // let vardas = "ligita"
  // let pavarde = "zaicevaite"
  // let amzius = 25;
  // let vedes = false;

  // Objektas objekte :

  let zmogus = {
    vardas: "ligita",
    pavarde: "zaicevaite",
    amzius: 25,
    vedes: false,
    gyvenamojiVieta: {
      miestas: 'Šilutė',
      salis: 'Lietuva',
      zemynas: 'Europa',
      planeta: 'Žemė'
    }
  };
  console.log(zmogus.pavarde);
  console.log(zmogus.vardas);
  console.log(zmogus.amzius);
  console.log(zmogus.gyvenamojiVieta.planeta);


  let zmogus1 = {
    vardas: "petras",
    pavarde: "petrauskas",
    amzius: 30,
    vedes: false
  }

  console.log(zmogus1.vedes);
  console.log(zmogus1.pavarde);
  zmogus1.vardas = "Jonas";     // pakeičiama reikšmė
  console.log(zmogus1.vardas);

  zmogus1.ugis = 190;   //pridedama reikšmė  į objektą, kreipiantis į jį ir negrižtant į pradinį kodą

  console.log(zmogus1.ugis);
 console.groupEnd();
}


//        Masyvai 
// kai yra iŠ eilės kaip mėn, geriau kurti masyvą. eilės tvarka yra labai svarbi

// masyvas.push - prideda nauja reiksme prie masyvo GALO su array methods
// masyvas.unshift - prideda nauja reiksme i masyvo PRADZIA
// masyvas.pop()  -  isima paskutini masyvo elementa, jo neistrina. galima priskirti ji kitam 
// masyvas.shift() - isima pirma masyvo elementa, kaip ir pop, duomeni talpina savyje. galima priskirti kazkam

// masyvas.length  -  paima reiksme jai nieko nepadarant, tiesiog parodo kad yra

{
  console.groupCollapsed('Masyvai')
  // let menesis1 = "Sausis";
  // let menesis2 = "Vasaris";
  // let menesis3 = "Kovas";

  //...........
  // let menesiai = {
  //   pirmas : "sausis",
  //   antras : "vasaris",
  //   trecias : "kovas",
  //   ketvirtas : "balandis"
  // }
  let menesiai = ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"];
  console.log(menesiai[10]);  //    [array] skaičiuoja nuo 0


  let masyvas = [34, 738, [858, 678, true, false], "Ligita", "Tadas", "Boo", "Mažius"];
  console.log(masyvas[2][0]);   //    <=  kreipiesi į masyvo masyvą
  masyvas[1] = 'pakeista reiksme';     //  pakeicia masyvo reiksme
  masyvas.push('nauja reiksme');    //   prideda nauja reiksme prie masyvo galo su array methods
  masyvas.unshift('unshift?');    // prideda nauja reiksme i masyvo pradzia
  console.log(masyvas);

  let masyvoMetoduBandymai = masyvas.pop();  //    nepriima reiksmiu i skliaustelius, isima paskutini masyvo elementa. dabar mes ji priskyrem i masyvoMetodyBandymai, nes nepriskiriant ta info dings

  masyvoMetoduBandymai = masyvas.shift(); // is pradzios isima
  masyvoMetoduBandymai = masyvas.length;   //  masyvo ilgio duomuo (number)

  console.log(masyvas);
  console.log(masyvas[0]);   //paima pirma elementa
  console.log(masyvas[masyvas.length - 1]);   //  paima paskutini elementa
  console.log(masyvas[masyvas.length - 3]);
  console.groupEnd();
}




//            Masyvai ir Objektai

{ 
  console.groupCollapsed('Masyvai ir Objektai')
  let mixed1 = {
    vardas: "Ligita",
    amzius: 25,
    vedes: false,
    gyvenamojiVieta: {
      miestas: "Šilutė",
      salis: "Lietuva"
    },
    pomegiai: ["Serialai", "Kelionės", "Knygos", "Vaikščiojimas", "Miegas"]
  }           // 0            1          2
  console.log(mixed1.vardas + " turi " + mixed1.pomegiai.length + " pomėgius.");
  console.log("Vienas iš " + mixed1.vardas + " pomėgių yra " + mixed1.pomegiai[Math.floor(Math.random() * mixed1.pomegiai.length)] + ".");
  // console.log(Math.floor(Math.random()*mixed1.pomegiai.length))



  let mixed2 = [
    {
      vardas: "Ligita",
      amzius: 25
    },
    {
      vardas: "Petras",
      amzius: 30
    },
    {
      vardas: "Juozas",
      amzius: 40
    }
  ];
  console.log(mixed2);
  console.groupEnd();
}


//               Sąlygos

/*
If Else
Switch
Ternary (max trumpintas if else) 
    sąlyga ? jeiguTiesa : jeiguMelas    -    if else
*/
//          Ternary
{
  console.groupCollapsed('Sąlygos')
  if (10 > 5) {
    console.log("tiesa");
  } else {
    console.log("netiesa");
  }

  10 < 5 ? console.log("tiesa") : console.log("melas")   //tas pats užrašymas kaip if else 

  let number = 70;
  if (number > 20) {
    console.log('20 -> infinity')
  } else if (number <= 0) {
    console.log('-infinity -> 0')
  } else {
    console.log("0 -> 20")
  }

  number > 20 ? console.log('20 -> infinity') :
    number <= 0 ? console.log('-infinity -> 0') : console.log("0 -> 20");
    console.groupEnd();
}

//           Ciklai
/*
    for
    while

    for in
    for of
    do while

    Ciklai - Kartojami nurodyti veiksmai kol yra tenkinama pateikta sąlyga.
*/
  //        for ciklas
  // for(iteratoriaus, salyga(suIteratoriumu), iteratoriausKitimas){
  // }
  // for naudojamas kai gali apskaiciuoti arba zinai kiek kartosis ciklas

  // console.log(1);
  // console.log(2);
  // console.log(3);
  // console.log(4);
  // console.log(5);
  // console.log(6);
  // console.log(7);
  // console.log(8);
  // console.log(9);
  // console.log(10);
{
  console.groupCollapsed('Ciklai - for')
for(let i = 0; i < 9; i++){
  console.log(i+1)
}
let masyvas4 = [9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9];
console.log(masyvas4);
for(let i = 0; i < masyvas4.length; i++){
  console.log(masyvas4[i]);
}
console.log(masyvas4);
  console.groupEnd();
}


//            while ciklas

/*
while naudojamas tuomet, kai negali apskaiciuoti, zinoti, kiek kartu reikes vykdyti cikla
 while(salyga){
  //veiksmai
 }
  */
 
{
  console.groupCollapsed('Ciklai - while')
  let masyvas4 = [9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]
    while(masyvas4.length){
    console.log(masyvas4.shift())
  }
console.log(masyvas4);
    
let i = 0;
while (i <=10){
  console.log(i);
  i++;
}
  console.groupEnd();
}
