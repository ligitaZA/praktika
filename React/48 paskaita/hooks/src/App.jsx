import './App.css';
import { useState, useEffect } from 'react';
import SmallText from './components/SmallText';

const App = () => {
  // const geraNuotaika = useState(true)[0];
  // const setGeraNuotaika = useState(true)[1];
  const [geraNuotaika, setGeraNuotaika] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const handleGeraNuotaika = () => {
    setGeraNuotaika(!geraNuotaika);
  }

  useEffect(() => {
    console.log('Keičiama nuotaika');
  }, [geraNuotaika]);
  useEffect(() => {
    console.log('Keičiamas click count');
  }, [clickCount]);

  return (
    <>
      <h1>Labas rytas!</h1>
      <button onClick={handleGeraNuotaika}>Nuotaikos Reguliatorius</button>
      <p>Šiandien yra {geraNuotaika ? 'gražus' : 'bjaurus'} rytas.</p>
      { !geraNuotaika &&
        <SmallText 
          text = 'Eik pamiegok kiek daugiau :)'
          clickCount = {clickCount}
          setClickCount = {setClickCount}
        />
      }
    </>
  );
}

export default App;