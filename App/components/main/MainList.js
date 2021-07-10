import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const MainList = ({section, navigation}) => {
  const styles = StyleSheet.create({
    card: {
      width: 150,
      height: 150,
      // marginLeft: 'auto',
      // marginRight: 'auto',
      backgroundColor: '#fff',
      borderWidth: 1,
      // height: 75,
      borderRadius: 8,
      backgroundColor: section.color,
      alignItems: 'center',
      justifyContent: 'center',
      // paddingVertical: 20,
    },
  });
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(section.screenName)}>
      <Text style={{color: '#fff'}}>{section.name}</Text>
    </TouchableOpacity>
  );
};

export default MainList;
