import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
});

const Notes = ({section}) => {
  return (
    <View style={styles.container}>
      <Text>Notes for {section}</Text>
    </View>
  );
};

export default Notes;
