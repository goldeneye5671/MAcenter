import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import Email from '../Form/Email';
import Password from '../Form/Password';



const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitClicked, setSubmitClicked] = React.useState(false);
  const [emailValidated, setEmailValidated] = React.useState(false);
  const [passwordValidated, setPasswordValidated] = React.useState(false);

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div class="container">
      <div className={'form-container'}>
      <form className={'form'} onSubmit={onLogin}>
      <h1 className={"form-header"}>Log In</h1>
      {
          errors.length > 0 && <ul>{errors.map(error => <li>{error}</li>)}</ul>
      }
        <Email
          email={email}
          setEmail={setEmail}
          submitClicked={submitClicked}
          setValidated={setEmailValidated}
        />

        <Password 
          single={true}
          password={password}
          setPassword={setPassword}
        />
        
        <div className={"edit-and-delete-button-container"}>
          <button type='submit'>Login</button>
          <button onClick={e => {
            setEmail("demo-lition@demo.com")
            setPassword("password")
          }}>Demo</button>
        </div>

    </form>

    </div>

    </div>
    );
};

export default LoginForm;
