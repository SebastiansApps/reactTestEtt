import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

// som async
import promise from 'redux-promise';
// loggar tidigare states
import logger from 'redux-logger';
// dsadsa
import thunk from 'redux-thunk';

import RootReducer from './RootReducer';

// Apply middleware
const middleware = applyMiddleware(thunk, promise, logger);

// Redux Store that hold the whole application state
const Store = createStore(
    RootReducer,
    compose(
      middleware
    )
  );
  // Persist state to app storage
  export const configurePersistStore = persistStore(Store);
  // Export type for use with TypeScript
  export type Store = typeof Store;
  // Make store available globally
  export default Store;