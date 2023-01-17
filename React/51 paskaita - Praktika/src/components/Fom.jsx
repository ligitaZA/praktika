const Form = ({ name, setName, metai, setMetai, zanras, setZanras, arMatytas, setArMatytas, image, setImage, addFilm}) => {
  return (
    <form onSubmit={addFilm}>
        <label>
          Pavadinimas:
          <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Metai:
          <input 
          type="number" 
          value={metai} 
          onChange={(e) => setMetai(e.target.value)} />
        </label>
        <label>
          Žanras:
          <input 
          type="text" 
          value={zanras} 
          onChange={(e) => setZanras(e.target.value)} />
        </label>
        <label>
          Matytas:
          <input 
          type="checkbox" 
          checked={arMatytas} onChange={(e) => setArMatytas(e.target.checked)} />
        </label>
        <label>
          Nuotrauka(URL):
          <input 
          type="text" 
          name="image" 
          value={image} 
          onChange={(e) => setImage(e.target.value)}/>
        </label>
        <button type="submit">Pridėti filmą</button>
    </form>
  )
}
 
export default Form;