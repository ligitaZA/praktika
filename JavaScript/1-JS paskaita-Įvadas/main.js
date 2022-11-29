console.log("Labas rytas JS'e")

//      Kintamieji
/*
string       - žodinis kintamasis/reikšmė : rašomas kabutėse: '' / "" / ``
number       - skaitinis kintamasis/skaičius
boolean/bool - loginis kintamasis (true/false)

null         - tuščias/ kai turi kintamąjį, bet iš jo ta reikšmė yra paimta
undefiened   - neapibrėžtas/ kintamasis, kuriam nebuvo suteikta reikšmė
NaN          - Not a Number trumpinys(atlikti negalimi veiksmai)


array        - masyvas
object       - objektas

----------------------------------------------------------------------------------------------------------------

Priskyrimas:

nurodai ribas(scope) su

let gali keisti, const negali
var nebenaudojamas

var/let/const - kintamųjų ribų nurodymui


nameOrSmth   - kintamojo vardas

value        - kintamojo reikšmė
*/

let manoVardas0 = "Ligita";
let manoVardas1 = 'Ligita';
let manoVardas2 = `Ligita`;

let manoAmzius0 = 25;
let manoAmzius1 = 25.2;
let manoAmzius2 = 25+0.2;

let vedesIrTuriVaiku0 = false;
let nevedesIrNeturiVaiku1 = true;

// -----------------------------------TASK1------------------------------------------------------------------------

let stringKintamasis1 = "Aš";
let stringKintamasis2 = "Tu";
let stringKintamasis3 = "Jis/Ji";
let stringKintamasis4 = "Jie";
let stringKintamasis5 = "Jos";


let numberKintamasis1 = 30;
let numberKintamasis2 = 35;
let numberKintamasis3 = 40;
let numberKintamasis4 = 45;
let numberKintamasis5 = 50;


let booleanKintamasis1 = true;
let booleanKintamasis2 = false;

//----------------------------------------------------------------------------------------------------------------------

//                Operatoriai
/*
          Arithmetic
+     - sudėtis
-     - atimtis
**    - kėlimas laipsniu (šaknies traukimas)
*     - daugyba
/     - dalyba
%     - liekanos radimas

                Assignment
=     - lygybė   

                Shortcuts
--     - didėjimas vienetu (kazkas = kazkas + 1)
++     - mažejimas vienetu (kazkas = kazkas - 1)
+=     - pridėjimas (kazkas = kazkas + kazkiek)
-=     - atėmimas/mažinimas (kazkas = kazkas - kazkiel)
*=     - dauginimas (kazkas = kazkas * kazkiel)
/=     - dalyba (kazkas = kazkas / kazkiel)
**=    - laipsnio kelimas/ saknies traukimas (kazkas = kazkas ** kazkiel)
%=     - liekanos radimas (kazkas = kazkas % kazkiek)

                Comparison
==     - ar lygu (duomenys)
===    - ar lygu (tipas ir duomenys)
>      - daugiau negu
<      - mažiau negu
>=     - daugiau arba lygu kažkas
<=     - mažiau arba lygu negu kažkas

                Logical
!      - ne(apverčia reikšmę) (NOT)
&&     - ir                   (AND)
||     - arba                 (OR)


                Type
typeof     - tikrina tipą
instanceof - tiktina ?
*/   

