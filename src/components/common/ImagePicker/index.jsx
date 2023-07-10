import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Icon} from '../Icon';
import colors from '../../../assets/theme/colors';
import ImagePickerCropper from 'react-native-image-crop-picker';
import {scale} from 'react-native-size-matters';

const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Сделать фото',
      icon: <Icon color={colors.grey} size={scale(20)} name="camera" />,
      onPress: () =>
        ImagePickerCropper.openCamera({
          width: scale(300),
          height: scale(300),
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            onFileSelected(images);
          })
          .catch((error) => {
            console.log('error ', error);
          }),
    },
    {
      name: 'Выбрать из галлереи',
      icon: <Icon color={colors.grey} size={20} name="image" />,
      onPress: () =>
        ImagePickerCropper.openPicker({
          width: scale(300),
          height: scale(300),
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            onFileSelected(images);
            // console.log(images);
          })
          .catch((error) => {
            console.log('error ', error);
          }),
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={scale(200)}
      openDuration={350}
      dragFromTopOnly
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: scale(30),
          borderTopLeftRadius: scale(30),
        },
      }}>
      <View style={styles.optionsWrapper}>
        {options.map(({name, icon, onPress}) => {
          return (
            <TouchableOpacity
              onPress={onPress}
              style={styles.pickerOptions}
              key={name}>
              {icon}
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
