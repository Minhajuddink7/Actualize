import React from 'react';
import {StatusBar} from 'react-native';
import {Provider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import commonStyles from './common/commonStyles';

import MainNavigation from './navigation/MainNavigation';
import storeConfig from './store';
const App = () => {
  const {store, persistor} = storeConfig();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          animated={true}
          backgroundColor={commonStyles().themeColor}
        />
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
