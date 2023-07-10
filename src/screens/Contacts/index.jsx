import {TouchableOpacity} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback, useContext, useEffect, useRef, useState} from 'react';
import colors from '../../assets/theme/colors';
import {Icon} from '../../components/common/Icon';
import {GlobalContext} from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContactsComponent from '../../components/ContactsComponent';
import {CONTACT_DETAILS} from '../../constants/routeNames';
import {navigate} from '../../navigations/SideMenu/RootNavigator';

const Contacts = ({navigation}) => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const contactsRef = useRef([]);

  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getSettings();

      return () => {};
    }, []),
  );

  useEffect(() => {
    const prev = contactsRef.current;

    contactsRef.current = data;

    const newList = contactsRef.current;
    if (newList.length - prev.length === 1) {
      const newContact = newList.find(
        (item) => !prev.map((i) => i.id).includes(item.id),
      );
      setTimeout(() => {
        navigate(CONTACT_DETAILS, {item: newContact});
      }, 300);
    }
  }, [data.length]);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Icon type={'material'} color={colors.text} name={'menu'} size={30} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
      sortBy={sortBy}
    />
  );
};

export default Contacts;
