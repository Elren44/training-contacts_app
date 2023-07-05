import {View, Text} from 'react-native';
import {CreateContactComponent} from '../../components/CreateContactComponent';
import {useContext, useRef, useState} from 'react';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {useNavigation} from '@react-navigation/native';
import {CONTACTS_LIST} from '../../constants/routeNames';

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {error, loading},
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const [localFile, setLocalFile] = useState(null);
  const {navigate} = useNavigation();
  const sheetRef = useRef(null);

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACTS_LIST);
    });
  };
  const toggleIsFavorite = () => {
    setForm({...form, isFavorite: !form.isFavorite});
    console.log('isFavorite ', !form.isFavorite);
  };

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
    console.log('images ', image);
  };

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      setForm={setForm}
      loading={loading}
      error={error}
      onSubmit={onSubmit}
      toggleIsFavorite={toggleIsFavorite}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};

export default CreateContact;
