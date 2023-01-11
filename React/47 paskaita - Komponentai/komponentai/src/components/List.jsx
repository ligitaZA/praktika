import ListItem from "./ListItem";

const List = (props) => {
  return (
    <>
      <ul>
        {
          props.data.map((item, index) => {
            return (
            <ListItem 
            data={item}
            key={index.toString()}
            />
          )})
        }
      </ul>
    </>
  );
}

export default List;