//                  Async

/*  
  1) async ir await
  2) try catch finally
  3) Promise (resolve, reject)
  4) then catch finally
*/

//  Async Function
/*
  Rašant kodą sinchroniškai kartais prireikia luktelti atsakymų iš prieštai buvusių funkcijų.
  Tam, kad sulauktume atsakymo, reikia uždelsti kodą. Tai galima padaryti su setTimeout();
  Persistengiant su setTimeout'ais ar kitais callback'ais. Sukuriame vadinamąjį "callback Hell". Ko pasekoje nukenčia kodo skaitomumas.
  Tam, kad galėtume rašyti kodą asinchroniškai ir išvengtume "callback Hell" - prieš funkciją/as naudojame prierašą "async", šitaip paversdami funkcijas asinchroniškomis.
  Norėdami nurodyti, kad reikia uždelsti / kažko palaukti - naudojame prierašą await. Await'as gali būti naudojamas tiktais asinchroninių funkcijų viduje.
*/
/*syntax
  async function name(){
    await someOtherF();
    await someMethod();
  }
  let name = async () => {
    await someOtherF();
    await someMethod();
  }
*/

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1(number) {
  try {
    const x = await resolveAfter2Seconds(number*5);
    console.log(x);
  } catch {
    console.log('Neteisinga funkcija');
  } finally {
    console.log('Baigėsi kodas');
  }

  console.log('hallo');
}

//  try... catch... finally...
/*syntax
  try{code}catch{errorInCode}finally{doWhatever}
*/
/*
  try, catch ir finally naudojami kai norima kontroliuoti kodo error handle'inimą
  try bando vykdyti kodą;
  Jeigu try bloke įvyksta error, tuomet vykdomas catch blokas. Galiausiai vykdomas finally blokas.
  Net jeigu try viduje gausime error, kurį pagaus catch'as. Kodas einantis toliau visviena bus vykdomas.
*/

//  Promise
/*syntax
  Promise((resolve, reject)) => {
    if(good){
      resolve('answer');
    } else { // bad
      reject('error');
    }
  }
*/

const delay = (time) => {
  return new Promise((resolve, reject) => {
    if(typeof(time) !== 'number'){
      reject(new Error('function delay parameter has to be a number'));
      // reject( () => 'function delay parameter has to be a number');
    } else {
      setTimeout(() => resolve('grazinta data'), time);
    }
  });
}

// let promisas = async () => {
//   console.log("-----");
//   await delay(2000);
//   console.log('some data');
// }

// then (then...) catch finally
let promisas = () => {
  console.log("-----");
  delay(2000)
  // console.log(x);
  .then((data0) => {
    console.log(data0);
    return data0+'more data';
  })
  .then((data1) => {
    console.log(data1);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('funkcija baigesi');
  })
}
/*
  Rašant asinchroninį kodą, naudojami Promises.
  Kviečiant Promise'ą, už jo rašomi(chain'inami): .then() .catch() .finally(), kurie vykdomi eilės tvarka sulaukdami duomenų vieni iš kitų (kalbant apie then'us).
*/


//            TASK 
// https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

// sinchroniniam programavime žingsniai yra atliekami vienas po kito - asinchroniniam programavime žingsniai yra atliekami vienu metu

/*
 CALLBACK
 */
  // call back hell

// const order = (fruitName, callProduction) => {
// 	// console.log('Order placed. Please call production');
// 	setTimeout(() => {
// 		console.log(`${stocks.fruits[fruitName]} was selected`);
// 		callProduction();
// 	}, 2000);
// };

// const production = () => {
// 	setTimeout(() => {
// 		console.log('Production started!');
// 		setTimeout(() => {
// 			console.log('The fruit has been chopped');
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
//         setTimeout(() => {
//           console.log('Start the machine');
//           setTimeout(() => {
//             console.log(`Ice cream placed on ${stocks.holder[1]}`);
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} as toppings`);
//               setTimeout(() => {
//                 console.log('Serve ice cream');
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
// 		}, 2000);
// 	}, 0);
// };

// order(0, production);

/*
  PROMISE
 */

// let is_shop_open = true;

// const order = (time, work) => {
// 	return new Promise((res, rej) => {
// 		if (is_shop_open) {
// 			setTimeout(() => {
// 				res(work());
// 			}, time);
// 		} else {
// 			rej(console.log('Store closed'));
// 		}
// 	});
// };

// order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
// 	.then(() => {
// 		return order(0, () => console.log('Production has started!'));
// 	})
// 	.then(() => {
// 		return order(2000, () => console.log('Fruit has been chopped'));
// 	})
// 	.then(() => {
// 		return order(1000, () =>
// 			console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
// 		);
// 	})
// 	.then(() => {
// 		return order(1000, () => console.log('start the machine'));
// 	})
// 	.then(() => {
// 		return order(2000, () =>
// 			console.log(`ice cream placed on ${stocks.holder[1]}`)
// 		);
// 	})
// 	.then(() => {
// 		return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
// 	})
// 	.then(() => {
// 		return order(2000, () => console.log('Serve Ice Cream'));
// 	})
// 	.catch(() => console.log('Customer left :('))
//   .finally(() => console.log('End of the day...'));

/*
 ASYNC
 */

// function toppingsChoice() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve (console.log('Which topping would you love?'));
// 		}, 2000);
// 	});
// }

// const kitchen = async () => {
//   console.log('A');
//   console.log('B');
//   console.log('C');

//   await toppingsChoice();

//   console.log('D');
//   console.log('E');
// }

// kitchen();
// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking orders")

const stocks = {
	fruits: ['strawberry', 'grapes', 'banana', 'apple'],
	liquid: ['water', 'ice'],
	holder: ['cone', 'cup', 'stick'],
	toppings: ['chocolate', 'peanuts'],
};
 
let isShopOpen = true;

function time(ms) {
	return new Promise((resolve, reject) => { 
		if (isShopOpen) {
			setTimeout(resolve, ms);                                  //sukuriam settimeout, paduodam resolve ir ms. resolve vykdomas kai shop is open(is try)
		} else {
			reject(console.log('Shop is closed'));                    // reject jei shop is closed
		}
	});
}

async function kitchen() {
	try {                                                         // vykdom uzsakyma su try
		await time(2000);                                           // funkcijos pavadinimas time, o () irasytas laikas kiek laukiam
		console.log(`${stocks.fruits[1]} was selected`);

		await time(0000);                                           // si eilute nera butina
		console.log('production has started');

		await time(2000);
		console.log('fruit has been chopped');

		await time(1000);
		console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

		await time(1000);
		console.log('start the machine');

		await time(2000);
		console.log(`ice cream placed on ${stocks.holder[0]}`);

		await time(3000);
		console.log(`${stocks.toppings[1]} as toppings`);

		await time(2000);
		console.log('Serve Ice Cream');
	} catch (err) {                                                 // jeigu shop is closed, tada pirma suveikia reject is else, poto veikia catch, poto finally
		console.log('Customer left', err);
	} finally {                                                     // jeigu day has ended, tada finally
		console.log('Day ended, shop closed');
	}
}

kitchen();                                                        