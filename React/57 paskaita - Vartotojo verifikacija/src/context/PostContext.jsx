import { createContext, useState, useEffect } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
  const [markedPosts, setMarkedPosts] = useState([]);
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
    const fetchData = async () => {
    try {
    const res = await fetch('http://localhost:5000/posts');
    if (res.status !== 200) throw new Error('Error fetching data');
    const data = await res.json();
    console.log(data);
    setPosts(data);
    } catch (error) {
    console.error('Error:', error);
    }
    }
    fetchData();
    }, []);
    
    const toggleMark = async (post) => {
    if (markedPosts.includes(post)) {
    setMarkedPosts(markedPosts.filter(p => p !== post));
    } else {
    setMarkedPosts([...markedPosts, post]);
    }
    }
    
    const addNewPost = async (newPost) => {
    try {
    const res = await fetch('http://localhost:5000/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPost)
    });
    const data = await res.json();
    setPosts([...(posts || []), data]);
    } catch (error) {
    console.error('Error:', error);
    }
    }
    
    const deletePost = async (id) => {
    try {
    await fetch(`http://localhost:5000/posts/${id}`, {
    method: 'DELETE',
    });
    setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
    console.error('Error:', error);
    }
    }
    
    const updatePost = async (id, updatedPost) => {
    try {
    const res = await fetch(`http://localhost:5000/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedPost)
    });
    const data = await res.json();
    setPosts(posts.map(post => post.id.toString() === id ? { ...post, ...data } : post));
    } catch (error) {
    console.error('Error:', error);
    }
    }


  return (
    <PostContext.Provider
      value={{
        posts,
        addNewPost,
        deletePost,
        updatePost,
        markedPosts,
        toggleMark,
        setMarkedPosts
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider };
export default PostContext;