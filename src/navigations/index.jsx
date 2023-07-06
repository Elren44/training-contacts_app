import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, View} from 'react-native';
import {navigationRef} from './SideMenu/RootNavigator';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = useState(false);
  // console.log(state);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer ref={navigationRef}>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </>
  );
};

export default AppNavContainer;
