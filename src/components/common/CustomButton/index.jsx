import React, {useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import {scale} from 'react-native-size-matters';

const CustomButton = ({
  title,
  disabled,
  loading,
  secondary,
  primary,
  style,
  danger,
  onPressButton,
}) => {
  const [focused, setFocused] = useState(false);

  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }

    if (secondary) {
      return colors.secondary;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => onPressButton()}
      disabled={disabled}
      style={[styles.wrapper, {backgroundColor: getBgColor()}, style]}>
      <View style={styles.loaderSection}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : colors.white,
              fontSize: scale(12),
            }}>
            {loading ? 'Пожалуйста подождите...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
