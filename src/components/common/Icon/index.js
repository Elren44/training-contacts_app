import React from 'react';
import {Text, View} from 'react-native';
import Material from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

const getIconFont = (type) => {
  switch (type) {
    case 'fontisto':
      return Fontisto;
    case 'material':
      return Material;
    case 'ionicon':
      return Ionicon;
    case 'materialCommunity':
      return MaterialCommunityIcon;
    default:
      return FAIcon;
  }
};

export const Icon = ({type, ...props}) => {
  const FontIcon = getIconFont(type);

  return <FontIcon {...props} />;
};
