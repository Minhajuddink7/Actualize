import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  header: {
    marginRight: 15,
    color: '#fff',
    fontSize: 24,
    fontFamily: 'DancingScript-Bold',
    // fontFamily: 'Montserrat-SemiBold',
  },
});

const Header = ({text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
        justifyContent: 'center',
      }}>
      <Text style={styles.header}>{text}</Text>
    </View>
  );
};

export default Header;
