import { useState } from "react";

const AddToDo = ({addNewTask}) => {

  const [newTaskName, setNewTaskName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      task: newTaskName,
      completed: false
    }

    addNewTask(newTask);
    setNewTaskName('');
  }

  return (
    <>
      <h1>Add new task</h1>
      <form onSubmit={submitHandler}>
        <label>
          <input 
            type="text"
            value={newTaskName} 
            onChange={(e) => setNewTaskName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
 
export default AddToDo;