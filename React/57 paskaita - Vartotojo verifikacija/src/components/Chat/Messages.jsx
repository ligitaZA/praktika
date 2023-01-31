import { useContext } from "react";
import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";
import Message from "../Chat/Message";


const Messages = () => {
  const { messages } = useContext(ChatContext);
  const { users } = useContext(UserContext);
  if (!messages || !users) {
    return <div>Loading...</div>
  }
  
  return (
    <>
      <div>
        {
          messages.map(message =>
            <Message
            
              key={ message.id}
              data={message} />
          )
        }
      </div>
    </>);
}

export default Messages;