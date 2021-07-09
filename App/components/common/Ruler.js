import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 0.4,
    backgroundColor: '#ccc',
  },
});

const Ruler = () => {
  return <View style={styles.container}></View>;
};

export default Ruler;
