import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});

const Todos = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: '700',
          marginVertical: 15,
        }}>
        Todos
      </Text>
    </View>
  );
};

export default Todos;
