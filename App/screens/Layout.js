import React from 'react';
import {View, StyleSheet} from 'react-native';
import commonStyles from '../common/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyles().themeColor,
  },
});

const Layout = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Layout;
