import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 30,
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    fontWeight: '700',
  },
});

const Header = ({text}) => {
  return <Text style={styles.header}>{text}</Text>;
};

export default Header;
