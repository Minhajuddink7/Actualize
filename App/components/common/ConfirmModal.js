import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import commonStyles from '../../common/commonStyles';

const ConfirmModal = ({header, message, setModalOpen, callback, color}) => {
  const {alignHorizontal, blackColor} = commonStyles();
  return (
    <View style={{paddingVertical: 30}}>
      <Text style={{fontFamily: 'DancingScript-Medium', fontSize: 20}}>
        {header}
      </Text>
      <Text
        style={{
          fontFamily: 'DancingScript-Regular',
          color: '#8D8A8A',
          fontSize: 18,
        }}>
        {message}
      </Text>
      <View
        style={[alignHorizontal, {marginTop: 15, justifyContent: 'flex-end'}]}>
        <TouchableOpacity
          style={{
            width: 54,
            height: 26,
            backgroundColor: blackColor,
            borderRadius: 5,
            marginRight: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => callback()}>
          <Text
            style={{
              fontFamily: 'DancingScript-Medium',
              color: '#fff',
              fontSize: 12,
            }}>
            Yes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 54,
            height: 26,
            backgroundColor: color,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => setModalOpen(false)}>
          <Text
            style={{
              fontFamily: 'DancingScript-Medium',
              color: '#fff',
              fontSize: 12,
            }}>
            No
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmModal;
