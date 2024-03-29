import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToDosProvider } from './toDosContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToDosProvider > 
    <App />
  </ToDosProvider>
);