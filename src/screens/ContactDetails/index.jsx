import {useNavigation, useRoute} from '@react-navigation/native';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';
import {useContext, useEffect} from 'react';
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
import {CONTACTS_LIST} from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';

const ContactDetails = () => {
  const {params: {item = {}} = {}} = useRoute();
  // console.log(item);

  const {
    contactsDispatch,
    contactsState: {
      deleteContact: {loading},
    },
  } = useContext(GlobalContext);
  const {setOptions} = useNavigation();

  useEffect(() => {
    if (item) {
      setOptions({
        title: `${item.first_name} ${item.last_name}`,
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row', gap: 10}}>
              <TouchableOpacity>
                <Icon
                  size={21}
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
                    size={21}
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

  return <ContactDetailsComponent contact={item} />;
};

export default ContactDetails;
