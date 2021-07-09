import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Meditation = () => {
  return (
    <View style={styles.container}>
      <Text>Meditation</Text>
    </View>
  );
};

export default Meditation;
