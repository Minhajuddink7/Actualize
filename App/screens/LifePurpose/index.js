import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import commonStyles from '../../common/commonStyles';
import Header from '../../components/section/Header';
const {themeColor} = commonStyles();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor,
  },
});

const LifePurpose = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="address-book" color="#fff" />
      <Header text="Life Purpose" />
    </View>
  );
};

export default LifePurpose;
