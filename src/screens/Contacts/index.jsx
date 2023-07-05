import {TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useContext, useEffect, useState} from "react";
import colors from "../../assets/theme/colors";
import {Icon} from "../../components/common/Icon";
import {GlobalContext} from "../../context/Provider";
import getContacts from "../../context/actions/contacts/getContacts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ContactsComponent} from "../../components/ContactsComponent";

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);

  const {contactsDispatch, contactsState:{ getContacts: {data, loading}}} = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch)
    // const getToken = async () => {
    //   const token = await AsyncStorage.getItem('token')
    //   return token
    // }
    // const token = getToken().then((token) => console.log(token))

  }, [])

  useEffect(() => {
   setOptions({headerLeft: ()=> <TouchableOpacity
     onPress={() => toggleDrawer()}
     >
       <Icon type={"material"} color={colors.text} name={"menu"} size={30}/>
   </TouchableOpacity>})
  }, []);


  return (
    <ContactsComponent modalVisible={modalVisible} setModalVisible={setModalVisible} data={data} loading={loading}/>
  );
};

export default Contacts;
