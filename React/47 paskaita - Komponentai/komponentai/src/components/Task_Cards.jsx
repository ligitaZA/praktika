import Card from "./Card";

const TaskPortfolio = (props) => {
  return (
    <>
      <div className="cards">
        {
          props.data.map((item, index) => {
            return (
              <Card
                data={item}
                key={index}
              />
            )
          })
        }
      </div>
    </>
  );
}

export default TaskPortfolio;