import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ruler from '../common/Ruler';

const styles = StyleSheet.create({
  card: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#fff',
    // height: 75,
    // borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});
const MainList = ({section, navigation}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate(section.screenName)}>
        <Text style={{color: '#000'}}>{section.name}</Text>
      </TouchableOpacity>
      <Ruler />
    </>
  );
};

export default MainList;
