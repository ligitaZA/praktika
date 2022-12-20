import H, { helloWorld, notMorningPerson as noMorning } from './Heading.js';

//        Komponentai

//      OL / UL

//1) Sukurti Klasę, kurios pagalba galima būtų kurti OL arba UL elementus su LI jų viduje. (kas be ko, galimybė suteikti tekstus ir atributus) P.S. Stilizuoti :)


{
  class List{
    constructor(props){
      this.props = props;
      return this.render();
    }

    render = () => {
      this.htmlElement = document.createElement(this.props.type);

      Object.keys(this.props.attributes).forEach(attribute => {
        this.htmlElement.setAttribute(attribute, this.props.attributes[attribute]);
      });

      this.props.listItems.forEach(listItem => {
        this.li = document.createElement('li');
        this.liTextNode = document.createTextNode(listItem.text);
        this.li.append(this.liTextNode);
        Object.keys(listItem.attributes).forEach(attribute => {
          this.li.setAttribute(attribute, listItem.attributes[attribute]);
        });
        this.htmlElement.append(this.li);
      });

      return this.htmlElement;
    }
  }

  let list = new List({
    type: 'ul',
    attributes: {
      class: 'lightThemeList',
      id: 'superUnorderedList'
    },
    listItems: [
      {
        text: 'list item tekstas1',
        attributes: {
          class: 'listItem',
          style: 'color: yellow'
        }
      },{
        text: 'list item tekstas2',
        attributes: {
          class: 'listItem',
          style: 'color: green'
        }
      },{
        text: 'list item tekstas3',
        attributes: {
          class: 'listItem',
          style: 'color: red'
        }
      }
    ]
  });
  document.querySelector("body").append(list);
}


// 2) Sukurti Klasę, kurios pagalba galima būtų kurti SELECT elementą, kurio viduje būtų OPTION'ai. (kas be ko, galimybė suteikti tekstus ir atributus). P.S. Stilizuoti :)

class Select{
  constructor(props){
    this.props = props;
    return this.render();
  }

  render = () => {
    this.htmlElement = document.createElement('select');


    Object.keys(this.props.attributes).forEach(attribute => {
      this.htmlElement.setAttribute(attribute, this.props.attributes[attribute]);
    });

    this.props.options.forEach(option => {
      this.option = document.createElement('option');
      this.optionTextNode = document.createTextNode(option.text);
      this.option.append(this.optionTextNode);
      Object.keys(option.attributes).forEach(attribute => {
        this.option.setAttribute(attribute, option.attributes[attribute]);
      });
      this.htmlElement.append(this.option);
    });

    return this.htmlElement;
  }
}
{
let select = new Select({
  attributes: {
    class: 'darkThemedSelect',
    id: 'selection'
  },
  options: [
    {
      text: 'option tekst1',
      attributes: {
        class: 'optionSelection'
      }
    },
    {
      text: 'option tekst2',
      attributes: {
        class: 'optionSelection',
        style: 'color: blue'
      }
    },
    {
      text: 'option tekst3',
      attributes: {
        class: 'optionSelection',
        style: 'color: green'
      }
    },
  ]
});

document.querySelector("div.select").append(select);
}
// 3) Sukurti Klasę, kurios pagalba galima būtų kurti TABLE elementą, kurio viduje būtų THEAD ir TBODY (gal ir TFOOT jei nori). THEAD viduje būtų TR, kurio viduje TH. TBODY viduje būtų TR, kurių viduje būtų TD. (jeigu darot su TFOOT, tai ten irgi bus TR su TD kaip buvo TBODY).  (kas be ko, galimybė suteikti tekstus ir atributus). P.S. Stilizuoti :)

