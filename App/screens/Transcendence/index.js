import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from '../../common/commonStyles';
import Header from '../../components/section/Header';
const {themeColor, transcendenceColor: tColor} = commonStyles();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor,
  },
});

const Transcendence = () => {
  return (
    <View style={styles.container}>
      <Header text="Transcendence" color={tColor} />
    </View>
  );
};

export default Transcendence;
