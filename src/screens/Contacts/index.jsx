import {TouchableOpacity} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback, useContext, useEffect, useState} from 'react';
import colors from '../../assets/theme/colors';
import {Icon} from '../../components/common/Icon';
import {GlobalContext} from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContactsComponent from '../../components/ContactsComponent';

const Contacts = ({navigation}) => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Icon type={'material'} color={colors.text} name={'menu'} size={30} />
        </TouchableOpacity>
      ),
    });
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