{
class Table {
  constructor(props) {
    this.props = props;
    return this.render();
  }

  render() {
    this.htmlElement = document.createElement('table');

    Object.keys(this.props.attributes).forEach(attributes => {
      this.htmlElement.setAttribute(attributes, this.props.attributes[attributes]);
    });

    this.thead = document.createElement('thead');
    this.tr = document.createElement('tr');

    Object.keys(this.props.thead).forEach(th => {
      this.th = document.createElement('th');
      this.thTextNode = document.createTextNode(this.props.thead[th]);
      this.th.append(this.thTextNode);
      this.tr.append(this.th);
    });
    this.thead.append(this.tr);
    this.htmlElement.append(this.thead);
    this.tbody = document.createElement('tbody');
    this.props.tbody.forEach(tr => {
      this.tr = document.createElement('tr');

      Object.keys(tr).forEach(td => {
        this.td = document.createElement('td');
        this.tdTextNode = document.createTextNode(tr[td]);
        this.td.append(this.tdTextNode);
        this.tr.append(this.td);
      });
      this.tbody.append(this.tr);
    });
    this.htmlElement.append(this.tbody);
    return this.htmlElement;
  }
}

let table = new Table({
  attributes: {
    class: 'table',
    id: 'table',
    style: 'color: blue;'
  },
  thead: {
    th1: 'Vardas',
    th2: 'Pavarde',
    th3: 'Amžius',
    th4: 'Gyvūnas'
  },
  tbody: [
    {
      td1: 'Lukas',
      td2: 'Lukauskas',
      td3: '20',
      td4: 'Šuo'
    }, {
      td1: 'Petras',
      td2: 'Petrauskas',
      td3: '39',
      td4: 'Žiurkėnas'
    }, {
      td1: 'Janė',
      td2: 'Jankauskienė',
      td3: '90',
      td4: '10 kačiū'
    }, {
      td1: 'Marytė',
      td2: 'Balzamienė',
      td3: '80',
      td4: 'Karvė'
    }
  ]
});

document.querySelector('body').append(table);
}

//              MODULIAI
/*
  Kitų JS failų importavimas ir naudojimas
    import ka from 'isKur'; - faile kuriame norime naudoti importus (main.js)
    type="module" - nusirodyti atributą "type" su nustatymu "module" JS failo prijungime HTML'e.
    export default something(){}; 'isKur' faile reikia nurodyti ką jis eksportuoja.
  Galima rašyti tiek export default, tiek export;
    export default - numatytasis eksportas, kurį priimsi rašydamas - import anyNameIWant from 'exportFile.js'. Vardas, kurį nurodai neprivalo sutapti su export default vardu esančiu exportFile.js. Visviena bus eksportuojamas vienas vienintelis elementas, kuris turi default prierašą.
    export - paprastas eksporas, kurį'iuos priimsi rašydamas - import { exportedName, exportedName2 } from 'exportFile.js'. Priimsi būtent tuos elementus, kurių vardus parašei ir kurie yra paprasti export'ai. Priimti paprastus eksportus galima kokiais tik nori pavadinimais naudojant "as" prierašą: import { exportedName as pirmas, exportedName2 as antras } from 'exportFile.js'.
*/
let antraste = new H({
  dydis:'5',
  tekstas:'Labas rytas',
  atributai: {
    style: 'font-size: 50px'
  }
});
console.log(antraste);
helloWorld();
noMorning();

//              Duomenų saugojimas vartotojo dalyje
//  cookie
document.cookie = `vardas=kazkoks; expires=${new Date('2022 12 17')}`;
document.cookie = `kitas=kazkoks; expires=${new Date('2022 12 17')}`;
document.cookie = `vardas=kitoks; expires=${new Date('2022 12 17')}`;

// session storage
document.querySelector('body').addEventListener('click', () => {
  sessionStorage.setItem('vardas', 'Ineta');
  sessionStorage.setItem('pavarde', 'Kriunaite');
  sessionStorage.setItem('lvlOfTired', '30');
});
// local storage
document.querySelector('body').addEventListener('click', () => {
  localStorage.setItem('vardas', 'Ineta');
  localStorage.setItem('pavarde', 'Kriunaite');

  // localStorage.clear(); // išvalo visą storage
  console.log(localStorage.key(0));
  console.log(localStorage.getItem(localStorage.key(0)));
  localStorage.removeItem(localStorage.key(0));
});