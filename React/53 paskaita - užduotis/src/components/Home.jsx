import React, { useContext } from 'react';
import OrdersContext from '../context';

const Home = () => {
  //importuota orders ir deleteOrder. orders importuota, kad butu galima mapint ir trinti sukurta table row. kol duomenys uzsikrauna, rodo loading...
  const { orders, deleteOrder } = useContext(OrdersContext);

  return (
    <>
     <div>
      <h1>Orders</h1>
      {orders.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Number of People</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.people}</td>
                <td>{order.price}</td>
                <td><button onClick={() => deleteOrder(order.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default Home;