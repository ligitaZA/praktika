import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const ChatContext = createContext();

const ChatProvider = ({children}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/messages')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMessages(data);
    }).catch(error => {
      console.error('Error:', error);
    });
  }, []);

  const addMessage = (message) => {
    fetch('http://localhost:5000/messages', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json' },
      body: JSON.stringify(message)
    })
    .then(res => res.json())
    .then(data => {
      setMessages([...messages, data]);
    });
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        addMessage
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
export { ChatProvider };
export default ChatContext;