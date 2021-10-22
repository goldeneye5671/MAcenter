import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import userReducer from './UserState';
import thunk from 'redux-thunk';
import session from './session'

const rootReducer = combineReducers({
  session,
  users: userReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
