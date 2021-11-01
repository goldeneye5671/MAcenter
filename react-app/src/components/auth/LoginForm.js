import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';



const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        <label>Email</label>
        <input
          className={"form-field"}
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />

        <label>Password</label>
        <input
          className={"form-field"}
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
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
