import './App.css';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import Card from './components/Card';
import Cards from './components/Cards';
import { Route, Routes, Link } from 'react-router-dom'
import { useState } from 'react';

function App() {
const [cards, setCards] = useState([
  {
    tekstas: 'labas',
    id: 1
  },
  {
    tekstas: 'atelabas',
    id: 2
  },
  {
    tekstas: 'ate',
    id: 3
  },
  {
    tekstas: 'hey',
    id: 4
  }
])

  return (
    <>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">User Registration</Link></li>
          <li><Link to="/cards">Cards</Link></li>
        </ul>
      <h2>Hello</h2>
    </nav>
    </header>
    <hr />
      <Routes>

      <Route path="/" element={
          <Home />
        }/>
        <Route path="/register" element={
          <UserRegistration />
        }/>
        <Route path="/login" element={<UserLogin />}/>
        <Route path="/cards" element={
          <Cards
            data={cards}
          />
        }/>
        <Route path="/cards/card/:id" element={
          <Card 
            data={cards}
          />
        }/>
        <Route path='*' element={
        <>
        <h1>404 Not Found</h1>
        </>
         }/>

      </Routes>
      <hr />
      <footer>
        <h2>Bye</h2>
      </footer>
    </>
  );
}

export default App;
