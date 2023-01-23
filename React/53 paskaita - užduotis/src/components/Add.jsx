import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import OrdersContext from '../context';

const Add = () => {

  //naujos funkcijos nustatyti zmoniu kieki ir kaina. people kintamasis ir price kintamasis atitinka people ir price kintamuju pavadinimus back-end'e
  const [people, setPeople] = useState('');
  const [price, setPrice] = useState('');

  // importuota addOrder funkcija
  const { addOrder } = useContext(OrdersContext);
  
  const navigate = useNavigate();
 // submitinant forma, naudojama addOrder funkcija ir priskiriamos reiksmes people, price bei nustatomos naujos reiksmes per setPeople ir setPrice su naujomis reikšmėmis, kad po pateikimo forma būtų išvalyti laukai,
 //pirma su addOrder(people, price) yra pridedamos naujos reiksmes i forma, o su set... formos laukai isvalomi
  const handleSubmit = (event) => {
    event.preventDefault();
    addOrder(people, price);
    setPeople('');
    setPrice('');
    navigate(-1);
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Number of People:
        <input
          type="number"
          value={people}
          onChange={e => setPeople(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Order</button>
    </form>
    </>
    
  );
}
// komponentas eksportuojamas, su submito info keliauja i Home komponenta
export default Add;