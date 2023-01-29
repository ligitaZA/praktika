import PostContext from "../../context/PostContext";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import Post from "./Post";

const Posts = () => {

  const { posts } = useContext(PostContext);
  const { users } = useContext(UserContext);
  if(!posts || !users) {
    return <div>Loading...</div>
  }

  const bannedUsers = users.map(user => user.isBanned && user.id).filter(item => item !== false);
  const availablePosts = posts.filter(post => !bannedUsers.includes(post.userId));

  return (
    <>
    <div className="posts">
{
        availablePosts.map(post => 
          <Post 
            key={post.id}
            data={post}
          />  
        )
      }
    </div>
      
    </>
  );
}
 
export default Posts;