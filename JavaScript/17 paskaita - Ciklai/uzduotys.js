
//              TASK 1
{ 
  console.groupCollapsed('TASK 1')
  let medis = "Eglė";
  let medis1 = "Pušis";
  let medis2 = "Beržas";
  let medis3 = "Alksnis";
  let medis4 = "Uosis";

  let skaicius = 20;
  let skaicius1 = 25;
  let skaicius2 = 30;
  let skaicius3 = 35;
  let skaicius4 = 40;

  let bool = true;
  let bool1 = false;
  let bool2 = true;

 console.groupEnd()
}
//              TASK 2

{ 
  console.groupCollapsed('TASK 2')
  // masyvas
  {
    let medziai = ["Liepa", "Eglė", "Pušis", "Maumedis", "Beržas", "Alksnis"];
    console.log(medziai[2]);
  }
  // masyvas masyve
  {
    let medziai1 = ["Liepa", "Eglė", ["bla", "bla1", "bla2", "bla3"], "Pušis", "Maumedis", "Beržas", "Alksnis"];
    console.log(medziai1[1]);
  }
  // objektas masyve
  {
    let medziai2 = ["Pušis", "Maumedis", "Beržas", "Alksnis",
      {
        pavadinimas: "Liepa",
        auga: "Miške",
        dydis: "didelis",
        medziai: "lapuočių",
      }
    ];
    console.log(medziai2[2]);
  }
  // objektas
  {
    let miskas = {
      miestas: 'Vilnius',
      dydis: "didelis",
      
      namuJame: 15,
      gyvunai: "nėra",
      parkas: true,
    }
    console.log(miskas);
  }
  // objektas objekte
  {
    let miskas1 = {
      vieta:
      {
        miestas: 'Kauno rajonas',
        salis: 'Lietuva',
        zemynas: 'Europa'
      },
      dydis: "mažas",
      medziai: "lapuočių",
      namuJame: 22,
      gyvunai: "nėra",
      parkas: true,
    }
    console.log(miskas1);
  }
  // masyvas objekte
  {
    let miskas2 = {
      miestas: ["Kaunas", "Vilnius", "Klaipėda", "Nida"],
      dydis: "mažas",
      medziai: "lapuočiai",
      namuJame: 18,
      gyvunai: "nėra",
      parkas: true
    }
    console.log(miskas2);
  }
  console.groupEnd();
}
//              TASK 3
{ 
  console.groupCollapsed('TASK 3')
  let miskas = {
    miestas: 'Vilnius',
    dydis: "didelis",
    medziai: "lapuočių",
    namuJame: 15,
    gyvunai: "stirnos",
    parkas: true,
  }
  console.log(miskas.miestas,  miskas.dydis);
  console.log(miskas.gyvunai, miskas.medziai);
{
    let medziai = ["Liepa", "Eglė", "Pušis", "Maumedis", "Beržas", "Alksnis"];
    console.log(medziai[2], medziai[3]);
    console.log(medziai[4], medziai[0]);
}

{
  let medziai1 = ["Liepa", "Eglė", ["bla", "bla1", "bla2", "bla3"], "Pušis", "Maumedis", "Beržas", "Alksnis"];
  console.log(medziai1[1], medziai1[2][1]);
  console.log(medziai1[3],  medziai1[2][2]);
  console.log(medziai1[4], medziai1[2][3]);
}

{
  let miskas2 = {
    miestas: ["Kaunas", "Vilnius", "Klaipėda", "Nida"],
    dydis: "mažas",
    medziai: "lapuočiai",
    namuJame: 18,
    gyvunai: "nėra",
    parkas: true
  }
  console.log(miskas2.miestas[1]);
  console.log(miskas2.miestas[3]);
  console.log(miskas2.miestas[0]);
}

let medziai2 = ["Pušis", "Maumedis", "Beržas", "Alksnis",
      {
        pavadinimas: "Liepa",
        auga: "Miške",
        dydis: "didelis",
        medziai: "lapuočių",
      }
    ];
    console.log(medziai2[0], medziai2[1], medziai2[3].dydis);  // ????


    let miskas1 = {
      vieta:
      {
        miestas: 'Kauno rajonas',
        salis: 'Lietuva',
        zemynas: 'Europa'
      },
      dydis: "mažas",
      medziai: "lapuočių",
      namuJame: 22,
      gyvunai: "nėra",
      parkas: true,
    }
    console.log(miskas1.vieta.salis);
    console.log(miskas1.vieta.zemynas);
    console.log(miskas1.vieta.miestas);
    
console.groupEnd();
}

