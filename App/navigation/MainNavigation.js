import React from 'react';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Meditation from '../screens/Meditation';
import Transcendence from '../screens/Transcendence';
import LifePurpose from '../screens/LifePurpose';
import Hobbies from '../screens/Hobbies';
const MainNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Meditation" component={Meditation} />
        <Stack.Screen name="Transcendence" component={Transcendence} />
        <Stack.Screen name="LifePurpose" component={LifePurpose} />
        <Stack.Screen name="Hobbies" component={Hobbies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
