import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserAction } from '../store/UserState';
import { useParams } from 'react-router-dom';

function User() {
  const users = useSelector(state => state.users);
  const session = useSelector(state => state.session.user);

  const { userId }  = useParams();
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      dispatch(fetchUserAction(userId))
    })();
  }, [userId]);

  return (
    <ul>
      <li>
        <strong>User Id</strong> {users[userId]?.id}
      </li>
      <li>
        <strong>Fist Name</strong> {users[userId]?.first_name}
      </li>
      <li>
        <strong>Email</strong> {users[userId]?.email}
      </li>
      <li>Is it the current user</li> {
        session ?
          session?.id === users[userId]?.id ?
            (<h1>Yes</h1>)
          :
            (<h1>No</h1>)
        :
          (<h1>user not logged in</h1>)
      }
    </ul>
  );
}
export default User;
