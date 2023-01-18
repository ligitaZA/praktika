import { useState, useEffect } from "react";

function Content({ item, deleteFilm, editFilm }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);
  const [metai, setMetai] = useState(item.metai);
  const [zanras, setZanras] = useState(item.zanras);
  const [arMatytas, setArMatytas] = useState(item.arMatytas);
  const [image, setImage] = useState('');


  //atnaujinami kintamieji
  useEffect(() => {
    setName(item.name);
    setMetai(item.metai);
    setZanras(item.zanras);
    setArMatytas(item.arMatytas);
    setImage(item.image)
  }, [item]);

  const [originalItem, setOriginalItem] = useState(item);


  // Kai komponentas yra redagavimo būsenoje, yra rodoma forma, kuri, paspaudus "submit", iškviečia "handleSubmit" funkciją, kuri naudojama atnaujinti filmą naudojant "editFilm" funkciją ir perduoda atnaujintus duomenis kaip argumentą.

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFilm = { ...originalItem, name, metai, zanras, arMatytas, image };
    await editFilm(updatedFilm);
    setIsEditing(false);
  }

  //"handleEdit" nustato komponentą į redagavimo būseną ir nustato originalItem būseną į dabartinį elementą.
  const handleEdit = () => {
    setOriginalItem(item);
    setIsEditing(true);
  }
  return (
    <>
      {isEditing ?
        <form onSubmit={handleSubmit}>
          <div className="film-item">
            <p> Nuotrauka (URL):
              <input
                placeholder={item.image}
                type="text"
                value={image}
                onChange={(e) =>
                  setImage(e.target.value)} />
            </p>
            <p> Pavadinimas:
              <input 
              placeholder={item.name}
              type="text" 
              value={item.setName} onChange={(e) =>
                  setName(e.target.value)}
              />
            </p>

            <p> Metai: 
              <input placeholder={item.metai} 
              type="text" 
              value={item.setMetai} onChange={(e) =>
                setMetai(e.target.value)}
              />
            </p>

            <p> Žanras:
              <input 
              placeholder={item.zanras} 
              type="text" 
              value={item.setZanras} onChange={(e) =>
                setZanras(e.target.value)}
              />
            </p>

            <p> Ar matytas:  
              <input 
              type='checkbox' 
              className="checkbox"
              checked={item.setArMatytas} onChange={() =>
                setArMatytas(!item.arMatytas)}
              />
            </p>

            <button className="delete" onClick={() =>
              deleteFilm(item.id)}>
              <i className="fa fa-close"></i>
            </button>

            <button className="save" type="submit">Save</button>
          </div>
        </form>
        :
        <div className="film-item-edit">

          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.metai}</p>
          <p>{item.zanras}</p>
          <p>{item.arMatytas ? 'Matytas' : 'Nematytas'}</p>

          <button className="delete" onClick={() =>
            deleteFilm(item.id)}>
            <i className="fa fa-close"></i>
          </button>

          <button className="edit" onClick={handleEdit}>Edit</button>
        </div>}
    </>
  );
}

export default Content;
