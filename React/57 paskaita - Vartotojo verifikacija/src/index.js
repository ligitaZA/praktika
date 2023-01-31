import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserContext';
import { PostProvider } from './context/PostContext';
import { BrowserRouter } from 'react-router-dom';
import { ChatProvider } from './context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <PostProvider>
        <ChatProvider>
        <App />
        </ChatProvider>
      </PostProvider>
    </UserProvider>
  </BrowserRouter>
);