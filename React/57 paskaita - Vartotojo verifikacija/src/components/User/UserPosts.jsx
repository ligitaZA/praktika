import Post from "../Post/Post";
import PostContext from "../../context/PostContext";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

const UserPosts = () => {

  const { loggedInUser } = useContext(UserContext);
  const { posts } = useContext(PostContext);

  return (
    <>
      {
        posts
          .filter(post => post.userId === loggedInUser.id)
          .map(post => 
            <Post 
              key={post.id}
              data={post}
            />  
          )
      }
    </>
  );
}
 
export default UserPosts;
