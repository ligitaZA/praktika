
import './App.css';
import Form from './components/Form';
import SignIn from './components/SignIn';
import { useState,useEffect } from 'react';
import NDForm from './components/NDForm';
import Asmuo from './components/Asmuo';



function App() {
  const [arPrisijunges, setArPrisijunges] = useState(false);

  const skaiciuotiVedusius = () => {
    let kiek = 0;
    asmenys.forEach(asmuo => asmuo.vedes && kiek++);
    return kiek;
  }
  const [vedusiuKiekis, setVedusiuKiekis] = useState(skaiciuotiVedusius);

  const pridetiAsmeny = (naujasAsmuo) => {
    // let naujiDuomenys = asmenys;
    // naujiDuomenys.push(naujasAsmuo)
    // setAsmenys(naujiDuomenys);
    setAsmenys([...asmenys, naujasAsmuo]);
  }
  const keistiStatusa = (id) => {
    // console.log(id);
    let changedData = asmenys;
    let kuris = changedData.findIndex(element => element.id === id);
    // console.log('kelintas', kuris);
    // console.log('before', changedData[kuris]);
    changedData[kuris].vedes = !changedData[kuris].vedes;
    console.log('after', changedData[kuris]);
    setAsmenys(changedData);
    console.log('after set', asmenys);
    setVedusiuKiekis(skaiciuotiVedusius);
  }

  useEffect(()=>{
    console.log('paskeite asmuo')
    console.log('paskeite asmuo');
  }, [asmenys]);

  return (
  <>
  {
    arPrisijunges ? 'Prisijunges' : 
    <SignIn 
    prijungti={setArPrisijunges}
    vedusiuKiekis = {vedusiuKiekis}
    />
  }
  <Form />
  <div className='formHomework'>
  <NDForm/>
  </div>

  </>
  );
}

export default App;
