import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 30,
    // textDecorationLine: 'underline',
    fontFamily: 'Roboto-Bold',
  },
});

const Header = ({text}) => {
  return <Text style={styles.header}>{text}</Text>;
};

export default Header;
