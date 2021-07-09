import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Hobbies = () => {
  return (
    <View style={styles.container}>
      <Text>Hobbies</Text>
    </View>
  );
};

export default Hobbies;
