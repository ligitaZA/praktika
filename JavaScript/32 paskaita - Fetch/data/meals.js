// 3) Meals API (https://www.themealdb.com/api.php)
//   Sukurti puslapį, kuriame yra įvesties laukelis (forma), į kurį įvedus ingredientą ir paspaudus "search" mygtuką, būtų kreipiamasi į https://www.themealdb.com/api.php su užklausa, kuri grąžintų visus patiekalus, kurie turi nurodytą ingredientą kaip pagrindinį ingredientą.
//   Patiekalai turi savo korteles (su basic info). Ant jų paspaudus - pateikiama platesnė info.
//     Basic info: Paveiksliukas, pavadinimas.
//     More info: Paveiksliukas, pavadinimas, ingredientai, receptas, video.
//   Kas be ko - stilizuoti.
//   Galima tobulinti programą, kad galima būtų pateikti: patiekalo pavadinimą, kategoriją, gauti random patiekalą it pns.

const searching = document.getElementById('button');
const maistas = document.getElementById('meal');
// const receptas = document.querySelector('.receptas');
// const uzdaryti = document.getElementById('uzdaryti');

// event listeners
searching.addEventListener('click', maistoSarasas);
// maistas.addEventListener('click', maistoReceptas);
// uzdaryti.addEventListener('click', () => {
//     receptas.parentElement.classList.remove('showRecipe');
// });


// paimu maisto sarasa, veliau jam pridesiu eventa
function maistoSarasas(){

  //paimu search-input is html failo kaip nauja kintamaji
    let tekstas = document.getElementById('search-input').value.trim(); 

    //fetchinu itraukiant inputo reiksme
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${tekstas}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(element => {
                html += `
                    <div class = "meal-item" data-id = "${element.idMeal}">
                        <div class = "meal-img">
                            <img src = "${element.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${element.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
        } else{
            html = "Sorry, we didn't find anything :(";
            maistas.classList.add('notFound');
        }
        maistas.innerHTML = html;
    });
}


// // //get recipe of the meal
// function maistoReceptas(e){
//   e.preventDefault();
//   if(e.target.classList.contains('recipe-btn')){
//       let mealItem = e.target.parentElement;
//       fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
//       .then(response => response.json())
//       .then(data => mealRecipeModal(data.meals));
//   }
// }

// // create a modal
// function mealRecipeModal(maistas){
//   maistas = maistas[0];
//   let html = `
//       <h2 class = "recipe-title">${meal.strMeal}</h2>
//       <p class = "recipe-category">${meal.strCategory}</p>
//       <div class = "recipe-instruct">
//           <h3>Instructions:</h3>
//           <p>${meal.strInstructions}</p>
//       </div>
//       <div class = "recipe-meal-img">
//           <img src = "${meal.strMealThumb}" alt = "">
//       </div>
//       <div class = "recipe-link">
//           <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
//       </div>
//   `;
//   mealDetailsContent.innerHTML = html;
//   mealDetailsContent.parentElement.classList.add('showRecipe');
// }