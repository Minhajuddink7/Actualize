import React from 'react';
import {Provider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import MainNavigation from './navigation/MainNavigation';
import storeConfig from './store';
const App = () => {
  const {store, persistor} = storeConfig();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
