import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LogIn = () => {
  const [failedLogIn, setFailedLogIn] = useState(false);
  const [userIsBanned, setUserIsBanned] = useState(false);

  const navigation = useNavigate();
  const { users, setLoggedInUser } = useContext(UserContext);

  const handleSubmit = async (values,  setSubmitting ) => {
    const loggedInUser = users.find(user => user.userName === values.userName && user.password === values.password);
    if (loggedInUser) {
      if(!loggedInUser.isBanned){
        setLoggedInUser(loggedInUser);
        navigation('/');
        setFailedLogIn(false);
        setUserIsBanned(false);
      } else if(loggedInUser.isBanned){
        setUserIsBanned(true);
      }
    } else {
      setFailedLogIn(true);
    }
    setSubmitting(false);
  }
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required('Username is required'),
    password: Yup.string()
      .required('Password is required')
  });
 
  return (
    <>
      <div className="logIn">
        <Formik
          initialValues={{
            userName: '',
            password: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}       >

          {({ errors, touched, values, setValues, isSubmitting }) => (
            <Form>
              <div>
                <label>Username:
                  <Field 
                    name='userName'
                    value={values.userName} 
                    onChange={(e)=>setValues({...values, userName:e.target.value})}
                  />
                  {
                    errors.userName && touched.userName ? 
                      <span>{errors.userName}</span>
                      : null
                  }
                </label>
              </div>
              <div>
                <label>Password:
                  <Field 
                  name='password'
                  type='password' 
                  value={values.password} 
                  onChange={(e)=>setValues({...values, password:e.target.value})}
                  />
                  {
                    errors.password && touched.password ? 
                      <span>{errors.password}</span>
                      : null
                  }
                </label>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Log In
              </button>
              {
                failedLogIn && <span>Wrong log in info</span>
              }
              {
                userIsBanned && <span>Your user has been banned</span>
              }
            </Form>
          )}
        </Formik>

      </div>
    </>
  );
}

export default LogIn;