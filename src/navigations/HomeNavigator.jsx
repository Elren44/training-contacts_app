import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  CONTACT_DETAILS,
  CONTACTS_LIST,
  CREATE_CONTACT,
  LOGOUT,
  SETTINGS,
} from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetails';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';
import Logout from '../screens/Logout';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={CONTACTS_LIST}
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <HomeStack.Screen
        name={CONTACTS_LIST}
        component={Contacts}
        options={{title: 'Контакты'}}
      />
      <HomeStack.Screen
        name={CONTACT_DETAILS}
        component={ContactDetails}
        options={{title: 'Информация о контакте'}}
      />
      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContact}
        options={{title: 'Создать контакт'}}
      />
      <HomeStack.Screen
        name={SETTINGS}
        component={Settings}
        options={{title: 'Настройки'}}
      />
      <HomeStack.Screen name={LOGOUT} component={Logout} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
