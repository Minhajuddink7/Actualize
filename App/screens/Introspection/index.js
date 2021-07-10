import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from '../../common/commonStyles';
import Header from '../../components/section/Header';
const {themeColor} = commonStyles();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor,
  },
});

const Introspection = () => {
  return (
    <View style={styles.container}>
      <Header text="Introspection" />
    </View>
  );
};

export default Introspection;
