import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import MainList from '../components/main/MainList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002234',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home = ({navigation}) => {
  const SECTIONS = [
    {id: 1, name: 'Meditation', screenName: 'Meditation'},
    {id: 2, name: 'Transcendence', screenName: 'Transcendence'},
    {id: 3, name: 'Life Purpose', screenName: 'LifePurpose'},
    {id: 4, name: 'Hobbies', screenName: 'Hobbies'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      {SECTIONS.map(section => {
        return (
          <View style={{width: '100%'}} key={section.id}>
            <MainList section={section} navigation={navigation} />
          </View>
        );
      })}
    </SafeAreaView>
  );
};

export default Home;
