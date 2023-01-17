import { useState } from "react";

const Header = (props) => {

  const [userLogin, setUserLogin] = useState({
    name: '',
    password: ''
  });

  const [status, setStatus] = useState('');


  // updatinu name ir password property
  const handleUserInput = (e) => {
    switch (e.target.name) {
      case 'name':
        setUserLogin({
          ...userLogin,
          name: e.target.value
        });
        break;
      case 'password':
        setUserLogin({
          ...userLogin,
          password: e.target.value
        });
        break;

      default:
        console.log('error');
    }
  }


  //fetchinu per signIn.sjon server, prilyginu reiksmes userLogin.name ir userLogin.password
  const handleSubmit = async (e) => {
    e.preventDefault();
    const signInDuomenys = await fetch('http://localhost:5001/prisijungimas')
      .then(rez => rez.json());
    //iteratuoti per signIn.json
    for (let i = 0; i < signInDuomenys.length; i++) {
      if (userLogin.name === signInDuomenys[i].name && userLogin.password === signInDuomenys[i].password) {
        console.log('Teisingi prisijungimo duomenys');
        props.prijungti(true);
      } else {
        setStatus('Neteisingi prisijungimo duomenys!');
      }
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="name"
          value={userLogin.name}
          onChange={handleUserInput}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userLogin.password}
          onChange={handleUserInput}
        />
        <button className="login" type="submit">Log In</button>
      </form>
      { status && <div>{status}</div> }
    </>
  );
}
export default Header;