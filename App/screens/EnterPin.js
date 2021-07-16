import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ToastAndroid} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useDispatch} from 'react-redux';
import {changeUserState} from '../actions/CommonActions';
import commonStyles from '../common/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyles().themeColor,
  },
});

const EnterPin = ({navigation}) => {
  const dispatch = useDispatch();
  //states
  const [pin, setPin] = useState('');

  //methods
  const handleSubmit = code => {
    if (code === '0671') {
      dispatch(changeUserState(true));
    } else {
      ToastAndroid.showWithGravity(
        'Invalid PIN Entered!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      setPin('');
    }
  };

  return (
    <View style={styles.container}>
      {/* <TextInput
        keyboardType="numeric"
        placeholder="Enter Your Pin"
        placeholderTextColor="#000"
        maxLength={4}
        style={{color: 'black', fontFamily: 'DancingScript-Bold'}}
        onChangeText={text => {
          if (text === '0671') navigation.navigate('Home');
        }}
      /> */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 25,
            color: '#fff',
            fontFamily: 'DancingScript-Bold',
            marginBottom: 50,
          }}>
          Enter You PIN Below:
        </Text>
        <SmoothPinCodeInput
          autoFocus
          cellStyle={{
            borderBottomWidth: 2,
            borderColor: '#bbb',
            marginRight: 5,
          }}
          cellStyleFocused={
            {
              // borderColor: color,
            }
          }
          password={true}
          value={pin}
          onTextChange={code => {
            setPin(code);
            if (code.length === 4) {
              handleSubmit(code);
            }
          }}
        />
      </View>
    </View>
  );
};

export default EnterPin;
