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
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <div style={{display:'flex', justifyContent:'flex-start'}}>
        <Link to="/">HOME</Link>
      </div>
      <div style={{display:'flex', justifyContent:'flex-end'}}>
        {
          (loggedInUser.level === 'admin') && <Link to="/users">Manage Users</Link>
        }
        <Link to="/newPost">AddNewPost</Link>
        <Link to="/user">
          <img
            src={loggedInUser.avatar}
            alt="user avatar"
            style={{width:'30px', height:'auto'}}
          />
          <span>{loggedInUser.userName}</span>
        </Link>
        <button onClick={() => logOutUser()}>LogOut</button>
      </div>
    </div>
  );
}
export default UserInfo;