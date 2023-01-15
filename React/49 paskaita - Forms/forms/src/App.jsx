
import './App.css';
import Form from './components/Form';
import SignIn from './components/SignIn';
import { useState } from 'react';

function App() {
  const [arPrisijunges, setArPrisijunges] = useState(false);

  return (
  <>
  {
    arPrisijunges ? 'Prisijunges' : 
    <SignIn 
    prijungti={setArPrisijunges}
    />
  }
  <Form />
  </>
  );
}

export default App;
