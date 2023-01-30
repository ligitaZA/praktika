import React from "react";
import { useContext } from "react";
import PostContext from "../../context/PostContext";

const MarkedPostsPage = () => {
  const { markedPosts } = useContext(PostContext);

  return (
    <div>
      <h2>Marked Posts:</h2>
      <div className="markedPosts">
      {markedPosts.map((post) => (
        <div className="newPost" key={post.id}>
          <h3>{post.heading}</h3>
          <p>{post.content}</p>
          <img src={post.image} alt="movie" className="postImg"></img>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MarkedPostsPage;