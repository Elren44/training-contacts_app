import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import ImageComponent from './ImageComponent';
import CustomButton from './../common/CustomButton/index';
import {Icon} from '../common/Icon';
import colors from '../../assets/theme/colors';
import {CREATE_CONTACT} from '../../constants/routeNames';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import ImagePicker from '../common/ImagePicker';
import {scale} from 'react-native-size-matters';

const ContactDetailsComponent = ({
  contact,
  openSheet,
  sheetRef,
  onFileSelected,
  localFile,
  updatingImage,
  uploadSucceeded,
}) => {
  const {navigate} = useNavigation();

  const {contact_picture, first_name, last_name, phone_number, country_code} =
    contact;
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {(contact_picture || uploadSucceeded) && (
          <ImageComponent src={contact_picture || localFile?.path} />
        )}

        {!contact_picture && !uploadSucceeded && (
          <View style={{alignItems: 'center', marginVertical: scale(20)}}>
            <Image
              source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
              style={styles.imageView}
            />
            <TouchableOpacity
              onPress={() => {
                openSheet();
              }}>
              <Text style={{color: colors.primary, fontSize: scale(14)}}>
                {updatingImage ? 'Обновление...' : 'Добавить фото'}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.content}>
          <Text style={styles.name}>{first_name + ' ' + last_name}</Text>
        </View>

        <View style={styles.hrLine} />

        <View style={styles.topCallOptions}>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="ionicon"
              name="call-outline"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Звонок</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="materialCommunity"
              name="message-text"
              color={colors.primary}
              size={scale(27)}
            />
            <Text style={styles.middleText}>Сообщение</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="materialCommunity"
              name="video"
              color={colors.primary}
              size={scale(27)}
            />
            <Text style={styles.middleText}>Видео</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.middleCallOptions}>
          <Icon
            type="ionicon"
            name="call-outline"
            color={colors.grey}
            size={scale(27)}
          />
          <View style={styles.phoneMobile}>
            <Text style={{fontSize: scale(14)}}>{phone_number}</Text>
            <Text>Мобильный</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="materialCommunity"
              name="video"
              color={colors.primary}
              size={scale(27)}
            />
            <Icon
              type="materialCommunity"
              name="message-text"
              color={colors.primary}
              size={scale(27)}
              style={[styles.msgIcon]}
            />
          </View>
        </View>
        <CustomButton
          style={{
            alignSelf: 'flex-end',
            marginRight: scale(20),
            width: scale(200),
          }}
          primary
          title="Редактировать"
          onPressButton={() => {
            navigate(CREATE_CONTACT, {contact, editing: true});
          }}
        />
      </View>

      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </ScrollView>
  );
};

export default ContactDetailsComponent;
