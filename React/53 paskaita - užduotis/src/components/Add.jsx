import React, { useState } from 'react';


const Add = ({addOrder}) => {
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [price, setPrice] = useState('');

  return (
    <form onSubmit={addOrder}>
      <label>
        Number of People:
        <input
          type="number"
          value={numberOfPeople}
          onChange={e => setNumberOfPeople(e.target.value)}
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