import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
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
    </SafeAreaView>
  );
};

export default Home;
