import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Tabs } from './Tabs';
import List from '../screens/List'
import Profile from '../screens/Profile'
import Map from '../screens/Map'
import Login from '../screens/Auth/SignIn';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default AppStack = (props) => {

  const user = useSelector(state => state.user.user);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      
      {
        user ?
          <Stack.Screen name="AppStack" component={Tabs} />
        :
          <Stack.Screen name="Login" component={Login} />
      }

      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
}
