import { createContext, useState, useEffect } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
    // {
    //   id: 0,
    //   userId: 1,
    //   heading : 'Pavadinimas0',
    //   content : 'daug teksto... daug teksto... daug teksto... daug teksto...daug teksto... daug teksto...'
    // },{
    //   id: 1,
    //   userId: 2,
    //   heading : 'Pavadinimas1',
    //   content : 'daug teksto... daug teksto... daug teksto... daug teksto...daug teksto... daug teksto...'
    // },{
    //   id: 2,
    //   userId: 2,
    //   heading : 'Pavadinimas2',
    //   content : 'daug teksto... daug teksto... daug teksto... daug teksto...daug teksto... daug teksto...'
    // },{
    //   id: 3,
    //   userId: 1,
    //   heading : 'Pavadinimas3',
    //   content : 'daug teksto... daug teksto... daug teksto... daug teksto...daug teksto... daug teksto...'
    // }
  
  useEffect(() => {
    fetch('http://localhost:5000/posts')
    .then(res => res.json())
    .then(data => setPosts(data.posts))
}, [])

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  }

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }

  const updatePost = (id, updatedPost) => {
    setPosts(posts.map(post => post.id.toString() === id ? {...post, ...updatedPost} : post));
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        addNewPost,
        deletePost,
        updatePost
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider };
export default PostContext;