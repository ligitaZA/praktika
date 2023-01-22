import { createContext, useState, useEffect, useCallback } from "react";
const OrdersContext = createContext();

const OrderProvider = ({children}) => {
  const [orders, setOrders] = useState([]);

   const addOrder = useCallback((people, price) => {
    const newOrder = {
      id: Date.now(),
      people: people,
      price: price,
    }
    console.log(newOrder)
    fetch('https://believed-shore-vanadium.glitch.me/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setOrders([...orders, { 
          id: data.id, 
          people: data.people, 
          price: data.price }]);
      })
      .catch(error => console.log(error))
  }, [orders])
  
  const deleteOrder = useCallback(( orderId ) => {
    fetch(`https://believed-shore-vanadium.glitch.me/${orderId}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.success) {
        setOrders(orders.filter(order => order.id !== orderId))
      }
    })
    .catch(error => console.log(error))
  }, [orders])


  useEffect(() => {
    const getOrders = async () => {
      const response = await fetch('https://believed-shore-vanadium.glitch.me/');
      const data = await response.json();
      setOrders(data);
    }
    getOrders();
  }, [addOrder, deleteOrder]);


  return(
    <OrdersContext.Provider value={{ orders, addOrder, deleteOrder}}>
      {children}
    </OrdersContext.Provider>
  );
}
export { OrderProvider };
export default OrdersContext;