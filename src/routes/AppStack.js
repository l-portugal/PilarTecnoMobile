import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import List from '../screens/List'
import Profile from '../screens/Profile'
import Map from '../screens/Map'

const Stack = createStackNavigator();

export default AppStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
