//               Ciklai
/*
do while - naudojamas kad bent viena syki butu paleistas ciklas, pradzioj padaro, poto tikrina
for in - suka ciklą per objektą
for of - suka ciklą per masyvą

array iteration methods
*/
// do while
{
  console.groupCollapsed('do while')
  let i = 1;
// while(i<10){
//   console.log('veiksmai')
//   i++;
// }

do {
  console.log('veiksmai');
  i++;
}while(i<10);

console.groupEnd();
}

 // for in

{
  console.groupCollapsed('for in')

  let objektas = {a:1, b:2, c:3, d:4, e:5};
  for(let raktas in objektas){
    console.log(raktas, ":", objektas[raktas])
  }
  console.groupEnd();
}

// for of

{
  console.groupCollapsed('for of')
  let masyvas = [5,6,7,8,9,false,true,'hello',46,485,45]
  // for(let i = 0; i < masyvas.length; i++){
   // typeof(masyvas[i]) === 'number' ? console.log(element) : null;
  //   console.log(masyvas[i]);
  // }
  for(let element of masyvas){
    typeof(element) === 'number' ? console.log(element) : null; //jei reikia iteruoti per masyva nuo pradzios iki galo siuo atveju paima skaicius is masyvo, kitu atveju null.bet neleidzia tikrint nuo gali, paimt tam tikrus elementus
  }
  console.groupEnd();
}

// for each

{
  console.groupCollapsed('for each')

  let masyvas = [5,6,7,8,9,false,true,'hello',46,485,45];
  masyvas.forEach(element => typeof(element) === 'number' ? console.log(element) : null); // vietoj ? ternary galima naudoti && tada nereiketu null

  console.groupEnd();
}


//                 Funkcijos
// Funkcija yra kažkokia veiksmų seka, kuri yra vykdoma tik tuomet, kai į tą funkciją yra kreipiamasi.
// Parametrai/argumentai - tai yra duomenys perduodami funkcijai jos iškvietimo metu, su kuriais funkcijos viduje bus atliekami kažkokie veiksmai.parametrai rasomi skliausteliuose po fnkcijos pavadinimo. tai gali buti array, kaip pavyzdziuose, tada consoleje sita funkcija kviesim rasydami pvz pavadinimas([array reiksmes, gali but skaiciai, string, bool, nesvarbu])
// Return - funkcija gali kažką gražinti. Funcijos veiksmai vyksta kol pasiekiamas return'as
{
  console.groupCollapsed('Funkcijos');

  function hello(vardas){
    console.log("Hello " + vardas)
  }



function sudetis(nr1, nr2){
  console.log('why not') //pries return galima daryti veiksmus, uz nee
  return nr1 + nr2;   //nes atsakyma jau grazinome, nebent jei yra if
}


function sudetis(nr1, nr2){
  console.log('why not');
  if(typeof(nr1)=== 'number' && typeof(nr2)==='number'){
    let atsakymas = nr1 + nr2;
    return atsakymas; 
  }else {
    return 'error';
  }
}
  console.groupEnd();
}
{

  function kiekStringMasyve(array){
    for(let i = 0; i < array.length ; i++){
      if(typeof(array[i])  === 'string'){
        kiek++
      }
    }
    return kiek;
  }

}
//           Masyvu metodai
/*
pop() - isima is masyvo galo
push() -  prideda prie masyvo galo,modifikuoja
shift()  -  isima is masyvo pradzios, modifikuoja
unshift() - prideda prie masyvvo pradzios, modifikuoja

reverse() - apsuka masyvą, jį modifikuoja
slice(nr1,nr2) - atkerpa masyvo, bet jo nemodifikuoja. paima nuo nr1 (imtinai) iki nr2 (neimtinai) masyvo elementus
splice(nr1, nr2, nr3, n4, nr5...) - nuo nr1 trina nr2 kieki elementu ir nr1 vietoje iterpa nr3, nr4...
arr1.concat (arr2,arr3...) - prie arr1 prijungia arr2 arr3..... nemodifikuoja, grazina nauja
sort() - isrikiuoja masyva abeceles tvarka

sujungtas.sort(function(a,b){return a-b}); rikiuoja teisingai skaicius 

zodziuMasyvas.sort(function(a,b){return a.localeCompare(b)});     rikiuoja teisingai zodzius
*/

  let masyvas1 = [1,2,3,4,5,6,7,8,9];
  let gabaliukas = masyvas1.slice(3, 6);
  let iskirptas = masyvas1[3];
  masyvas1.splice(3, 2, 0, 0); //nuo 4 pozicijos pasalino 2 elementus ir pridejo 0 0
  let sujungtas = masyvas1.concat(['aš', 'labas', 'aŠ', 'masyvas', 'ūsas', 'ąsa'],[false,0,'neup', 20,90, 1100,367]);
  
  sujungtas.sort(function(a,b){return a-b}); //kad issirikiuotu skaiciai kaip reikia. cia sako kad jei gauni skaiciu atimk is jo ir apsuka kaip reikia.ima po du elementus vienas a kitas b ir pastato didesni toliau

  let zodziuMasyvas = ['aš', 'labas', 'aŠ', 'masyvas', 'ūsas', 'ąsa'];
  zodziuMasyvas.sort(function(a,b){return a.localeCompare(b)}); // tikrina per simboliu biblioteka. neveikia kai masyve yra skaiciu


  