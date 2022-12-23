// get
let get = () => {
  fetch('http://localhost:3000/posts')
  .then(res => res.json())
  .then(data =>{
      console.log(data)
  })
} 
// arba 
let get1 = (id) => {
  // if(typeof(id) !== "number"){
  //   id = '';
  // }
  fetch(`http://localhost:3000/knygos/${id?id:''}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}


//post 
let post = () => {
  fetch('http://localhost:3000/posts', {
      method: "POST",
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify({
          title: "Haris Poteris 5",
          author: "Rowling"
      }) // galima sia dali rasyt kad tai yra data ir konsolej tada rasyt post({title: "Haris Poteris 5",author: "Rowling"})
  })
};
// pvz
let post1 = (data) => {
  fetch('http://localhost:3000/knygos', {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

// delete
let remove = (id) => {
  fetch(`http://localhost:3000/posts/${id}`,{
    method: "DELETE"
  })
}
//arba
let remove1 = (id) => {
  fetch(`http://localhost:3000/knygos/${id}`, {
    method: "DELETE"
  })
}

// editinimas
let update = () => {
  fetch('http://localhost:3000/posts/3', {
      method: "PUT",
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify({
          title: "Pakeiciu data.json ę elementa",
          author: "id isliks toks pats"
      })
  })
};
//arba 
let update1 = (id, data) => {
  fetch(`http://localhost:3000/knygos/${id}`, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}


/*
Sukurti CRUD aplikaciją laisva tema naudojant JSON-server.

  Susikurti JSON failą su pradiniais duomenimis apie pasirinktą temą (filmus, aktorius, knygas, autorius, žaidimus, sportus, .........) ir su juo pasileisti JSON serverį.

  Į ekraną išvesti visus duomenis.
  Galimybė pridėti naują duomenį.
  Galimybė redaguoti pasirinktą duomenį.
  Galimybė trinti pasirinktą duomenį.

  Viską stilizuoti.

  Galima tobulinti taip, kad pradžioje ekrane rodoma tik maža informacija apie duomenį. Kai ant jo paspaudžiauma nukeliama į naują puslapį arba atidaromas modalas, kur rodoma platesnė informacija apie elementą.
  Galima tobulinti taip, kad būtų galimybė filtruoti duomenis pagal tam tikrą kriterijų.
  Galima tobulinti taip, kad būtų galimybė kažkaip pažymėti duomenis, kad jie būtų atvaizduojami kitaip (peržiūrėtas filmas / perskaityta knyga / mėgstamas autorius/aktorius...).
  Galima tobulinti taip, kad ID generuojamas pagal jūsų nurodytą komandą.
  ++) Galima tobulinti, kad JSON faile būtų keletas susietų laukų. (pvz.: Knygos ir Autoriai)
*/

const filmai = document.querySelector('#filmai');
const addMovieForm = document.querySelector('#addMovieForm');

function getFilm() {
  fetch(`http://localhost:3000/posts`)
    .then(response => response.json())
    .then(data => {
      filmai.innerHTML = '';
      data.forEach(movie => {
        filmai.innerHTML += `
          <div class="movie">

            <img src="${movie.image}" alt="movie img" class="image">
            <div class="info">
              <p class="name">${movie.name}</p>
              <p class="category">${movie.category}</p>
              <p class="length">${movie.length}</p>
              <p class="description">${movie.description}</p>
              <p class="actors">${movie.actors}</p>
              <div class='buttons'>
              <button class="edit-button" data-movie-id="${movie.id}">Edit</button>
              <button class="delete-button" data-movie-id="${movie.id}">Delete</button>
            </div>
            </div>
          </div>
        `;
      });
    });
}
getFilm();
addMovieForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const category = document.querySelector('#category').value;
  const length = document.querySelector('#length').value;
  const description = document.querySelector('#description').value;
  const actors = document.querySelector('#actors').value;
  const image = document.querySelector('#image').value;
  const newFilm = {
    name,
    category,
    length,
    description,
    actors,
    image
  };
  fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFilm)    
    })    
    .then(response => response.json())   
    .then(data => {
      console.log(data);
      getFilm();
    });
});
filmai.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('delete-button')) {
    const movieId = e.target.dataset.movieId;
    fetch(`http://localhost:3000/posts/${movieId}`, {
      method: "DELETE"
    }).then(response => {
      if (response.ok) {
        getFilm();
      }
    });
  }

  // editinimas
  if (e.target.classList.contains('edit-button')) {
    const movieId = e.target.dataset.movieId;
    const movieElement = e.target.closest('.info');
    const nameElement = movieElement.querySelector('.name');
    const categoryElement = movieElement.querySelector('.category');
    const lengthElement = movieElement.querySelector('.length');
    const descriptionElement = movieElement.querySelector('.description');
    const actorsElement = movieElement.querySelector('.actors');
    movieElement.innerHTML = `
      <form class="edit-movie-form">
      <input type="text" value="${nameElement.textContent}">
        <input type="text" value="${categoryElement.textContent}">
        <input type="number" value="${lengthElement.textContent.slice(2)}">
        <input type="text" value="${descriptionElement.textContent}">
        <input type="text" value="${actorsElement.textContent}">
        <button type="submit" id="save-button">Save</button>
      </form>
    `;
    const form = movieElement.querySelector('.edit-movie-form');

    const saveButton = movieElement.querySelector('#save-button');

saveButton.addEventListener('click', (e) => {
  e.preventDefault();
  const name = form.querySelector('input:nth-child(1)').value;
  const category = form.querySelector('input:nth-child(2)').value;
  const length = form.querySelector('input:nth-child(3)').value;
  const description = form.querySelector('input:nth-child(4)').value;
  const actors = form.querySelector('input:nth-child(5)').value;
  fetch(`http://localhost:3000/posts/${movieId}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, category, length, description, actors })
  }).then(response => {
    if (response.ok) {
      getFilm();
    }
  });
})}})