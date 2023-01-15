
import './App.css';
import Form from './components/Form';
import SignIn from './components/SignIn';
import { useState } from 'react';
import NDForm from './components/NDForm';


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
  <div className='formHomework'>
  <NDForm/>
  </div>
  </>
  );
}

export default App;
