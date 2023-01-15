
import './App.css';
import Form from './components/Form'
import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]); // naudojant Hook funkciją useState, sukuriama todos kintamojo reikšmė, kuri yra tusčias masyvas, ir setTodos funkcija, kuri leidžia pakeisti todos reikšmę.

  const addTodo = (newTodo) => {
    setTodos([...todos, { task: newTodo, isCompleted: false}]); //Naudojant setTodos funkciją, todos masyvui pridedamas naujas objektas su task ir isCompleted reikšmėmis.
  }

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index)); //Naudojant setTodos funkciją ir filter metodą, iš todos masyvo pašalinamas objektas su nurodytu indeksu.
  }

  const handleCheckbox = (index) => {
    const newTodos = [...todos]; //Sukuriamas kintamasis newTodos, kuris yra todos masyvo kopija.
    newTodos[index].isCompleted = !newTodos[index].isCompleted; //keičiamas isCompleted reikšmės pasirinkto objekto.
    setTodos(newTodos);// atnaujinamas setTodos su naujomis reiksmemis
  }

  const unifinisheTasks = todos.filter(todo => !todo.isCompleted).length; // naujas kintamasis, naudojant filter ir length suiskaiciuoja nebaigtu užduociu kieki
  return (
    <div className='app'>
      <label>You have <span>{unifinisheTasks}</span> Todos</label>
      <Form addTodo={addTodo} /> 
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => handleCheckbox(index)} />
            {todo.task} <button onClick={() => handleDelete(index)}><i  className="material-icons">delete</i></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

// returne rendiranamas Form komponentas. kuriam yra perduodama addTodo funkcija kaip props