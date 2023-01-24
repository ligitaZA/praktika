import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';

const Validation = () => {

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    passwordRepeat: '',
    age: ''
  });

  //validacijos forma sukuriama naudojant Yup biblioteka
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('This field must be filled.'),

    email: Yup.string()
      .email('Email must have @ symbol.')
      .required('This field must be filled.'),

    age: Yup.number()
      .min(18, 'You are underaged.')
      .required('This field must be filled.'),

    password: Yup.string()
      .min(10, 'Password must be at least 10 symbols length.')
      .required('This field must be filled.'),

    passwordRepeat: Yup.mixed()
      .oneOf([Yup.ref('password'), null], 'Passwords must match.')
      .required('This field must be filled.')
  });

  return (
    <>
      <Formik
        initialValues={values}
        // initialValues={{
        //   email: reiksmes.email,
        //   password: reiksmes.password,
        //   passwordRepeat: reiksmes.passwordRepeat
        // }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ errors, touched, values, setValues }) => (
          <Form>
            
            <section>
              <h1>REGISTER</h1>
              <div>
              <label>Username
                <Field
                  name='username'
                  value={values.username}
                  onChange={(e) => setValues({ ...values, username: e.target.value })}
                />
                {
                  errors.username && touched.username ?
                    <span>{errors.username}</span>
                    : null
                }
              </label>
            </div>
            <div>
              <label>Email
                <Field
                  name='email'
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                />
                {
                  errors.email && touched.email ?
                    <span>{errors.email}</span>
                    : null
                }
              </label>
            </div>
            <div>
              <label>Age
                <Field
                  name='age'
                  value={values.age}
                  onChange={(e) => setValues({ ...values, age: e.target.value })}
                />
                {
                  errors.age && touched.age ?
                    <span>{errors.age}</span>
                    : null
                }
              </label>
            </div>
            <div>
              <label>Password
                <Field
                  name='password'
                  type='password'
                  value={values.password}
                  onChange={(e) => setValues({ ...values, password: e.target.value })}
                />
                {
                  errors.password && touched.password ?
                    <span>{errors.password}</span>
                    : null
                }
              </label>
            </div>
            <div>
              <label>Password Repeat
                <Field
                  name='passwordRepeat'
                  type='password'
                  value={values.passwordRepeat}
                  onChange={(e) => setValues({ ...values, passwordRepeat: e.target.value })}
                />
                {
                  errors.passwordRepeat && touched.passwordRepeat ?
                    <span>{errors.passwordRepeat}</span>
                    : null
                }
              </label>
            </div>
            <button type="submit">Submit</button>
            </section>
            
          </Form>
        )}
      </Formik>
    </>

  );
}

export default Validation;