import React from 'react';
import { OrderProvider } from './context';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import './App.css'

function App() {
  return (
    <OrderProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </OrderProvider>
  );
}

export default App;