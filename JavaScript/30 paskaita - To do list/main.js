//             Sukurti ToDo aplikaciją

/*
Task'ai turi būti generuojami iš jiem sukurtos klasės.
Informacija saugoma localStorage.
Galimybė sukurti, redaguoti, trinti ir pažymėti/atžymėti task'ą kaip atliktą/neatliktą.
  Sukuriant naują task'ą jis pridedamas į localStorage.
  Trinant task'ą jis ištrinamas iš localStorage.
  Redaguojant task'ą jis ARBA ištrinamas ir sukuriamas ARBA perrašomas jau esantis.
  Task'ai atvaizduojami nuskaičius localStorage ir iš jo pasiėmus informaciją apie task'us.
Stilizuoti!!! (idėja kaip gali atrodyti (./images/toDoApp.PNG))
*/

// class Task {
//   constructor(name) {
//     this.name = name;
//     this.completed = false;
//   }
// }
// class ToDoList {
//   constructor() {
//     this.tasks = [];
//   }
//   addTask(task) {
//     this.tasks.push(task);
//   }
//   removeTask(task) {
//     this.tasks = this.tasks.filter(t => t !== task);
//   }
//   displayTasks() {
//     const tasksList = document.getElementById('tasks');
//     tasksList.innerHTML = '';
//     this.tasks.forEach(task => {
//       const li = document.createElement('li');
//       li.textContent = task.name;
//       tasksList.appendChild(li);
//     });
//   }
// }
// const toDoList = new ToDoList();
// const taskForm = document.getElementById('task-form');
// taskForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const taskName = document.getElementById('task-name').value;
//   if (taskName) {
//     const task = new Task(taskName);
//     toDoList.addTask(task);
//     toDoList.displayTasks();
//   }
// });

// function appendToList() {
//   const tasksArray = ['Išmokti HTML', 'Išmokti CSS', 'Išmokti JavaScript', 'Išmokti .Net', 'Toliau mokytis'];
//   const ulList = document.querySelector('#myUL');
//   tasksArray.forEach((item) => {
//     const li = document.createElement('li');
//     const textNode = document.createTextNode(item);
//     li.appendChild(textNode);
//     ulList.appendChild(li);
//   })
// }

// appendToList();

// function newElement() {
//   const li = document.createElement('li');
//   const value = document.querySelector('#myInput').value;
//   const textNode = document.createTextNode(value);
//   li.appendChild(textNode);
//   if(value === '') {
//     console.log('Neįvestas tekstas');
//   } else {
//     const ulList = document.querySelector('#myUL');
//     ulList.appendChild(li);
//   }
//   document.querySelector('#myInput').value = '';

//   const span = document.createElement('span');
//   const txt = document.createTextNode('\u00D7');
//   span.classList.add('close');
//   // span.classList = 'close';
//   span.append(txt);
//   li.appendChild(span);

//   const close = document.querySelectorAll('.close');

//   for(let i=0; i<close.length; i++) {    
//     close[i].onclick = function() {
//       const parentElement = this.parentElement;
//       parentElement.style.display = 'none';      
//     }
//   }
// }

// const liItems = document.querySelectorAll('li');

// for(let i=0; i<liItems.length;i++) {
//   const span = document.createElement('span');
//   const txt = document.createTextNode('\u00D7');
//   span.classList.add('close');
//   span.append(txt);
//   liItems[i].appendChild(span);

//   liItems[i].onclick = function() {
//     liItems[i].classList.toggle('checked');
//   }
// }

// const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     const parentElement = this.parentElement;
//     parentElement.style.display = 'none';
//   }
// }


// //
// const liItemsValuesArray = [...document.querySelectorAll("li")].map((item) => item.textContent.replace('×',''));
// const sortedItems = liItemsValuesArray.sort()
// console.log(sortedItems);

