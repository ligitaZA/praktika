// CRUD su Fetch
/*
  C - create  - POST metodas
  R - read    - GET metodas (default)
  U - update  - PUT metodas
  D - delete  - DELETE metodas
*/

/* Fetch syntax
  fetch(link, {
    method: 'POST', // PUT
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
*/

let getiname = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => console.log(data));
}

let postinam = () => {
  let newData = {
    body: "Mano batai buvo du, vienas dingo nerandu. O su vienu batuku, spirt į šikną tegaliu.",
    title: "Batukas",
    userId: 5
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
    .then(res => res.json())
    .then(data => console.log(data));
}

let triname = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/54', {
    method: "DELETE"
  })
  .then(res => res.json()) // DELETE nieko negrąžina
  .then(data => console.log(data)) // DELETE nieko negrąžina
}

let updateSuPUT = () => { // PUT ištrina buvusią ir įklijuoja naują info tame elemente, į kurį kreipiesi
  let newData = {
    body: "Mano batai buvo du, vienas dingo nerandu. O su vienu batuku, spirt į šikną tegaliu.",
  }
  fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
  .then(res => res.json())
  .then(data => console.log(data));
}

let updateSuPATCH = () => { // PATCH pakeičia arba papildo tik tą informaciją, kuri buvo perduota, tame elemente, į kurį kreipiesi
  let newData = {
    bodyNr2: "Mano batai buvo du, vienas dingo nerandu. O su vienu batuku, spirt į šikną tegaliu.",
  }
  fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: "PATCH",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
  .then(res => res.json())
  .then(data => console.log(data));
}

//        

//     Naudojant https://robust-safe-crafter.glitch.me/ API
// Sukurti puslapį, kuriame būtų atvaizduojami visi butai.
//   fetch(nuoroda).then()
// Taip pat, turi būti galimybė pridėti naują butą.
//   fetch(nuoroda, {method:"POST", headers:{}, body:naujasButasJSONpavdialu}).then()
//   Naujo buto info paimama iš pateiktos formos.

// pasibandymas įpostinti
// fetch('https://robust-safe-crafter.glitch.me/', {
//   method: 'POST',
//   body: JSON.stringify({
//     image: "???",
//     city: "Vilnius",
//     price: 4445,
//     description: "????"
//   }),
//     headers: {
//       'Content-type': 'application/json'
//     }
//   })
    // .then(res => res.json())
    // .then(data => console.log(data));




    const apartments = document.querySelector('#apartments');
    const addApartmentForm = document.querySelector('#addApartmentForm');
    const url = "https://robust-safe-crafter.glitch.me/";
    function getApartments() {
      fetch(url)
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
      fetch(url, {
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
