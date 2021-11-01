import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserAction } from '../store/UserState';
import { useParams } from 'react-router-dom';
import UserProfilePage from './UserProfilePage/UserProfilePage';
import EditUserProfilePage from './UserProfilePage/EditUserProfilePage';

function User() {
  const users = useSelector(state => state.users);
  const session = useSelector(state => state.session.user);
  const [loaded, setLoaded] = React.useState(false)
  const { userId } = useParams();
  
  const dispatch = useDispatch()
  
  useEffect(() => {

    if (!userId) {
      setLoaded(true);
      return;
    }
    (async () => {
      dispatch(fetchUserAction(parseInt(userId)))
      setLoaded(true)
    })();
  }, [userId, loaded, dispatch]);

  if (loaded) {
    return (
      <> 
      {
          session && session.id === parseInt(userId) ?
            <UserProfilePage user={users[userId]} />
          :
            users[userId] ?
            <>
              <UserProfilePage user={users[userId]} />
            </>
            :
            <h1>User not found</h1>
      }
      </>
    );
  } else {
    return null;
  }
}
export default User;
