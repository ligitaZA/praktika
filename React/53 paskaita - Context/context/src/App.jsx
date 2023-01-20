
import { useState } from 'react';
import './App.css';
import AddToDo from './components/AddToDo';
import ToDos from './components/ToDos';

const App = () => {

  const [toDos, setToDos] = useState([
    {
      id: 1,
      task: "Išnešti šiukšles",
      completed: false
    },{
      id: 2,
      task: "Pavalgyti",
      completed: false
    },{
      id: 3,
      task: "Pamiegoti",
      completed: true
    }
  ]);

  const addNewTask = (newTask) => {
    setToDos([...toDos, newTask]);
  }

  const changeTaskState = (id) => {
    // let data = [...toDos];
    // let which = data.findIndex(item => item.id.toString() === id.toString());
    // data[which].completed = !data[which].completed;
    // setToDos(data);
    setToDos(toDos.map(item => 
      item.id.toString() === id.toString() ? {...item, completed: !item.completed} : item
    ));
  }

  const deleteTask = (id) => {
    setToDos(toDos.filter(item => item.id.toString() !== id.toString()));
  }

  return (
    <>
      <AddToDo
        addNewTask={addNewTask}
      />
      <ToDos
        data={toDos}
        changeTaskState={changeTaskState}
        deleteTask={deleteTask}
      />
    </>
  );
}



export default App;
