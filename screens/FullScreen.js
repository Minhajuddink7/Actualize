import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const FullScreen = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {children}
    </SafeAreaView>
  );
};

export default FullScreen;
