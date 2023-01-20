import { useContext } from "react";
import ToDosContext from "../toDosContext";

const ToDo = ({ data, index }) => {
  
const {changeTaskState, deleteTask} = useContext(ToDosContext);
  return (
    <>
      <div>
        <h1>title {index + 1} : {data.task}</h1>
        <p>Task {data.completed}</p>
        <button onClick={() => changeTaskState(data.id)}>
          {data.completed ? 'Incompleted' : 'Completed'}
        </button>
        <button onClick={() => deleteTask(data.id)}>
          Delete Task
        </button>
      </div>
    </>
  );
}

export default ToDo;