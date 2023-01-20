import { useParams } from "react-router-dom";

const Card = ({ data }) => {
  const { id } = useParams();

  const duomenys = data.find(element => element.id === Number(id));
  
  return ( 
    <>
    <h1>{duomenys.tekstas}</h1>
    <p>Šios kortelės id yra : {duomenys.id}</p>
    </>
   );
}
 
export default Card;