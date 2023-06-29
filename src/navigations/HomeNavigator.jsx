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
    <HomeStack.Navigator initialRouteName={CONTACTS_LIST} screenOptions={{
      headerTitleAlign: "center"
    }}>
      <HomeStack.Screen name={CONTACTS_LIST} component={Contacts} options={{title: "Контакты"}}/>
      <HomeStack.Screen name={CONTACTS_DETAILS} component={ContactDetails} options={{title: "Информация о контакте"}}/>
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} options={{title: "Создать контакт"}}/>
      <HomeStack.Screen name={SETTINGS} component={Settings} options={{title: "Настройки"}}/>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
