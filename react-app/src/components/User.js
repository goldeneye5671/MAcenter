import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserAction } from '../store/UserState';
import { useParams } from 'react-router-dom';
import UserProfilePage from './UserProfilePage/UserProfilePage';
import EditUserProfilePage from './UserProfilePage/EditUserProfilePage';

function User() {
  const users = useSelector(state => state.users);
  const session = useSelector(state => state.session.user);
  const [loaded, setLoaded] = React.useState(false)
  const [edit, setEdit] = React.useState(false)
  const { userId } = useParams();
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (!userId) {
      setLoaded(true);
      return;
    }
    (async () => {
      dispatch(fetchUserAction(parseInt(userId)))
      console.log(Object.keys(users).length);
      setLoaded(true)
    })();
  }, [userId, loaded, dispatch]);

  if (loaded) {
    return (
      <> 
      {
        session ?
           (session?.id === users[userId]?.id) ?
            !edit ?
              (
                  <>
                  <button onClick={e => setEdit(edit => !edit)}>edit</button>
                  <UserProfilePage user={session} />
                  </>
              )
            :
              (
                <>
                  <button onClick={e => setEdit(edit => !edit)}> Cancel </button>
                  <EditUserProfilePage user={session}/>
                </>
              )
          :
            (
              <>
                <UserProfilePage user={users[userId]} />
              </>
            )
        :
          users[userId] ?
          
            (<UserProfilePage user={users[userId]} />)
          :
            (<h1>User does not exist</h1>)
      }
      </>
    );
  } else {
    return null;
  }
}
export default User;
