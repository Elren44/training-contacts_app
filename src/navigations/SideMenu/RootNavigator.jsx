import React, {createRef} from 'react';
import {View, Text} from 'react-native';

export const navigationRef = createRef();

export const navigate = (name, params) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};
