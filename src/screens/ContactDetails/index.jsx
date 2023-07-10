import {useNavigation, useRoute} from '@react-navigation/native';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';
import {useContext, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from '../../components/common/Icon';
import colors from '../../assets/theme/colors';
import {GlobalContext} from '../../context/Provider';
import deleteContact from '../../context/actions/contacts/deleteContact';
import {navigate} from '../../navigations/SideMenu/RootNavigator';
import {CONTACT_DETAILS, CONTACTS_LIST} from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import uploadimage from '../../helpers/uploadimage';
import editContact from '../../context/actions/contacts/editContact';
import {scale} from 'react-native-size-matters';

const ContactDetails = () => {
  const {params: {item = {}} = {}} = useRoute();
  const sheetRef = useRef(null);
  const [localFile, setLocalFile] = useState(null);
  const [updatingImage, setUpdatingImage] = useState(false);
  const [uploadSucceeded, setUploadSucceeded] = useState(false);
  const {setOptions} = useNavigation();
  const {
    contactsDispatch,
    contactsState: {
      deleteContact: {loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (item) {
      setOptions({
        title: `${item.first_name} ${item.last_name}`,
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row', gap: scale(10)}}>
              <TouchableOpacity>
                <Icon
                  size={scale(21)}
                  color={colors.grey}
                  type="material"
                  name={item.is_favorite ? 'star' : 'star-border'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    'Удаление',
                    `Вы уверены, что хотите удалить ${item.first_name}?`,
                    [
                      {
                        text: 'Отмена',
                        onPress: () => {},
                      },
                      {
                        text: 'Да',
                        onPress: () => {
                          deleteContact(item.id)(contactsDispatch)(() => {
                            navigate(CONTACTS_LIST);
                          });
                        },
                      },
                    ],
                  );
                }}>
                {loading ? (
                  <ActivityIndicator size={'small'} color={colors.primary} />
                ) : (
                  <Icon
                    color={colors.grey}
                    size={scale(21)}
                    type="material"
                    name="delete"
                  />
                )}
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item, loading]);

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const onFileSelected = (image) => {
    closeSheet();
    setLocalFile(image);
    setUpdatingImage(true);
    uploadimage(image)((url) => {
      const {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        country_code: phoneCode,
        is_favorite: isFavorite,
      } = item;
      editContact(
        {
          firstName,
          lastName,
          phoneNumber,
          phoneCode,
          isFavorite,
          contactPicture: url,
        },
        item.id,
      )(contactsDispatch)((item) => {
        setUpdatingImage(false);
        setUploadSucceeded(true);
        // navigate(CONTACT_DETAILS, {item});
      });
    })((err) => {
      console.log('err :>> ', err);
      setUpdatingImage(false);
    });
  };

  return (
    <ContactDetailsComponent
      sheetRef={sheetRef}
      onFileSelected={onFileSelected}
      openSheet={openSheet}
      contact={item}
      localFile={localFile}
      updatingImage={updatingImage}
      uploadSucceeded={uploadSucceeded}
    />
  );
};

export default ContactDetails;
