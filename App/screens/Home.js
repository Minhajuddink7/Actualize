import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import commonStyles from '../common/commonStyles';
import MainList from '../components/main/MainList';
const {themeColor} = commonStyles();
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
      color: 'purple',
    },
    {id: 2, name: 'Transcendence', screenName: 'Transcendence', color: 'blue'},
    {id: 3, name: 'Life Purpose', screenName: 'LifePurpose', color: 'red'},
    {id: 4, name: 'Hobbies', screenName: 'Hobbies', color: 'green'},
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
