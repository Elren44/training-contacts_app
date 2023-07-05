import React from 'react';
import {Image, Switch, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import axios from 'axios';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/ImagePicker';

export const CreateContactComponent = ({
  form,
  setForm,
  onChangeText,
  onSubmit,
  loading,
  error,
  toggleIsFavorite,
  sheetRef,
  openSheet,
  closeSheet,
  onFileSelected,
  localFile,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseImage}>Выберите изображение</Text>
        </TouchableOpacity>
        <Input
          onChangeText={(value) => {
            onChangeText({name: 'firstName', value: value});
          }}
          label="Имя"
          placeholder="Введите имя..."
          error={form.firstName ? null : error?.first_name?.[0]}
        />
        <Input
          onChangeText={(value) => {
            onChangeText({name: 'lastName', value: value});
          }}
          label="Фамилия"
          placeholder="Введите фамилию..."
          error={form.lastName ? null : error?.last_name?.[0]}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag={true}
              placeholder={
                <Text style={{fontSize: 16, lineHeight: 16}}>Выбрать код</Text>
              }
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton={form.countryCode ? true : false}
              withEmoji
              translation={'rus'}
              onSelect={(v) => {
                const phoneCode = v.callingCode[0];
                const countryCode = v.cca2;
                setForm({...form, phoneCode, countryCode});
              }}
            />
          }
          iconPosition={'left'}
          style={{paddingLeft: 10}}
          visible
          label="Телефон"
          onChangeText={(value) => {
            onChangeText({name: 'phoneNumber', value: value});
          }}
          placeholder="Введите телефон..."
          error={form.phoneNumber ? null : error?.phone_number?.[0]}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14, color: colors.text}}>
            Добавить в избранное
          </Text>
          <Switch
            trackColor={{false: colors.grey, true: colors.primary}}
            thumbColor={colors.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleIsFavorite}
            value={form?.isFavorite}
          />
        </View>
        <CustomButton
          loading={loading}
          onPressButton={onSubmit}
          primary
          title="Подтвердить"
        />
        {/*<CustomButton primary title="Test" onPressButton={handler} />*/}
      </Container>
      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </View>
  );
};
