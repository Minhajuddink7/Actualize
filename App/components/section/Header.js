import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import DynamicIcon from '../../common/DynamicIcon';
const styles = StyleSheet.create({
  header: {
    marginRight: 15,
    color: '#fff',
    fontSize: 24,
    fontFamily: 'DancingScript-Bold',
  },
});

const Header = ({text, color, setModalOpen}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
        justifyContent: 'center',
      }}>
      <Text style={styles.header}>{text}</Text>
      <TouchableOpacity
        style={{
          height: 35,
          width: 35,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color,
          marginTop: 7,
        }}
        onPress={() => setModalOpen(true)}>
        <DynamicIcon family="MaterialIcons" name="add" color="#fff" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
