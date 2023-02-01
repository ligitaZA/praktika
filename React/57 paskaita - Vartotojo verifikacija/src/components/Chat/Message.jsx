import UserContext from "../../context/UserContext";
import { useContext } from "react";
import ChatContext from "../../context/ChatContext";

const Message = ({ data }) => {
  console.log(data)
  const { users, loggedInUser } = useContext(UserContext);
  const { deleteMessage } = useContext(ChatContext);
  
  const messageOwner = users.find(user => user.id === data.userId); 

  return (
    <>
    <div className="user">
      {messageOwner && (
        <img
          className="avatar"
          src={messageOwner.avatar}
          alt="user avatar" />
      )}

    {messageOwner && <span>{messageOwner.userName}</span>}</div>
      <div className="message-text">{data.message}</div>
      
      {loggedInUser && loggedInUser.id === data.userId && (
          <button
            onClick={() => deleteMessage(data.id)}
            className="delete-button">
            Delete
          </button>
        )}
    </>
  ) 
}


export default Message;