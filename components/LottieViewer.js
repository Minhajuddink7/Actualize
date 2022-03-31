import React from 'react';
import LottieView from 'lottie-react-native';
const LottieViewer = () => {
  return (
    <LottieView
      source={require('../assets/lottie-files/89023-loading-circles.json')}
      colorFilters={[
        {
          keypath: 'button',
          color: '#F00000',
        },
        {
          keypath: 'Sending Loader',
          color: '#F00000',
        },
      ]}
      autoPlay
      loop
    />
  );
};

export default LottieViewer;