//------------------------------------TASK2------------------------------------------------------------------------------
{
console.log('numberKintamasis2+numberKintamasis1', numberKintamasis2+numberKintamasis1);
console.log('numberKintamasis2-numberKintamasis1', numberKintamasis2-numberKintamasis1);
console.log('numberKintamasis2**numberKintamasis1', numberKintamasis2**numberKintamasis1);
console.log('numberKintamasis2/numberKintamasis1', numberKintamasis2/numberKintamasis1);
console.log('numberKintamasis2*numberKintamasis1', numberKintamasis2*numberKintamasis1);
console.log('numberKintamasis2%numberKintamasis1', numberKintamasis2%numberKintamasis1);
// console.log('numberKintamasis2--', --numberKintamasis2);
// console.log('numberKintamasis2++', ++numberKintamasis2);


console.log('stringKintamasis1+stringKintamasis2', stringKintamasis1+stringKintamasis2);
console.log('stringKintamasis1-stringKintamasis2', stringKintamasis1-stringKintamasis2);
console.log('stringKintamasis1**stringKintamasis2', stringKintamasis1**stringKintamasis2);
console.log('stringKintamasis1/stringKintamasis2', stringKintamasis1/stringKintamasis2);
console.log('stringKintamasis1*stringKintamasis2', stringKintamasis1*stringKintamasis2);
console.log('stringKintamasis1%stringKintamasis2', stringKintamasis1%stringKintamasis2);
// console.log('stringKintamasis1--', --stringKintamasis1);
// console.log('stringKintamasis1++', ++stringKintamasis1);           uzkomentuota nes vercia string nan

// naudojant matematinius operatoprius su boolean tipo kintamaisiais, boolean tipo kintamieji yra verčiami į 0 ar 1. false => 0; true => 1.


console.log('booleanKintamasis1+booleanKintamasis2', booleanKintamasis1+booleanKintamasis2);
console.log('booleanKintamasis1-booleanKintamasis2', booleanKintamasis1-booleanKintamasis2);
console.log('booleanKintamasis1+booleanKintamasis1', booleanKintamasis1-booleanKintamasis2);
console.log('booleanKintamasis2+booleanKintamasis2', booleanKintamasis1-booleanKintamasis2);
console.log('booleanKintamasis1**booleanKintamasis2', booleanKintamasis1**booleanKintamasis2);
console.log('booleanKintamasis1/booleanKintamasis2', booleanKintamasis1/booleanKintamasis2);
console.log('booleanKintamasis1*booleanKintamasis2', booleanKintamasis1*booleanKintamasis2);
console.log('booleanKintamasis1%booleanKintamasis2', booleanKintamasis1%booleanKintamasis2);
// console.log('booleanKintamasis1--', --booleanKintamasis1);
// console.log('booleanKintamasis1++', ++booleanKintamasis1);

console.log('stringKintamasis2+numberKintamasis3', stringKintamasis2+numberKintamasis3); //tik šis galimas
console.log('stringKintamasis2-numberKintamasis3', stringKintamasis2-numberKintamasis3);
console.log('stringKintamasis2**numberKintamasis3', stringKintamasis2**numberKintamasis3);
console.log('stringKintamasis2/numberKintamasis3', stringKintamasis2/numberKintamasis3);
console.log('stringKintamasis2*numberKintamasis3', stringKintamasis2*numberKintamasis3);
console.log('stringKintamasis2%numberKintamasis3', stringKintamasis2%numberKintamasis3);


console.log('numberKintamasis2+stringKintamasis1', numberKintamasis2+stringKintamasis1); //tik šis galimas
console.log('numberKintamasis2-stringKintamasis1', numberKintamasis2-stringKintamasis1);
console.log('numberKintamasis2**stringKintamasis1', numberKintamasis2**stringKintamasis1);
console.log('numberKintamasis2/stringKintamasis1', numberKintamasis2/stringKintamasis1);
console.log('numberKintamasis2*stringKintamasis1', numberKintamasis2*stringKintamasis1);
console.log('numberKintamasis2%stringKintamasis1', numberKintamasis2%stringKintamasis1);


console.log('numberKintamasis3+booleanKintamasis2', numberKintamasis3+booleanKintamasis2);
console.log('stringKintamasis3+booleanKintamasis1', stringKintamasis3+booleanKintamasis1);
}


//------------------------------------TASK3------------------------------------------------------------------------------
{
 console.log('--numberKintamasis2', --numberKintamasis2);
console.log('numberKintamasis1+=numberKintamasis2', numberKintamasis1+=numberKintamasis2)
console.log('numberKintamasis4-=numberKintamasis1', numberKintamasis4-=numberKintamasis1);
console.log('numberKintamasis5*=numberKintamasis2', numberKintamasis5*=numberKintamasis2);
console.log('numberKintamasis3/=numberKintamasis2', numberKintamasis3/=numberKintamasis2);
console.log('numberKintamasis4**=numberKintamasis1', numberKintamasis4**=numberKintamasis1);
console.log('numberKintamasis5%=numberKintamasis3', numberKintamasis5%=numberKintamasis3); 
}

//------------------------------------TASK4------------------------------------------------------------------------------
{
  console.log('numberKintamasis1==numberKintamasis1', numberKintamasis1==numberKintamasis1);
  console.log('numberKintamasis2===numberKintamasis3', numberKintamasis2===numberKintamasis3);
  console.log('numberKintamasis5>numberKintamasis2', numberKintamasis5>numberKintamasis2);
  console.log('numberKintamasis3<numberKintamasis1', numberKintamasis3<numberKintamasis1);
  console.log('numberKintamasis5>=numberKintamasis1', numberKintamasis5>=numberKintamasis1);
  console.log('numberKintamasis4<=numberKintamasis5', numberKintamasis4<=numberKintamasis5);
}

//                     Sąlygos

/*

          If Else
if         - pradinė sąlyga jeigu
else if    - papildoma sąlyga, kuri tikrina tik jeigu aukščiau esanti/čios sąlyga/os grąžino false
else       - vykdomas jeigu visos aukščiau esančios sąlygos grąžino false
                Nesting
Sąlygos viduje rašoma kita sąlygaa

*/
{
  let amzius = 20;
if(amzius >=18){
  console.log('Esi pilnametis.');
  if(amzius > 90 && amzius < 130){
  console.log('Esi pensininkas.');
  }else if(amzius <90){
    console.log('Esi darbingo amžiaus.');
  } else {
    console.log('Kaip tu dar gyvas?')
  }
} else if(amzius < 7){
  console.log('Esi ikimokyklinio amžiaus.');
} else {
  console.log('Esi mokyklinukas.')
}
}


