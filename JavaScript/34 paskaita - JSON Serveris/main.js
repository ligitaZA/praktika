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

const apartments = document.querySelector('#apartments');
const addApartmentForm = document.querySelector('#addApartmentForm');

function getApartments() {
  fetch(`http://localhost:3000/posts`)
    .then(response => response.json())
    .then(data => {
      apartments.innerHTML = '';
      data.forEach(apartment => {
        apartments.innerHTML += `
          <div class="apartment">
            <img src="${apartment.image}" alt="${apartment.description}">
            <div class="info">
              <p>${apartment.city}</p>
              <p>€ ${apartment.price}</p>
              <p>${apartment.description}</p>
              <button class="delete-button" data-apartment-id="${apartment.id}">Delete</button>
            </div>
          </div>
        `;
      });
    });
}
getApartments();
addApartmentForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const city = document.querySelector('#city').value;
  const price = document.querySelector('#price').value;
  const description = document.querySelector('#description').value;
  const image = document.querySelector('#image').value;
  const newApartment = {
    city,
    price,
    description,
    image
  };
  fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newApartment)    
    })    
    .then(response => response.json())   
    .then(data => {
      console.log(data);
      getApartments();
    });
});
apartments.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('delete-button')) {
    const apartmentId = e.target.dataset.apartmentId;
    fetch(`http://localhost:3000/posts/${apartmentId}`, {
      method: "DELETE"
    }).then(response => {
      if (response.ok) {
        getApartments();
      }
    });
  }
});



