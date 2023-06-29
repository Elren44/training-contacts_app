import {View, Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import {useNavigation} from "@react-navigation/native";
import {useEffect} from "react";
import colors from "../../assets/theme/colors";
import {Icon} from "../../components/common/Icon";

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation()

  useEffect(() => {
   setOptions({headerLeft: ()=> <TouchableOpacity
     onPress={() => toggleDrawer()}
     >
       <Icon type={"material"} color={colors.text} name={"menu"} size={30}/>
   </TouchableOpacity>})
  }, []);


  return (
    <Container>
      <Text>Контакты</Text>
    </Container>
  );
};

export default Contacts;
