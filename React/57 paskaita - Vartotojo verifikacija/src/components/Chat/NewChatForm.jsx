import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";



const NewChatForm = () => {
  const [chatInputs, setChatInputs] = useState({
    message: ''
  });
  const { addMessage } = useContext(ChatContext);
  const { loggedInUser } = useContext(UserContext);
  const chatNavigation = useNavigate();
  
  const handleSubmit = e => {
    e.preventDefault();
    const newMessage = {
      heading: chatInputs.message,
      id: Date.now(),
      userId: loggedInUser ? loggedInUser.id : null
    };
    addMessage(newMessage);
    chatNavigation()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>New Message
          <input 
          type="text"
          name="message" 
          value={chatInputs.message}
          onChange={(e) => setChatInputs ({...chatInputs, message:e.target.value})}
       /> </label>
        <input 
        type="submit" 
        value="Send" />
      </form>
    </div>
  )
}

export default NewChatForm;