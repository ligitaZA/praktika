import PostContext from "../../context/PostContext";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPostForm = () => {

  const { id } = useParams();

  const { posts, updatePost } = useContext(PostContext);

  const currentPost = posts.find(post => post.id.toString() === id)

  const navigation = useNavigate();

  const [formInputs, setFormInputs] = useState({
    heading: currentPost.heading,
    content: currentPost.content,
    image: currentPost.image
  });

  const handleSubmit = e => {
    e.preventDefault();

    updatePost(id, formInputs);

    navigation('/');
  }

  return (
    <>
      <div className="editForm">
        <form onSubmit={handleSubmit}>
          <label>
            Heading:
            <input type="text" name="heading"
              value={formInputs.heading}
              onChange={(e) => setFormInputs({ ...formInputs, heading: e.target.value })}
            />
          </label>
          <label>
            Content:
            <textarea
              className="textarea"
              type="text"
              name="content"
              value={formInputs.content}
              onChange={(e) => setFormInputs({ ...formInputs, content: e.target.value })}
            />
          </label>
          <label>
            Image(URL):
            <input type="text" name="image"
              value={formInputs.image}
              onChange={(e) => setFormInputs({ ...formInputs, image: e.target.value })}
            />
          </label>
          <input className="edit" type="submit" value="Edit Post" />
        </form>
      </div>

    </>
  );
}

export default EditPostForm;