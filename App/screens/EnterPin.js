import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useDispatch} from 'react-redux';
import {changeUserState} from '../actions/CommonActions';
import commonStyles from '../common/commonStyles';
import showToast from '../common/showToast';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyles().themeColor,
  },
});

const EnterPin = () => {
  const dispatch = useDispatch();
  //states
  const [pin, setPin] = useState('');

  //methods
  const handleSubmit = code => {
    if (code === '0671') {
      dispatch(changeUserState(true));
    } else {
      showToast('Invalid PIN Entered!');
      setPin('');
    }
  };

  return (
    <View style={styles.container}>
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
