import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import commonStyles from './commonStyles';
import DynamicIcon from './DynamicIcon';

const {alignHorizontal, blackColor} = commonStyles();

const BottomNav = ({navigation, color, buttonText, callback}) => {
  return (
    <View
      style={{
        marginHorizontal: '6%',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 30,
        // backgroundColor: 'red',
      }}>
      <TouchableOpacity
        style={[
          alignHorizontal,
          {
            width: '30%',
            height: 50,
            backgroundColor: blackColor,
            // marginTop: 'auto',
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          },
        ]}
        onPress={() => navigation.goBack()}>
        <DynamicIcon
          family="FontAwesome5"
          name="chevron-left"
          size={20}
          color="#fff"
        />
        <Text
          style={{
            color: '#fff',
            fontFamily: 'DancingScript-Bold',
            fontSize: 16,
            marginLeft: 10,
          }}>
          Back
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          // width: 50,
          backgroundColor: color,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 15,
          flex: 1,
        }}
        onPress={callback}>
        <Text
          style={{
            color: '#fff',
            fontFamily: 'DancingScript-Bold',
            fontSize: 16,
            marginLeft: 10,
          }}>
          {buttonText}
          <DynamicIcon color="#fff" family="Entypo" name="plus" size={20} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;
