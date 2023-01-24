import { useState } from "react";
import CustomInput from "./CustomInput";

const FormValidationCustom = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordRepeat: ''
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    passwordRepeat: false
  });


  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      label: 'Email',
      error: 'Email must include @ sign.',
      required: true
    },{
      id: 2,
      name: 'password',
      type: 'password',
      label: 'Password',
      error: 'Password must be at least 8 symbols in length.',
      required: true
    },{
      id: 3,
      name: 'passwordRepeat',
      type: 'password',
      label: 'Password repeat',
      error: 'Password and repeated password must be same.',
      required: true
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }

  const handleValidation = (currentInput) => {
    console.log(currentInput);
    switch(currentInput){
      case 'email':
        values[currentInput].includes('@') ?
          setErrors({ ...errors, [currentInput]: false }) :
          setErrors({ ...errors, [currentInput]: true })
        break;
      case 'password':
        values[currentInput].length >= 8 ?
          setErrors({ ...errors, [currentInput]: false }) :
          setErrors({ ...errors, [currentInput]: true })
        break;
      case 'passwordRepeat':
        values[currentInput] === values.password ?
          setErrors({ ...errors, [currentInput]: false }) :
          setErrors({ ...errors, [currentInput]: true })
        break;

      default:
        console.log('err');
    }
  }

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]:e.target.value });
    handleValidation(e.target.name);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {
          inputs.map(input => 
            <CustomInput
              key={input.id}
              value={values[input.name]}
              handleInputChange={handleInputChange}
              input={input}
              error={errors[input.name]}
            />
          )
        }
        <input type="submit" value="Login" />
      </form>
    </>
  );
}
 
export default FormValidationCustom;
