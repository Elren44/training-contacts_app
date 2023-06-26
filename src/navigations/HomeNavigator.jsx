import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  CONTACTS_DETAILS,
  CONTACTS_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetails';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={CONTACTS_LIST}>
      <HomeStack.Screen name={CONTACTS_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACTS_DETAILS} component={ContactDetails} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
