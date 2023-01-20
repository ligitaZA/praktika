import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';

export const OrdersContext = React.createContext();

const App = () => {
  const [orders, setOrders] = useState([]);

 

  const addOrder = (order) => {
    // Make a POST request to the back-end to add the new order
    fetch('https://believed-shore-vanadium.glitch.me/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    })
      .then(response => response.json())
      .then(data => {
        setOrders([...orders, data])
      })
      .catch(error => console.log(error))
  };

  const editOrder = (updatedOrder) => {
    // Make a PUT request to the back-end to update the order
    fetch(`https://believed-shore-vanadium.glitch.me/${updatedOrder.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedOrder),
    })
      .then(response => response.json())
      .then(data => {
        setOrders(prevOrders => prevOrders.map(order => order.id === data.id ? data : order))
      })
      .catch(error => console.log(error))
  };

  const deleteOrder = (id) => {
    // Make a DELETE request to the back-end to delete the order
    fetch(`https://believed-shore-vanadium.glitch.me/orders/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
        }
      })
      .catch(error => console.log(error))
  };
 useEffect(() => {
    fetch('https://believed-shore-vanadium.glitch.me/')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.log(error))
  }, []);
  return (
    <OrdersContext.Provider value={{ orders, setOrders, addOrder, editOrder, deleteOrder }}>
        <Navigation />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
        </Routes>
    </OrdersContext.Provider>
  );
}

export default App;