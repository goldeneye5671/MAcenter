import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Studio from './components/Studio';
import StudioCreate from './components/StudioProfilePage/StudioCreate';
import StudioSearch from './components/StudioSearch';
import SplashPage from './components/SplashPage';

import "./index.css"

function App() {
  const [loaded, setLoaded] = useState(false);
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          {user?.id ? <Redirect to={'/'}/> : <LoginForm />}
        </Route>
        <Route path='/sign-up' exact={true}>
        {user?.id ? <Redirect to={'/'}/> : <SignUpForm />}
        </Route>
        <Route path='/search' exact={true}>
          <StudioSearch />
        </Route>
        <ProtectedRoute path='/studios/new' exact={true}>
          <StudioCreate />
        </ProtectedRoute>
        <Route path='/studios/:studioId' exact={true}>
          <Studio />
        </Route>
        <Route path='/users/:userId' exact={true} >
          <User />
        </Route>
        <Route path='/' exact={true} >
          <SplashPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
