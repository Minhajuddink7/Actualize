import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import DynamicIcon from '../../common/DynamicIcon';
const MainList = ({section, navigation}) => {
  let borderRadiusStyes = {};
  switch (section.id) {
    case 1:
      borderRadiusStyes = {borderTopLeftRadius: 20};
      break;
    case 2:
      borderRadiusStyes = {borderTopRightRadius: 20};
      break;
    case 3:
      borderRadiusStyes = {borderBottomLeftRadius: 20};
      break;
    case 4:
      borderRadiusStyes = {borderBottomRightRadius: 20};
      break;

    default:
      break;
  }
  const styles = StyleSheet.create({
    card: {
      width: 150,
      height: 150,
      // marginLeft: 'auto',
      // marginRight: 'auto',
      backgroundColor: '#fff',
      ...borderRadiusStyes,
      // borderWidth: 1,
      // height: 75,
      // borderRadius: 20,
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
      <DynamicIcon
        family={section.family}
        name={section.icon}
        color="#fff"
        size={30}
      />
      <Text
        style={{
          color: '#fff',
          marginTop: 8,
          fontFamily: 'DancingScript-Bold',
          fontSize: 18,
        }}>
        {section.name}
      </Text>
    </TouchableOpacity>
  );
};

export default MainList;
