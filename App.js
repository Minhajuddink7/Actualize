import React from 'react';
import {Text} from 'react-native';
import LottieViewer from './components/LottieViewer';
import FullScreen from './screens/FullScreen';
const App = () => {
  return (
    <FullScreen>
      <Text>Actulalize</Text>
      <LottieViewer />
    </FullScreen>
  );
};
export default App;
