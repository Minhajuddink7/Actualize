import React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeUserState} from '../actions/CommonActions';
import commonStyles from '../common/commonStyles';
import DynamicIcon from '../common/DynamicIcon';
import MainList from '../components/main/MainList';
const {
  themeColor,
  introspectionColor: iColor,
  transcendenceColor: tColor,
  lifePurposeColor: lpColor,
  hobbiesColor: hColor,
  // redColor,
  blackColor,
} = commonStyles();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const SECTIONS = [
    {
      id: 1,
      name: 'Introspection',
      screenName: 'Introspection',
      color: iColor,
      icon: 'notebook-multiple',
      family: 'MaterialCommunityIcons',
    },
    {
      id: 2,
      name: 'Transcendence',
      screenName: 'Transcendence',
      color: tColor,
      icon: 'heartbeat',
      family: 'FontAwesome5',
    },
    {
      id: 3,
      name: 'Life Purpose',
      screenName: 'LifePurpose',
      color: lpColor,
      icon: 'hand-holding-heart',
      family: 'FontAwesome5',
    },
    {
      id: 4,
      name: 'Hobbies',
      screenName: 'Hobbies',
      color: hColor,
      family: 'FontAwesome',
      icon: 'magic',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 300,
          height: 300,
        }}>
        {SECTIONS.map(section => {
          return (
            <View key={section.id}>
              <MainList section={section} navigation={navigation} />
            </View>
          );
        })}
      </View>
      <TouchableOpacity
        style={{
          height: 70,
          width: 70,
          // backgroundColor: redColor,
          backgroundColor: blackColor,
          position: 'absolute',
          bottom: 30,
          right: 30,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => dispatch(changeUserState(false))}>
        <DynamicIcon color="#fff" family="Fontisto" name="locked" size={26} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
