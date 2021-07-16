import React from 'react';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Introspection from '../screens/Introspection';
import Transcendence from '../screens/Transcendence';
import LifePurpose from '../screens/LifePurpose';
import Hobbies from '../screens/Hobbies';
import EnterPin from '../screens/EnterPin';
import {useDispatch, useSelector} from 'react-redux';
// import {useDoubleBackPressExit} from '../common/hooks/BackPressHandle';
import {changeUserState} from '../actions/CommonActions';
const MainNavigation = () => {
  const isLoggedIn = useSelector(state => state.common.isLoggedIn);
  // const dispatch = useDispatch();
  // useDoubleBackPressExit(() => {
  //   dispatch(changeUserState(false));
  // });
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Introspection" component={Introspection} />
          <Stack.Screen name="Transcendence" component={Transcendence} />
          <Stack.Screen name="LifePurpose" component={LifePurpose} />
          <Stack.Screen name="Hobbies" component={Hobbies} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="EnterPin" component={EnterPin} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainNavigation;
