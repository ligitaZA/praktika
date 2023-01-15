import { useState } from "react";

const SignIn = (props) => {
  const [userLogin, setUserLogin] = useState({
    username:'',
    password:''
  });

  const handleUserInput = (e) => {
    switch(e.target.name){
      case 'username':
        setUserLogin({
          ...userLogin,
          username: e.target.value
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

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userLogin);
    if(userLogin.username === 'papuga' && userLogin.password === "password123"){
      console.log('teisingi prisijungimo duomenys');
      props.prijungti(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          value={userLogin.username}
          onChange={handleUserInput}
        />
        <input 
          type="password"
          name="password"
          value={userLogin.password}
          onChange={handleUserInput}
        />
        <input type="submit" value="Log In" />
      </form>
    </>
  );
}

export default SignIn;