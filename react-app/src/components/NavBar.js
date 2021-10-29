
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  const session = useSelector(state => state.session);
  return (
    <nav>
      <div className={"home-button"}>
        <NavLink to='/' exact={true} activeClassName='active'>
          MaCenter
        </NavLink>
      </div>

      <div className={"nav-links"}>
        <NavLink to='/search' exact={true}>
          Search for a Studio
        </NavLink>

        {
          session.user ? 
            (
              <>
                <Link to={'/studios/new'}>Create a new studio</Link>
                <LogoutButton />
              </>
            )
          :
            (
              <>
                <NavLink to='/login' exact={true} activeClassName='active'>
                  Login
                </NavLink>
                <NavLink to='/sign-up' exact={true} activeClassName='active'>
                  Sign Up
                </NavLink>
              </>
            )
      }
       </div>
    </nav>
  );
}

export default NavBar;
