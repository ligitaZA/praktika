import { createContext, useState, useEffect, useCallback } from "react";
const OrdersContext = createContext();

const OrderProvider = ({children}) => {

  //kuriu useState, nustatant orders kintamaji ir setOrders funkcija
  const [orders, setOrders] = useState([]);


  //kuriu addOrder funkcija, jai naudojamas useCallback, kuriam padudoamas people ir price parametrai, kuriamas naujas uzsakkymas naudojant fetch ir siunciant data i back-end'a, tap pat jam priskiriamas id pagal dabartine data.

  //pradzioj sukuriamas naujas objektas newOrder su id pagal data, people ir price. 
  
  
   const addOrder = useCallback((people, price) => {
    const newOrder = {
      id: Date.now(),
      people: people,
      price: price,
    }
    console.log(newOrder)
    // tada per fetch siunciamas newOrder i backenda
    fetch('https://believed-shore-vanadium.glitch.me/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder),
    })
    // kai gaunamas atsakas is serverio, jis parsinamas i data objekta , tada su setOrders funkcija yra pridedamas orders kintamajam naujas uzsakymas
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
  

  //sukuriu deleteOrder funkcija, kuri irgi naudoja useCallback, naudoju fetch ir trinu order pagal jo id
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

// uzsakymu gavimas is serverio ir reiksmiu nuskaitymas orders kintamajam.
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

//useCallback naudojamas kad nekurtų kopiju kaskart kai atnaujinamas OrderProvider.

//vietoj useCallback, kad nereiketu jo naudoti, butu galima sukurti atskirus useState deleteOrder ir addOrder, atskirus kintamuosius, taciau taip reiketu daugiau kodo, taigi jeigu app yra pakankamai našus, galima ir nekurti atskiru kintamuju. siuo atveju del praktikos turbut butu buve geriau pasikurti, bet kadangi info nera daug, tai nekuriau. 