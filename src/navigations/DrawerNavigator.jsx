import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';

const DrawerStack = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator screenOptions={{
      drawerType:'slide',
    }}>
      <DrawerStack.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigator;
