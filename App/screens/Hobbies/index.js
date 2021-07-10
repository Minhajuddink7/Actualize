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

const Hobbies = () => {
  return (
    <View style={styles.container}>
      <Header text="Hobbies" />
    </View>
  );
};

export default Hobbies;
