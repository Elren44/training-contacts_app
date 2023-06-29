import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import {SideMenu} from "./SideMenu";
import {GlobalContext} from "../context/Provider";

const DrawerStack = createDrawerNavigator();


const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch}/>
}

const DrawerNavigator = () => {
  const {authDispatch} = useContext(GlobalContext);
  return (
    <DrawerStack.Navigator screenOptions={{
      drawerType:'slide',
      headerShown: false
    }}
    drawerContent={({navigation}) => getDrawerContent(navigation, authDispatch)}
    >
      <DrawerStack.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigator;
