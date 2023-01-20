import { useContext } from "react";
import ToDo from "./ToDo";
import ToDosContext from "../toDosContext";

const ToDos = () => {
  const { toDos } = useContext(ToDosContext)
  return (
    <>
      {toDos.map((todo, index) =>
        <ToDo
          key={todo.id}
          data={todo}
          index={index}
        />
      )}</>
  )
}

export default ToDos;