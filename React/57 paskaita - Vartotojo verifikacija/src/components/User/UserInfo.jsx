import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigation = useNavigate();

  const logOutUser = () => {
    setLoggedInUser(null);
    navigation('/');
  }

  return (
    <div className="headerUser">
      <div className="homePart">
        <Link to="/">HOME</Link>
      </div>
      <div className="managingUsers">
        <div className="editPost">
          {
          (loggedInUser.level === 'admin') && <Link to="/users">Manage Users</Link>
        }
        <Link to="/newPost">Add New Post</Link>
        </div>
        <div className="userPart">
          <Link to="/user">
          <img
            src={loggedInUser.avatar}
            alt="user avatar"
            className="userAvatar"
          />
          <span>{loggedInUser.userName}</span>
        </Link>
        <button className="logOut" onClick={() => logOutUser()}>Log Out</button>
        </div>
        
      </div>
    </div>
  );
}
export default UserInfo;