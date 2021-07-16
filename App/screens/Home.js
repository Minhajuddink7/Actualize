import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import {useDispatch} from 'react-redux';
import {changeUserState} from '../actions/CommonActions';
import commonStyles from '../common/commonStyles';
import MainList from '../components/main/MainList';
const {
  themeColor,
  introspectionColor: iColor,
  transcendenceColor: tColor,
  lifePurposeColor: lpColor,
  hobbiesColor: hColor,
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
  const actions = [
    {
      text: 'Sync',
      // icon: require('../../assets/images/sync.png'),
      name: 'bt_Sync',
      position: 1,
      textBackground: '#F78819',
      color: '#F78819',
      textColor: '#fff',
    },
    {
      text: 'Quit',
      // icon: require('../../assets/images/Block.png'),
      name: 'quit',
      position: 2,
      color: '#D40000',
      textBackground: '#D40000',
      textColor: '#fff',
    },
  ];
  const SECTIONS = [
    {
      id: 1,
      name: 'Introspection',
      screenName: 'Introspection',
      color: iColor,
      icon: 'notebook',
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
      <FloatingAction
        showBackground={true}
        iconHeight={20}
        iconWidth={20}
        actions={actions}
        onPressItem={name => {
          if (name === 'bt_Update') {
            // navigation.navigate('UpdateRate');
          } else if (name === 'quit') {
            dispatch(changeUserState(false));
          } else if (name === 'bt_Block') {
          }
          console.log(`selected button: ${name}`);
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
