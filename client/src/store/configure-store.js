import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers/index';

const middleware = [ thunk ];

let enhancer;

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger({
    level: 'info',
    collapsed: true,
  }));
}

enhancer = compose(
  applyMiddleware(...middleware)
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}
