import {View, Text} from 'react-native';
import {CreateContactComponent} from '../../components/CreateContactComponent';
import {useContext, useEffect, useRef, useState} from 'react';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CONTACTS_LIST} from '../../constants/routeNames';
import uploadimage from '../../helpers/uploadimage';

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {error, loading},
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [localFile, setLocalFile] = useState(null);
  const {navigate} = useNavigation();
  const sheetRef = useRef(null);
  const {params} = useRoute();

  useEffect(() => {
    if (params?.contact) {
      const {first_name: firstName} = params?.contact;
      setForm(...form, firstName);
    }
  }, []);

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if (localFile?.size) {
      setIsUploading(true);
      uploadimage(localFile)((url) => {
        setIsUploading(false);
        createContact({...form, contactPicture: url})(contactsDispatch)(() => {
          navigate(CONTACTS_LIST);
        });
      })((err) => {
        // console.log('firebase error: ', err);
        setIsUploading(false);
      });
    } else {
      createContact(form)(contactsDispatch)(() => {
        navigate(CONTACTS_LIST);
      });
    }
  };
  const toggleIsFavorite = () => {
    setForm({...form, isFavorite: !form.isFavorite});
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
  };

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      setForm={setForm}
      loading={loading || isUploading}
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
