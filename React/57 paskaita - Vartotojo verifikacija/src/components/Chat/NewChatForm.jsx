
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";

const Chat = () => {
  const [chatInputs, setChatInputs] = useState({
    message: ''
  });
  const { messages, addMessage } = useContext(ChatContext);
  const { loggedInUser, users } = useContext(UserContext);
  const chatNavigation = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const newMessage = {
      message: chatInputs.message,
      id: Date.now(),
      userId: loggedInUser ? loggedInUser.id : null
    };
    addMessage(newMessage);
    setChatInputs({ message: "" });
    chatNavigation();
  }
  const renderMessages = () => {
    return messages.map(message => {
      const messageOwner = users.find(user => user.id === message.userId) || {}
      return (
        <div className="user" key={message.id}>
          {messageOwner && (
            <img
              className="avatar"
              src={messageOwner.avatar}
              alt="user avatar" />
          )}
          {messageOwner && <span>{messageOwner.userName}</span>}
          <div className="message-text">{message.message}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="chatUsers">
        {renderMessages()}
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              className="input"
              name="message"
              value={chatInputs.message}
              onChange={e => setChatInputs({ ...chatInputs, message: e.target.value })}
            />
          </label>
          <input
            className="btn"
            type="submit"
            value="Send" />
        </form>
      </div>

    </>
  );
};

export default Chat;