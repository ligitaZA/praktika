const Form = ({ name, setName, metai, setMetai, zanras, setZanras, arMatytas, setArMatytas, image, setImage, addFilm}) => {
  
  return (
    <> 
    <h1>Add your <span>favorite movie</span> </h1>
    <form onSubmit={addFilm}>
        <label>
          Name:
          <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Year:
          <input 
          type="number" 
          value={metai} 
          onChange={(e) => setMetai(e.target.value)} />
        </label>
        <label>
          Category:
          <input 
          type="text" 
          value={zanras} 
          onChange={(e) => setZanras(e.target.value)} />
        </label>
        <label className="align-self">
          Seen:
          <input 
          type="checkbox" 
          className="checkbox"
          checked={arMatytas} onChange={(e) => setArMatytas(e.target.checked)} />
        </label>
        <label>
          Image(URL):
          <input 
          type="text" 
          name="image" 
          value={image} 
          onChange={(e) => setImage(e.target.value)}/>
        </label>
        <button className="add-film" type="submit">Add Film</button>
    </form>
    </>
   
  )
}
 
export default Form;
