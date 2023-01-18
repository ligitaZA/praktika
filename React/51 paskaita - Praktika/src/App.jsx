import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Form from './components/Fom';

import { useState, useEffect } from 'react';

function App() {
  //tikrinu ar prisijunges
  const [arPrisijunges, setArPrisijunges] = useState(false);

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
    setName('');
    setMetai('');
    setZanras('');
    setArMatytas(false);
    setImage('');
    fetchData();
  }

  const editFilm = async (updatedFilm) => {
    await fetch(`http://localhost:5000/filmai/${updatedFilm.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFilm),
    });
    fetchData()
  }

  const deleteFilm = async (id) => {
    await fetch(`http://localhost:5000/filmai/${id}`, {
      method: 'DELETE',
    });
    fetchData();
  }

  //atsijungti, kai iskvieciama - prisijungimas tampa false
  const handleLogOut = () => {
    setArPrisijunges(false)
  }

  useEffect(() => {
    if (arPrisijunges) {
      fetchData();
    }
  }, [arPrisijunges]);

  return (
    <>
      {
        arPrisijunges ?
          <>
            <div className='nav'>
              <img src="https://images.vexels.com/media/users/3/135655/isolated/preview/c751bf3ae9cb8bfa7c2395bc05f2269f-desenhos-animados-de-claquete.png" alt="logo" />
              <h1>Welcome Back!</h1>
              <button onClick={handleLogOut} className='logout'>Log Out</button>
            </div>

            {
              data ?
                <>
                  <main>
                    <div className='input-form'>
                      <Form
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
                        data.map(item =>
                          < Content
                            key={item.id}
                            item={item}
                            setName={setName}
                            setMetai={setMetai}
                            setZanras={setZanras}
                            setArMatytas={setArMatytas}
                            deleteFilm={deleteFilm}
                            editFilm={editFilm}
                          />
                        )
                      }
                    </div>
                  </main>
                  <Footer />
                </>
                : <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />
            }
          </>
          :
          <Header prijungti={setArPrisijunges} />
      }
    </>
  );
}

export default App;
