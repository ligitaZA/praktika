import React, { useContext, useState } from 'react';
import { OrdersContext } from '../App';

const Add = () => {
  const { addOrder } = useContext(OrdersContext);

  const [people, setPeople] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addOrder({ people, price });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        People:
        <input type="number" value={people} onChange={(event) => setPeople(event.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
      </label>
      <br />
      <button type="submit">Add Order</button>
    </form>
  );
}

export default Add;