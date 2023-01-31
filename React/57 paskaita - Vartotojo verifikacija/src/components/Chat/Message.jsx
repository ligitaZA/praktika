import UserContext from "../../context/UserContext";
import { useContext } from "react";

const Message = ({data}) => {
  const { users, loggedInUser } = useContext(UserContext);
 
  const messageOwner = users.find(user => user.id === data.userId) || {};

  return (
    <>
    <div className="user">
      {messageOwner && (
        <img
          className="avatar"
          src={messageOwner.avatar}
          alt="user avatar" />
      )}; 
      {messageOwner && <span>{messageOwner.userName}</span>}
      <div className="message-text">{data.message}</div>
      </div>
    </>
    
  ) 
}

export default Message;