//-------------------------------TASK5----------------------------------
{
let arTuriTeises = true;
let arTuriAutomobili = true;
let blaivas = true;
if(arTuriTeises === true){
  console.log('Teises turi.');
  if(arTuriAutomobili = false && blaivas === false){
    console.log('Automobilį turi.');
  } else if(arTuriAutomobili === true) {
    console.log('Automobilio neturi.');
  }else {
    console.log('Nesi blaivas, nera ko vairuot.');
  }
} else {
  console.log('Neturi.');
} 
}

//-----------------------------TASK6-------------------------------------

// {
//  let arTuriTeises = true;
//  let arTuriAutomobili = true;

//  if(arTuriTeises === true){
//    console.log('Teises turi.');
//    if(arTuriAutomobili = false){
//      console.log('Automobilį turi.');
//    } else {
//      console.log('Automobilio neturi.');
//    }
//  } else {
//    console.log('Neturi.');
//  } 
//  }


 //                            AND IR OR
/*
    Naudojant && and tikrinama ar abiejose pusėse yra tiesa. Jei bent vienoje yra melas, grąžina melą.
    Jeigu kairėje pusėje yra melas - dešinės pusės net netikrina.
    Naudojant || or tikrinama ar bent vienoje pusėje yra tiesa. Jei bent vienoje pusėje yra tiesa - gražina tiesą. 
    Jei kairėje pusėje yra tiesa - dešinės pusės net netikrina/nevykdo.

*/


if(5 == '5'  && ('5') == typeof(5)) {
  console.log('Lygu.');
}else{
  console.log('Nelygu.');
}
if(true || false){
  console.log('tiesa');
} else {
  console.log('melas');
}

//                        Truthy Falsy
/*
 truthy -  true  | not 0 number | 'string'          | [array]/ masyvas   |  {objektas}   |    funkcija () => {}
 falsy  -  false | 0            | '' empty strig    | undefinied         |  null         |    NaN

*/

let kazkoksKintamasis = '';

if(kazkoksKintamasis){
  console.log('irase');   //nes truthy
} else{
  console.log('neirase');  //nes falsy
}

//                       Switch
{
let megstamiausiaSpalva = "zalia";

switch(megstamiausiaSpalva) {
  case 'melyna': 
  case 'raudona':
    console.log('Tu megsti ryskias spalvas.');
    break;
  case 'zalia':
  case 'pilka':
    console.log('Tu megsti zemiskas spalvas.');
    break;
}


// let miestas = prompt ('Iš kurio miesto esate?');

// switch(miestas){
//   case "Kaunas":
//     console.log("Kaunas Lietuvos širdis.")
//     break;
//   case "Vilnius":
//     console.log("Vilnius sostinė.")
//     break;
//   case "Klaipėda":
//     console.log('Klaipėda turi uostą.')
//     break;
//     default:
//       window.alert('Nėra tokio miesto.')
// }  
}

//-------------------- TASK 8 ------------------------


  
window.alert('LABAS!');
let tavoMiestas = prompt('Iš kokio Tu miesto?');

if(tavoMiestas === "Klaipėda"){
  window.alert("Tu gyveni pajūryje.");
}else if (tavoMiestas === "Vilnius"){
  window.alert("Tu gyveni Lietuvos sostinėje.");
}else {
  window.alert("Man tavo miestas labai gražus.");
}


//-------------------------------TASK 9--------------------------------


let menuo = prompt('Koks dabar mėnuo?');

switch(menuo){
  case 'gruodis':
  case 'sausis':
  case 'vasaris':
    window.alert('Dabar yra žiema.')
    break;
  
  case 'kovas':
  case 'balandis':
  case 'gegužė':
    window.alert('Dabar yra pavasaris.')
    break;
  
  case 'birželis':
  case 'liepa':
  case 'rugpjūtis':
    window.alert('Dabar yra vasara.')
    break;
  
  case 'rugsėjis':
  case 'spalis':
  case 'lapkritis':
    window.alert('Dabar yra žiema.')
    break;
}


//--------------------------------TASK 10---------------------------------------

const vardas = prompt('Koks tavo vardas?');

if(vardas.endsWith("as")){
  window
}







// let megstamiausiaSpalva = "zalia";

// switch(megstamiausiaSpalva) {
//   case 'melyna': 
//   case 'raudona':
//     console.log('Tu megsti ryskias spalvas.');
//     break;
//   case 'zalia':
//   case 'pilka':
//     console.log('Tu megsti zemiskas spalvas.');
//     break;
// }