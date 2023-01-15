import { useState } from "react";

const NDForm = () => {

  const [forma, setForma] = useState({
    name: '',
    src: '',
    about: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({});

  const handleChanges = (e) => {
    setForma({
      ...forma,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(forma);
    setSubmitted(true);
  };

  return (
    <>
    <div className="formND">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={forma.name}
            onChange={handleChanges}
          />
        </label>
        <br />
        <label>
          Image:
          <input 
          type="text"
          placeholder="Image URL" 
          name="src"
          value={forma.src}
          onChange={handleChanges}
           />
        </label>
        <br />
        <label>
          About:
          <input
            type="text"
            name="about"
            placeholder="About"
            value={forma.about}
            onChange={handleChanges}
          ></input>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submitted && <div>
          <p>Name: {data.name}</p>
          <img src={data.src} alt={data.name} />
          <p>About: {data.about}</p>
        </div>}
    </div>
    </>

  );
}

export default NDForm;