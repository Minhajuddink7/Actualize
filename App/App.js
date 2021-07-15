import React from 'react';
import {useDoubleBackPressExit} from './common/hooks/BackPressHandle';

import MainNavigation from './navigation/MainNavigation';

const App = () => {
  useDoubleBackPressExit(() => {
    console.log('Pressed Twice');
  });
  return <MainNavigation />;
};

export default App;
