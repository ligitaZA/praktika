import React, { useState } from 'react';

function TodoForm({ addTodo }) { //priimamas prop addTodo
  const [newTodo, setNewTodo] = useState(''); //sukuriama nauja newTodo kintamojo reiksme , kuri yra tuscias string ir setNewTodo yra funkcija, kuri leidzia pakeisti newTodo reiksme

  const handleSubmit = (e) => { //deklaruojama handleSubmit funkcija, kuri priima vieną parametrą - event'o objektą (e).
    e.preventDefault();
    addTodo(newTodo); // naudojama addTodo funcija (is app.jsx), kad prideti nauja uzduoti
    setNewTodo(''); //nustatoma newTodo reikšmė į tusčią string'ą, kad būtų išvalytas formos laukelis po užduoties pridėjimo.
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;

// renderinama nauja forma su handleSubmit eventu, submitinama visa forma, i input laukeli ivedama nauja reiksme