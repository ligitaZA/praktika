// task 2

//2) Sukurti formą, į kurią įvedus stulpelių ir eilučių skaičių - būtų sukurta tokio dydžio lentelė.
const form = document.querySelector('form');
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');//node elementas
  table.appendChild(tbody);
  document.body.appendChild(table);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const rows = form.elements.rows.value;
    const columns = form.elements.columns.value;
    for (let i = 0; i < rows; i++) {
      const tr = document.createElement('tr');
      for (let j = 0; j < columns; j++) {
        const td = document.createElement('td');
        td.textContent = `${i} - ${j}`;
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  });


// Task 3
  const data = {
    title: "Search movies",
    selector: ["IMDB is higher than", "IMDB is lower than", "Actor", "Director", "Name", "Released before year", "Released after year", "Type"],
    errorMessage: "Sorry, we didn't found any movies matching your search input.",
    movies: [
      {
        aktoriai: ['Robert Downey Jr.', 'Terrence Howard', 'Jeff Bridges', 'Gwynth Paltrow', 'Leslie Bibb'],
        IMDB: 7.9,
        leidimoMetai: 2008,
        pavadinimas: "IronMan",
        rezisierius: "Jon Favreau",
        tipas: ['Action', 'Adventure', 'Sci-Fi'],
        trukme: 126,
        paveiksliukas: "https://media.gqmagazine.fr/photos/5f50b655bd52a37161943a0c/3:4/w_408,h_544,c_limit/0-1.jpeg",
        aprasymas: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
      }, {
        aktoriai: ['Chris Hemsworth', 'Natalie Portman', 'Tom Hiddleston', 'Anthony Hopkins', 'Stellan Skarsgard'],
        IMDB: 7,
        leidimoMetai: 2011,
        pavadinimas: "Thor",
        rezisierius: "Kenneth Branagh",
        tipas: ['Action', 'Adventure', 'Fantasy'],
        trukme: 115,
        paveiksliukas: "https://assets-prd.ignimgs.com/2022/05/24/thor-love-and-thunder-button-1653360890011.jpg",
        aprasymas: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."
  
      }, {
        aktoriai: ['Sean Connery', 'Naseeruddin Shah', 'Peta Wilson', 'Tony Curran', 'Stuart Townsend'],
        IMDB: 5.8,
        leidimoMetai: 2003,
        pavadinimas: "The League of Extraordinary Gentlemen",
        rezisierius: "Stephen Norrington",
        tipas: ['Action', 'Adventure', 'Fantasy'],
        trukme: 110,
        paveiksliukas: "https://img1.hulu.com/user/v3/artwork/6720d21d-c44f-4815-83af-4a8a3e2616bd?base_image_bucket_name=image_manager&base_image=97a3504b-f8d1-4f43-aea4-b93cacb6c535&size=458x687&format=jpeg",
        aprasymas: "In an alternate Victorian Age world, a group of famous contemporary fantasy, science fiction, and adventure characters team up on a secret mission."
      }, {
        aktoriai: ['Tobey Maguire', 'Willem Dafoe', 'Kirsten Dunst', 'James Franco', 'Cliff Robertson'],
        IMDB: 7.3,
        leidimoMetai: 2002,
        pavadinimas: "SpiderMan",
        rezisierius: "Sam Raimi",
        tipas: ['Action', 'Adventure', 'Sci-Fi'],
        trukme: 121,
        paveiksliukas: "https://cdn.vox-cdn.com/thumbor/_XEYP3sjVhGbIY5IFiXiwVeDdC8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23604748/52118119083_ffb93cc95a_o.jpg",
        aprasymas: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family."
      }, {
        aktoriai: ['Ryan Reynolds', 'Karan Soni', 'Ed Skrein', 'Michael Benyaer', 'Brianna Hildebrand'],
        IMDB: 8,
        leidimoMetai: 2016,
        pavadinimas: "Deadpool",
        rezisierius: "Tim Miller",
        tipas: ['Action', 'Adventure', 'Comedy'],
        trukme: 108,
        paveiksliukas: "https://droidjournal.com/wp-content/uploads/2020/08/Deadpool_Textless.jpg",
        aprasymas: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks."
      }, {
        aktoriai: ['Hugh Jackman', 'Kate Beckinsale', 'Richard Roxburgh', 'David Wenham', 'Shuler Hensley'],
        IMDB: 6.1,
        leidimoMetai: 2004,
        pavadinimas: "Van Helsing",
        rezisierius: "Stephen Sommers",
        tipas: ['Action', 'Adventure', 'Fantasy'],
        trukme: 131,
        paveiksliukas: "https://static.kino.de/wp-content/uploads/2015/08/van-helsing-2004-filmplakat-rcm1600x1200u.jpg",
        aprasymas: "The famed monster hunter is sent to Transylvania to stop Count Dracula, who is using Dr. Frankenstein's research and a werewolf for nefarious purposes."
      }, {
        aktoriai: ['Hugh Jackman', 'Patrick Stewart', 'Ian McKellen', 'Famke Janssen', 'James Marsden'],
        IMDB: 7.4,
        leidimoMetai: 2000,
        pavadinimas: "X-Men",
        rezisierius: "Bryan Singer",
        tipas: ['Action', 'Adventure', 'Sci-Fi'],
        trukme: 104,
        paveiksliukas: "https://cdn.pocket-lint.com/r/s/x1920/assets/images/149551-tv-feature-what-is-the-best-order-to-watch-the-x-men-movies-image1-y5wpzep24w.jpg",
        aprasymas: "In a world where mutants (evolved super-powered humans) exist and are discriminated against, two groups form for an inevitable clash: the supremacist Brotherhood, and the pacifist X-Men."
      }, {
        aktoriai: ['Paul Rudd', 'Michael Douglas', 'Evangeline Lilly', 'Corey Stoll', 'Bobby Cannavale'],
        IMDB: 7.3,
        leidimoMetai: 2015,
        pavadinimas: "Ant-Man",
        rezisierius: "Peyton Reed",
        tipas: ['Action', 'Adventure', 'Comedy'],
        trukme: 117,
        paveiksliukas: "https://media.wired.co.uk/photos/606db3d5687a704c2c3623fe/master/w_1600%2Cc_limit/Ant-Man.jpg",
        aprasymas: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world."
      }, {
        aktoriai: ['Hera Hilmar', 'Robert Sheehan', 'Hugo Weaving', 'Jihae', 'Ronan Raftery'],
        IMDB: 6.1,
        leidimoMetai: 2018,
        pavadinimas: "Mortal Engines",
        rezisierius: "Christian Rivers",
        tipas: ['Action', 'Adventure', 'Fantasy'],
        trukme: 128,
        paveiksliukas: "https://film-book.com/wp-content/uploads/2018/11/mortal-engines-hong-kong-movie-poster-01-600x350.jpg",
        aprasymas: "In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy."
      }, {
        aktoriai: ['Jesse Eisenberg', 'Woody Harrelson', 'Emma Stone', 'Abigail Breslin'],
        IMDB: 7.6,
        leidimoMetai: 2009,
        pavadinimas: "Zombieland",
        rezisierius: "Ruben Fleischer",
        tipas: ['Adventure', 'Comedy', 'Horror'],
        trukme: 98,
        paveiksliukas: "https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_.jpg",
        aprasymas: "A shy student trying to reach his family in Ohio, a gun-toting bruiser in search of the last Twinkie and a pair of sisters striving to get to an amusement park join forces in a trek across a zombie-filled America."
      }, {
        aktoriai: ['Christian Bale', 'Michael Caine', 'Liam Neeson', 'Katie Holmes', 'Gary Oldman'],
        IMDB: 8.2,
        leidimoMetai: 2005,
        pavadinimas: "Batman Begins",
        rezisierius: "Christopher Nolan",
        tipas: ['Action', 'Adventure'],
        trukme: 140,
        paveiksliukas: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        aprasymas: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption."
      }, {
        aktoriai: ['Sean Astin', 'Orlando Bloom', 'Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
        IMDB: 8.8,
        leidimoMetai: 2001,
        pavadinimas: "The Lord of the Rings: The Fellowship of the Ring",
        rezisierius: "Peter Jackson",
        tipas: ['Action', 'Adventure', 'Drama'],
        trukme: 178,
        paveiksliukas: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F04%2Fimage-tout.jpg",
        aprasymas: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
      }, {
        aktoriai: ['Ian McKellen', 'Martin Freeman', 'Richard Armitage', 'Ken Stott', 'Graham McTavish'],
        IMDB: 7.8,
        leidimoMetai: 2012,
        pavadinimas: "The Hobbit: An Unexpected Journey",
        rezisierius: "Peter Jackson",
        tipas: ['Fantasy', 'Adventure'],
        trukme: 169,
        paveiksliukas: "https://www.indebioscoop.com/wp-content/afbeeldingen/2012/10/Fragment-uit-The-Hobbit-An-Unexpected-Journey-3D.jpg",
        aprasymas: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug."
      }
    ]
  }
  // 3) Naudojantis scripts/data.js viduje esančiais duomenimis:
  // 3.1) Sukurkite visų filmų korteles.
  // 3.2) Sukurkite mygtuką, kurį paspaudus būtų sugeneruojami visi filmai.
  // 3.3+) Sukurkite formą, kurioje pasirinkus kažkurią selektoriaus opciją (TIK VIENĄ) ir įvedus duomenis, būtų sugeneruojami tik tie filmai, kurie atitinka formoje pateiktą informaciją.
  
  // 3.4+++) Patobulinkite formą, kad vartotojas turėtų galimybę pridėti/atimti papildomus filtravimo kriterijus. Paspaudus ieškoti - būtų sugeneruojami tik tie filmai, kurie atitinka visus formoje pateiktus kriterijus.

// document.querySelector('.cards').addEventListener('submit', e => {
//   e.preventDefault();
//   console.dir(e);
//   const[paveiksliukas, pavadinimas, IMDB, trukme,tipas, metai, aprasymas, aktoriai] = [
//     e.target.elements.paveiksliukas.value,
//     e.target.elements.pavadinimas.value,
//     e.target.elements.IMDB.value,
//     e.target.elements.trukme.value,
//     e.target.elements.tipas.value,
//     e.target.elements.metai.value,
//     e.target.elements.aprasymas.value,
//     e.target.elements.aktoriai.value
//   ];
//   console.log(paveiksliukas, pavadinimas, IMDB, trukme,tipas, metai, aprasymas, aktoriai);
  

  let card = document.querySelector('.card');
  for(let i=0; i<data.movies.length; i++){  //galima daryti su foreach
    card.innerHTML += `
    <div class="borderCard">
        <img src="${data.movies[i].paveiksliukas}" alt="movie">  
      <div class="content">
        <h1>${data.movies[i].pavadinimas}</h1>
        <p class="imdb"><i class="fa fa-imdb"></i>${data.movies[i].IMDB}</p>
        <div class="firstRow">
          <p class="trukme">${data.movies[i].trukme}/</p>
          <p class="tipas"> ${data.movies[i].tipas} / </p> 
          <p class="metai"> ${data.movies[i].metai}</p>
        </div>
        <p class="aprasymas">
          ${data.movies[i].aprasymas}
        </p>
        <p class="aktoriai">${data.movies[i].aktoriai}</p>
        <p class="rezisierius">${data.movies[i].rezisierius}</p> 
      </div>
      </div>
    `;
  }
let cards = document.querySelector(".cardsPlace");
let isShow = true;

function show_hide() {
  if(isShow){
    cards.style.display = "none";
    isShow = false;
  } else {
    cards.style.display= "flex";
    isShow = true;
  }
}

let search = document.querySelector('.searching');

  search.innerHTML += `
  <div class="search">
  <label for="options">Search movies:</label>
      <select name="option" id="option">
        <option value="higherIMDB">IMDB is higher than</option>
        <option value="lowerIMDB">IMDB is lower than</option>
        <option value="actor">Actor</option>
        <option value="director">Director</option>
        <option value="name">Name</option>
        <option value="releasedBefore">Released before year</option>
        <option value="releasedAfter">Released after year</option>
        <option value="type">Type</option>
      </select> 
      </div> 
  `;
//   function myFunction() {
//     // Declare variables
//     input = document.getElementById('#text');

//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < data.selector.length; i++) {
//       if (selector[0] === true){
//         for (i = 0; i<data.selector[0].length; i++){
//           if(input.value.indexOf(filter) > -1){
//             selector[0].style.display = "";
//           }else {
//             selector[0].style.display = "none";
//         }
//       }
//    }
//   }
// }






  // <div class="search">
  // <label for="options">Search movies:</label>
  //     <select name="option" id="option">
  //       <option value="higherIMDB">${data.movies[i].IMDB}</option>
  //       <option value="lowerIMDB">${data.movies[i].IMDB}</option>
  //       <option value="actor">${data.movies[i].aktoriai}</option>
  //       <option value="director">${data.movies[i].rezisierius}</option>
  //       <option value="name">${data.movies[i].pavadinimas}</option>
  //       <option value="releasedBefore">${data.movies[i].metai}</option>
  //       <option value="releasedAfter">${data.movies[i].metai}</option>
  //       <option value="type">${data.movies[i].tipas}</option>
  //     </select> 
  // </div>