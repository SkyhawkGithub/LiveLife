import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import storage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';

import rootReducer from 'src/reducers';
import rootSaga from 'src/sagas';

const persistConfig = {
  key: 'redux-persist-store',
  storage,
  whitelist: ['session', 'getStarted'],
};

export default (initialState = undefined) => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const logger = createLogger();

  // create the store middleware
  const createStoreWithMiddleware = applyMiddleware(
    sagaMiddleware,
    logger,
  )(createStore);

  const persistedReducer: any = persistReducer(persistConfig, rootReducer);
  // create the store
  const store = createStoreWithMiddleware(persistedReducer, initialState);

  let persistor = persistStore(store);

  // then run the saga
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
