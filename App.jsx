import React from 'react';
import AppNavContainer from './src/navigations';
import 'react-native-gesture-handler';
import GlobalProvider from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvider>
  );
};

export default App;