//              TASK 4
{ 
  console.groupCollapsed('TASK 4')
  //      1
  let miskas = {
    miestas: 'Vilnius',
    dydis: "didelis",
    medziai: "lapuočių",
    namuJame: 15,
    gyvunai: "stirnos",
    parkas: true,
  }
  if (miskas.namuJame > 1) {
    console.log("daugiau")
  } else {
    console.log("mažiau")
  }

  let medziai = ["Liepa", "Eglė", "Pušis", "Maumedis", "Beržas", "Alksnis"];

  if (medziai[2] = medziai[3]) {
    console.log("Lapuotis")
  } else {
    console.log("Spygliuotis")
  }

  //       2
    //masyvas masyve 
    {
      let medziai1 = ["Liepa", "Eglė", ["bla", "bla1", "bla2", "bla3"], "Pušis", "Maumedis", "Beržas", "Alksnis"];
      if (medziai1[1][2] = medziai1[1]){
        console.log('true')
      } else {
        console.log('false')
      }
      if (medziai1[2] == medziai1[3]){
        console.log('true')
      } else {
        console.log('false')
      }
      if (medziai1[3] === medziai1[5]){
        console.log('true')
      } else {
        console.log('false')
      }

      let miskas2 = {
        miestas: ["Kaunas", "Vilnius", "Klaipėda", "Nida"],
        dydis: "mažas",
        medziai: "lapuočiai",
        namuJame: 18,
        gyvunai: "nėra",
        parkas: true
      }
      if (miskas2.miestas[2] === miskas2.miestas[2]){
        console.log('true')
      } else {
        console.log('false')
      }
      if (miskas2.miestas[3] === miskas2.namuJame){
        console.log('true')
      } else {
        console.log('false')
      if (miskas2.gyvunai === miskas2.parkas){
        console.log('true')
      } else {
        console.log('false')
    }
      if (miskas2 = 1){
        console.log('true')
      } else {
        console.log('false')
    }
  }

  {
    let miskas1 = {
      vieta:
      {
        miestas: 'Kauno rajonas',
        salis: 'Lietuva',
        zemynas: 'Europa'
      },
      dydis: "mažas",
      medziai: "lapuočių",
      namuJame: 22,
      gyvunai: "nėra",
      parkas: true,
    }
    if (miskas1.namuJame < 1){
      console.log('true')
    } else {
      console.log('false')
  }
    if (miskas1.parkas === miskas1.gyvunai){
      console.log('true')
    } else {
      console.log('false')
  }
    if (miskas1.vieta.salis = 1){
      console.log('true')
    } else {
      console.log('false')
  }
}

  let medziai2 = ["Pušis", "Maumedis", "Beržas", "Alksnis",
      {
        pavadinimas: "Liepa",
        auga: "Miške",
        dydis: "didelis",
        medziai: "lapuočių",
      }
    ];

    if (medziai2[1] === medziai2.medziai){
      console.log('true')
    } else {
      console.log('false')
  }
    if (medziai2.auga < medziai2[1]){
      console.log('true')
    } else {
      console.log('false')
  }
    if (medziai2[1] = medziai2.dydis){
      console.log('true')
    } else {
      console.log('false')
  }
}

let medziai2 = ["Pušis", "Maumedis", "Beržas", "Alksnis",
      {
        pavadinimas: "Liepa",
        auga: "Miške",
        dydis: "didelis",
        medziai: "lapuočių",
      }
    ];
    let miskas1 = {
      vieta:
      {
        miestas: 'Kauno rajonas',
        salis: 'Lietuva',
        zemynas: 'Europa'
      },
      dydis: "mažas",
      medziai: "lapuočių",
      namuJame: 22,
      gyvunai: "nėra",
      parkas: true,
    }
    if(medziai2[1] === miskas1.vieta.miestas){
      console.log('true')
    }else{
      console.log('nop')
    }
  console.groupEnd();
}
  //            TASK 5
{
  console.groupCollapsed('TASK 5')

    let zmogus2 = {
      vardas: 'Petras',
      pavarde: 'Petrauskas',
      amzius: 30,
      lytis: 'Vyras'
    }
    if (zmogus2.lytis === 'Vyras') {
      console.log('Vyras');
    } else {
      console.log('Moteris');
    }
  
  console.groupEnd();
}

//              TASK 6
{ 
  console.groupCollapsed('TASK 6')


  var masyvas = [];
for(let i = 0; i < 50; i++){
  masyvas.push(Math.floor(Math.random()*101));
}
console.log(masyvas);
console.groupEnd();
}

//              TASK 7

{
  console.groupCollapsed('TASK 7')

for(let i = 0; i < masyvas.length; i+=3){
  console.log(masyvas[i]);
}
console.groupEnd();
}

//              TASK 8

{
  console.groupCollapsed('TASK 8')

for(let i = masyvas.length - 1; i >= 0  ; i-=2){
 console.log(masyvas[i]);
}

console.groupEnd();
}

//              TASK 9
{
  console.groupCollapsed('TASK 9')

  for(let i = 0; i <= masyvas.length - 1; i++){
    if (masyvas[i] > 54){
      console.log(masyvas[i]);
    }
    }

console.groupEnd();
}

//             TASK 10
//10) Parašyti ciklą, kuris iš masyvo išspausdintų tik lyginius/nelyginius skaičius. (2ciklai)
{
  console.groupCollapsed('TASK 10')

  for(let i = 0; i <= masyvas.length - 1; i++){
    if(masyvas[i] % 2 == 0){
      console.log(masyvas[i] + ' lyginis')
    }else{
      console.log(masyvas[i] + ' nelyginis')
    }
  }

for (var i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  }else {
    console.log('number')
  }
}
}