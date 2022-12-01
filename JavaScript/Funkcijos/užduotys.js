//        TASK 1
{
  console.groupCollapsed('TASK 1')

  function sudetis(nr1, nr2){
    console.log('sudėta')
    return nr1 + nr2;   
  }
  function atimtis(nr1, nr2){
    console.log('atimta') 
    return nr1 - nr2;   
  }
  function daugyba(nr1, nr2){
    console.log('padauginta') 
    return nr1 * nr2;   
  }
  function dalyba(nr1, nr2){
    console.log('dalinta') 
    return nr1 / nr2;   
  }
  function liekana(nr1, nr2){
    console.log('liekana')
    return nr1 % nr2;
  }
  function saknis(nr1, nr2){
    console.log('saknies traukimas')
    return nr1 ** nr2;
  }
  console.groupEnd();

// same galima padaryti su situ
  function sudetis(nr1, nr2){
    console.log('sudetis');
    if(typeof(nr1)=== 'number' && typeof(nr2)==='number'){    //cia sako jei nr1 yra skaicius ir nr2 yra skaicius, tada darom kita veiksma, kur sudesim ir grazinam atsakyma. jei nr1 arba nr2 butu ne skaicius tada grazintu error zinute
      let atsakymas = nr1 + nr2;
      return atsakymas; 
    }else {
      return 'error';
    }
  }
  
}

//          TASK 2
{
  console.groupCollapsed('TASK 2')
//israso visus skaicius
function masyvas(skaiciai){
  for(let element of skaiciai){
    console.log(element);
  }
  
}
console.groupEnd();
}
{
  console.groupCollapsed('TASK 3')
//         TASK 3
//israso visus skaicius nuo galo
function lastToFirst(array){
  for(let i = array.length -1; i >=0; i--){
    console.log(array[i]);
  }
}
console.groupEnd();
}



// for(let i=1; i<10; i++){
//   console.log(i)
// }


//            TASK 4

console.groupCollapsed('TASK 4')

let masyvasStrings1 = ['aš', 'labas', 'aŠ', 'masyvas', 'ūsas', 'ąsa', 'ąžuolas'];
function sortStrings(masyvasStrings1){
  return masyvasStrings1.sort(function(a,b){return a.localeCompare(b)})
}
console.log(sortStrings(masyvasStrings1));

console.groupEnd();


//           TASK 5
{
console.groupCollapsed('TASK 5')

  let masyvasNumbers = [3,46,7,997,864,335,112,445,899,21,111,34,45];
  function sortNumbers(masyvasNumbers){
    return masyvasNumbers.sort(function(a,b){return a-b})
  }
console.log(sortNumbers(masyvasNumbers));

console.groupEnd();
}

//         TASK 6

console.groupCollapsed('TASK 6')
 //su string
// function number(){
//    let number = [5,9];
//   number.splice(0,1,5,6,7,8);
//   return number;
// }

function number (masyvas1, masyvas2){
  for(let i=masyvas1; i <= masyvas2; i++){
    console.log(i)
  }
}
  console.groupEnd();


//      TASK 7

{  
  console.groupCollapsed('TASK 7')

function number2(a,b,c){
   for(let i = b; i <=c; i+=a){
    console.log(i);
  }
}
 //su string
  // function numbers(){
  //    let numbers = [2,5,9];
  //   numbers.splice(0,2,5,7);
  //   return numbers;
  // }
  // console.log(numbers);
  console.groupEnd();
  }

  //     TASK 8 

    console.groupCollapsed('TASK 8')

    function petras(nr1, nr2){
      let atsakymas = nr1.length + nr2.length; 
      return atsakymas; 
  }   console.groupEnd();

//      TASK 9

console.groupCollapsed('TASK 9')


// let abecele = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//     function abecele(masyvas, masyvas1){
//       for(let i = ab; i<masyvas1; i+=2){
//         console.log(i)
//       }
//   }


  
// 

console.groupEnd();

//       TASK 10

console.groupCollapsed('task10')

// function sudetis(nr1, nr2, object){
//   console.log('sudetis');
//   if(typeof(nr1,nr2)=== 'number' && typeof(object)==='sum'){    //cia sako jei nr1 yra skaicius ir nr2 yra skaicius, tada darom kita veiksma, kur sudesim ir grazinam atsakyma. jei nr1 arba nr2 butu ne skaicius tada grazintu error zinute
//     let atsakymas = nr1 / nr2;
//     return atsakymas; 
//   }else {
//     return 'error';
//   }
// }

console.groupEnd();


//        TASK 10

// for (var i = 1; i <= 10; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }