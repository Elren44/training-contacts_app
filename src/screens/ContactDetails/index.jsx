import {useNavigation, useRoute} from '@react-navigation/native';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';
import {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '../../components/common/Icon';
import colors from '../../assets/theme/colors';

const ContactDetails = () => {
  const {params: {item = {}} = {}} = useRoute();
  // console.log(item);

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
              <TouchableOpacity>
                <Icon
                  color={colors.grey}
                  size={21}
                  type="material"
                  name="delete"
                />
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item]);

  return <ContactDetailsComponent contact={item} />;
};

export default ContactDetails;
