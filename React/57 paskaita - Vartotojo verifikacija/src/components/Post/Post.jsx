import UserContext from "../../context/UserContext";
import PostContext from "../../context/PostContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Post = ({data}) => {

  const { users, loggedInUser } = useContext(UserContext);
  const { deletePost } = useContext(PostContext);

  const postOwner = users.find(user => user.id === data.userId) || {}

  return (
    <div className="post">
      <div className="userPart">
         <div className="user">
         {postOwner && (
        <img
          className="avatar"
          src={postOwner.avatar}
          alt="user avatar"
        />
      )}
      {postOwner && <span>{postOwner.userName}</span>}</div>
      {
        loggedInUser && loggedInUser.id === postOwner.id &&
        <>
        <div className="buttons">
          <button onClick={() => deletePost(data.id)} className="delete">Delete</button>
          <button className="edit"><Link to={`/editPost/${data.id}`} >Edit</Link></button>
        </div>
        </>
      }
      </div>
      <div className="newPost">
        <h1>{data.heading}</h1>
      <p>{data.content}</p>
      <img src={data.image} alt="movie" className="postImg"></img>
      </div>
      
    </div>
  );
}
export default Post;