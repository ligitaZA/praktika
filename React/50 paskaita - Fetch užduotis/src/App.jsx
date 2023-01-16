import './App.css';
import { useState, useEffect } from 'react';
import Filmas from './Filmas';
import Forma from './Forma';

function App() {  
  const [image, setImage] = useState('');
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [metai, setMetai] = useState('');
  const [zanras, setZanras] = useState('');
  const [arMatytas, setArMatytas] = useState(false);

  const fetchData = async () => {
    const duomenysIsDataJSON = await fetch('http://localhost:5000/filmai')
      .then(res => res.json());
    setData(duomenysIsDataJSON)
  }

  const addFilm = async (e) => {
    e.preventDefault();
    const newFilm = { name, metai, zanras, arMatytas, image };
    await fetch('http://localhost:5000/filmai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFilm),
    });
    fetchData();
  }

  const deleteFilm = async (id) => {
    await fetch(`http://localhost:5000/filmai/${id}`, {
      method: 'DELETE',
    });
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='forma'>
        <Forma 
          setImage={setImage}
          setName={setName}
          setMetai={setMetai}
          setZanras={setZanras}
          setArMatytas={setArMatytas}
          addFilm={addFilm}
        />
      </div>

      <div className='filmas'>
       {
        data ?
          data.map(item =>
            < Filmas
              key={item.id}
              filmas={item}
              deleteFilm={deleteFilm}
            />
          ) :
          <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />
      } 
      </div>
      
    </>
  );
}

export default App;