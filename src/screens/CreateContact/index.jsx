import {View, Text} from 'react-native';
import {CreateContactComponent} from '../../components/CreateContactComponent';
import {useContext, useEffect, useRef, useState} from 'react';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CONTACT_DETAILS, CONTACTS_LIST} from '../../constants/routeNames';
import uploadimage from '../../helpers/uploadimage';
import countryCodes from '../../utils/countryCodes';
import editContact from '../../context/actions/contacts/editContact';

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
  const {navigate, setOptions} = useNavigation();
  const sheetRef = useRef(null);
  const {params} = useRoute();

  useEffect(() => {
    if (params?.contact) {
      setOptions({title: 'Редактирование'});
      const {
        first_name: firstName,
        phone_number: phoneNumber,
        last_name: lastName,
        is_favorite: isFavorite,
        country_code: countryCode,
      } = params?.contact;
      setForm((prev) => {
        return {
          ...prev,
          firstName,
          isFavorite,
          phoneNumber,
          lastName,
          phoneCode: countryCode,
        };
      });

      const country = countryCodes.find((item) => {
        return item.value.replace('+', '') === countryCode;
      });

      if (country) {
        setForm((prev) => {
          return {
            ...prev,
            countryCode: country.key.toUpperCase(),
          };
        });
      }

      if (params?.contact?.contact_picture) {
        setLocalFile(params?.contact.contact_picture);
      }
    }
  }, []);

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if (params?.contact) {
      if (localFile?.size) {
        setIsUploading(true);
        uploadimage(localFile)((url) => {
          setIsUploading(false);
          editContact(
            {...form, contactPicture: url},
            params?.contact.id,
          )(contactsDispatch)((item) => {
            navigate(CONTACT_DETAILS, {item});
          });
        })((err) => {
          console.log('err :>> ', err);
          setIsUploading(false);
        });
      } else {
        editContact(form, params?.contact.id)(contactsDispatch)((item) => {
          navigate(CONTACT_DETAILS, {item});
        });
      }
    } else {
      if (localFile?.size) {
        setIsUploading(true);
        uploadimage(localFile)((url) => {
          setIsUploading(false);
          createContact({...form, contactPicture: url})(contactsDispatch)(
            () => {
              navigate(CONTACTS_LIST);
            },
          );
        })((err) => {
          setIsUploading(false);
        });
      } else {
        createContact(form)(contactsDispatch)(() => {
          navigate(CONTACTS_LIST);
        });
      }
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
