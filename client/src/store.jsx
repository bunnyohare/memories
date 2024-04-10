import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // If you're using redux-thunk middleware

import reducer from './reducers/posts'; // Assuming you have a root reducer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk) // Apply middleware if you're using redux-thunk
  )
);

export default store;
