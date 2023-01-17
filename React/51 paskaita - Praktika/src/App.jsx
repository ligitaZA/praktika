import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Form from './components/Fom';
import { useState, useEffect } from 'react';

function App() {
  //tikrinu ar prisijunges
  const [arPrisijunges, setArPrisijunges] = useState(false);

  const [editing, setEditing] = useState(null);

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
    if (editing) {
      const updatedFilm = { name, metai, zanras, arMatytas, image };
      await fetch(`http://localhost:5000/filmai/${editing}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFilm),
      });
      setName('');
      setMetai('');
      setZanras('');
      setArMatytas(false);
      setImage('');
    } else {
      const newFilm = { name, metai, zanras, arMatytas, image };
      await fetch('http://localhost:5000/filmai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFilm),
      });
    }
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

  //atsijungti, kai iskvieciama - prisijungimas tampa false
  const handleLogOut = () => {
    setArPrisijunges(false)
  }

  const editFilm = async (id) => {
    const updatedFilm = { name, metai, zanras, arMatytas, image };
    await fetch(`http://localhost:5000/filmai/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFilm),
    });
    setEditing(null);
    setName('');
    setMetai('');
    setZanras('');
    setArMatytas(false);
    setImage('');
    fetchData();
  }

  return (
    <>
      <header>
        {
          arPrisijunges ?
            <>
              <label>Sėkmingai prisijungei!</label>

              <button onClick={handleLogOut} className='logout'>Atsijungti</button>
            </>
            :
            <Header prijungti={setArPrisijunges} />
        }
      </header>
      <Form
        setImage={setImage}
        setName={setName}
        setMetai={setMetai}
        setZanras={setZanras}
        setArMatytas={setArMatytas}
        addFilm={addFilm}
        editing={editing}
      />

      {
        data ?
          data.map(item =>
            < Content
              key={item.id}
              filmas={item}
              deleteFilm={deleteFilm}
              editFilm={editFilm}
            />
          ) :
          <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />
      }
      <Footer />
    </>
  );
}

export default App;
