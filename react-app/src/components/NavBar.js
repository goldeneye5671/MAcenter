
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
        <NavLink className={"link-button"} to='/search'>
          Search
        </NavLink>

        {
          session.user ? 
            (
              <>
                <NavLink className={"link-button"} to={'/studios/new'}>create studio</NavLink>
                <LogoutButton />
              </>
            )
          :
            (
              <>
                <NavLink className={"link-button"} to='/login' exact={true} activeClassName='active'>
                  Login
                </NavLink>
                <NavLink className={"link-button"} to='/sign-up' exact={true} activeClassName='active'>
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
