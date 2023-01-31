import { useContext } from "react";
import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";
import Chat from "./NewChatForm";


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
            <Chat
              key={ message.id}
              data={message} />
          )
        }
      </div>
    </>);
}

export default Messages;