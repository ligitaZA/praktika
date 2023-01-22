import React, { useState, useContext } from 'react';
import OrdersContext from '../context';

const Add = () => {
  const [people, setPeople] = useState('');
  const [price, setPrice] = useState('');

  // import the addOrder function from the context
  const { addOrder } = useContext(OrdersContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addOrder(people, price);
    setPeople('');
    setPrice('');
  }

  return (
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
  );
}

export default Add;