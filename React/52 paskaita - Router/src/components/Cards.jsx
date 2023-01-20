import { Link } from "react-router-dom";

const Cards = ({data}) => {
  return (
    <>
      <h1>Cards</h1>
      <ul>
        {
          data.map(card => {
            return (
              <li key={card.id}>
                <Link to={`/cards/card/${card.id}`}>
                  Card{card.id}
                </Link>
              </li>
            )
          })
        }
        {/* <li><Link to="/cards/card/1">Card1</Link></li>
        <li><Link to="/cards/card/2">Card2</Link></li>
        <li><Link to="/cards/card/3">Card3</Link></li>
        <li><Link to="/cards/card/4">Card4</Link></li>
        <li><Link to="/cards/card/5">Card5</Link></li> */}
      </ul>
    </>
  );
}

export default Cards;