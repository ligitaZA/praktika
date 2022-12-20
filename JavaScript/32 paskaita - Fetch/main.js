//                  JSON
//    JSON (JavaScript Object Notation)

//  JSON skiriasi nuo object tuo, kad:
  // JSON raktai turi būti kabutėse
  // JSON neišsaugo metodų

const object = {
  raktu : 'reiškmė',
  tiesa : true,
  skaicius : 654,
  masyvas : ['labas', 'ate'],
  objektas : {hi:'ha', du: 2},
  funkcija(zodis){
    return `Pasakei ${zodis}`
  }
}
const objectAsJSON = JSON.stringify(object);


//                  Fetch

/*
    syntax 
    fetch('url')
    .then(res => res.text() || JSON.parse(res))


  Fetch skirtas pasiimti duomenis iš nurodyto failo ar URL.
*/
// data.txt
fetch("./data/data.txt")
  .then(response => response.text())
  .then(data => {
    console.log(data);
    let dataAsArray = data.split('\n'); // atsimint su splitinimu
    console.log(dataAsArray);
    // dataAsArray = dataAsArray.map(item => item.split(' '));
    // console.log(dataAsArray);
    dataAsArray.forEach(line => {
      document.querySelector('#tekstinis').innerHTML += `<p>${line}</p>`;
    });
  });

// data.json
fetch('./data/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    Object.keys(data).forEach(key => {
      document.querySelector('#jsonSimple').innerHTML += `<p>${data[key]}</p>`;
    });
  });  


  //          TASK 1

  // 1) movies.json
  // 1.1) Susikurti movies.json failą, jame sukurti 3 filmus. Kiekvienas filmas turi:
  //   1.1.1) Pavadinimą +
  //   1.1.2) Poster (nuotraukos url) +
  //   1.1.3) Ilgis minutėmis +
  //   1.1.4) Bent 2 aktoriai +
  // 1.2) Nuskaityti movies.json failą JS'e. ir į ekraną išvesti informaciją apie filmus:
  //   1.2.1) Pavadinimas
  //   1.2.2) Poster'is (nuotrauka)
  //   1.2.3) Ilgis valandomis ir minutėmis
  //   1.2.4) Bent 2 aktoriai (suktas ciklas per masyvą)
  // 1.3) Jeigu yra laiko ir noro - stilizuoti.

  fetch('./data/movies.json')
  
  .then(response => response.json())        
  // Promise objektas yra grąžinamas iš fetch funkcijos, kai duomenys yra nuskaityti iš movies.json failo, yra 1 parametras response ir 1 veiksmas - grąžinamas response.json(), kuris paverčia gautus duomenis į JavaScript objektą ir duomenys naudojami kitame then metode                 
  .then(movies => {
    const container = document.querySelector('#container');
    movies.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${movie.name}</h2>
        <img src="${movie.poster}" alt="${movie.name} posteris">
        <p>Ilgis: ${Math.floor(movie.lenght / 60)} val. ${movie.lenght % 60} min.</p>
        <p>Aktoriai: ${movie.actor.join(', ')}</p>
      `;
      container.appendChild(card);
    });
  });




  // random user

// 2) Pasiimkite duomenis iš https://randomuser.me/api/ ir juos atvaizduokite puslapyje.
  // Duomenys galėtų būti atvaizduoti kortelėje.
  // Atvaizduoti nuotrauką, vardą, amžių, adresą ir el. paštą.
  // Galima padaryti mygtuką, kurį paspaudus užkraunamas naujas random asmuo.
  // Kas be ko - pastilizuoti.
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
     console.log(data.results[0])
     document.querySelector("#task2").innerHTML=
     `
     <div class="person-container">
        <img src="${data.results[0].picture.large}">
        <div class="description-container">
           <p><span class="highlight">[${data.results[0].name.title}]</span> ${data.results[0].name.first} ${data.results[0].name.last}</p>
           <p><span class="highlight">Age: </span>${data.results[0].dob.age}</p>
           <p><span class="highlight">City: </span>${data.results[0].location.city}</p>
           <p><span class="highlight">Address: </span>${data.results[0].location.street.name} ${data.results[0].location.street.number}</p>
           <p><span class="highlight">Email: </span>${data.results[0].email}</p>
        </div>
     </div>
     `
  });