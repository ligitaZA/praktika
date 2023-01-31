import PostContext from "../../context/PostContext";
import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPostForm = () => {

  const [formInputs, setFormInputs] = useState({
    heading: '',
    content: '',
    image:''
  });

  const { addNewPost } = useContext(PostContext);
  const { loggedInUser } = useContext(UserContext);

  const navigation = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      heading: formInputs.heading,
      content: formInputs.content,
      image: formInputs.image,
      id: Date.now(),
      userId: loggedInUser ? loggedInUser.id : null
    };
    addNewPost(newPost);
    navigation('/');
  }

  return (
    <>
    <div className="newForm">
      <form onSubmit={handleSubmit}>
        <label>
          Heading:
          <input type="text" name="heading"
            value={formInputs.heading}
            onChange={(e) => setFormInputs({...formInputs, heading:e.target.value})}
          />
        </label>
        <label>
          Content:
          <textarea className="textarea" type="text" name="content"
            value={formInputs.content}
            onChange={(e) => setFormInputs({...formInputs, content:e.target.value})}
          />
        </label>
        <label>
          Image(URL):
          <input 
          type="text" 
          name="image" 
          value={formInputs.image} 
          onChange={(e) => setFormInputs({...formInputs, image:e.target.value})}
          />
        </label>
        <input type="submit" className="button" value="Create new Post" />
      </form>
    </div>
      
    </>
  );
}
export default NewPostForm;