// const doneTasks = [...document.querySelectorAll("li")].reduce((array, value) => {
//   if ([...value.classList].includes('checked')) {
//     array.push(value.textContent.replace('×', ''));
//   }
//   return array;
// },[]);

// const toDoTasks = [...document.querySelectorAll("li")].reduce((array, value) => {
//   if (![...value.classList].includes('checked')) {
//     array.push(value.textContent.replace('×', ''));
//   }
//   return array;
// }, []);

// console.log(doneTasks);
// console.log(toDoTasks);

// // tas pats tik su foreach
// let toDo = [];
// let done = [];
// [...document.querySelectorAll("li")].forEach((value) => {
//   if ([...value.classList].includes('checked')) {
//     toDo.push(value.textContent.replace('×', ''));
//   } else {
//     done.push(value.textContent.replace('×', ''));
//   }
// })

// console.log(toDo);
// console.log(done);
// // 

// paimam visus elementus is html
const form = document.querySelector("[data-form]");
const lists = document.querySelector("[data-lists]");
const input = document.querySelector("[data-input]");

//local Storage
class Storage {
    static addTodStorage(todoArr){// uzpildom storage su todoArr(veliau sukelsim i form)
        let storage = localStorage.setItem("todo", JSON.stringify(todoArr));//konvertuojam todo i json ir returninam i storage
        return storage;
    }
    static getStorage(){
        let storage = localStorage.getItem("todo") === null ? 
        [] : JSON.parse(localStorage.getItem("todo"));  //jei data =null tai returnina tuscia masyva, jei ne tai paimama reiksme bet kuri data kuri yra local storage.masyvas tures savo sugeneruota unikalu koda. sugeneruos ji form evente, veliau returnina i storage, kad rodytu
        return storage
    }
}
let todoArr = Storage.getStorage(); //todo object yra supushinamas i storage

// make object instance 
class Todo {
    constructor(id, todo){
        this.id = id;
        this.todo = todo;
    }
}
// display the todo in the DOM;
class UI{
  static displayData(){//apibudinamas variable
        let displayData = todoArr.map((item) => { //iteruojama per visa array
            return `
                <div class="todo">
                <p>${item.todo}</p>
                <span class="remove" data-id = ${item.id}>🗑️</span>
                </div>
            `;
        });
        //inner htmlas of lists verciamas i string ir uploudinamas i puslapi
          lists.innerHTML = (displayData).join(" ");
            
    }
    // isvalom input po eventlistenerio
    static clearInput(){ 
        input.value = "";
    }
    static removeTodo(){
        lists.addEventListener("click", (e) => {
          e.preventDefault();
            if(e.target.classList.contains("remove")){
                e.target.parentElement.remove();// targetinam classlist ir jei yra class remove tai clickinus parent elementas yra istrinamas
            }
            let btnId = e.target.dataset.id; //sukuriamas naujas kintamasis, kuris targetina array id's ir jas trina, kad submitinus nesikartotu vel visos reiksmes is naujo, kadangi jas keliam i storage
            UI.removeArrayTodo(btnId); //id perduodama kaip argumentas
        });
    }
    static removeArrayTodo(id){ //apsirasom id parametra
        todoArr = todoArr.filter((item) => item.id !== +id); //sakau kad todoArr id nera lygus remove method id
        Storage.addTodStorage(todoArr);
    }
}
// kai uzkraunamas browseris, tada dom contentas ikeliamas/istrinamas po kito evento
window.addEventListener("DOMContentLoaded", () => { 
    UI.displayData();
    UI.removeTodo();
});
// form dalis
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let id = Math.random() * 1000000; //sugeneruojamas unikalus id value, kuris yra paduodamas
    const todo = new Todo(id, input.value);   //input values yra paduodami kaip parametrai
    todoArr = [...todoArr, todo];
    UI.displayData(); //iskvieciama display data is UI
    UI.clearInput();// isvalomas inputas
    Storage.addTodStorage(todoArr); //pridedama i local storage
});
