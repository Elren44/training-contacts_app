import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Message from '../common/Message';
import colors from '../../assets/theme/colors';
import {Icon} from '../common/Icon';
import styles from './styles';
import {CONTACT_DETAILS, CREATE_CONTACT} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

// const defaultAvatar = "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-12.jpg"
const ContactsComponent = ({data, loading, sortBy}) => {
  const {navigate} = useNavigation();
  const ListEmptyComponent = () => {
    return (
      <View style={{padding: 100}}>
        <Message info message={'Нет данных.'} />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {contact_picture, first_name, last_name, phone_number, country_code} =
      item;
    return (
      <TouchableOpacity
        style={styles.contactItemContainer}
        onPress={() => {
          navigate(CONTACT_DETAILS, {item});
        }}>
        <View style={styles.contactItem}>
          {contact_picture ? (
            <Image
              style={styles.contactItemAvatar}
              source={{uri: contact_picture}}
            />
          ) : (
            // <Image style={styles.contactItemAvatar} source={{uri: defaultAvatar}}/>
            <View
              style={[
                styles.contactItemAvatar,
                {backgroundColor: colors.grey},
              ]}>
              <Text style={[styles.name, {color: colors.white}]}>
                {first_name[0]}
              </Text>
              <Text style={[styles.name, {color: colors.white}]}>
                {last_name[0]}
              </Text>
            </View>
          )}

          <View>
            <View>
              <Text style={styles.name}>
                {first_name} {last_name}
              </Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`+${country_code} ${phone_number}`}</Text>
          </View>
        </View>
        <Icon
          name={'angle-right'}
          type={'fontisto'}
          size={18}
          color={colors.grey}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{backgroundColor: colors.white, flex: 1}}>
        {loading && (
          <View style={{padding: 100}}>
            <ActivityIndicator size={'large'} color={colors.primary} />
          </View>
        )}
        {!loading && (
          <View style={{paddingVertical: 20}}>
            <FlatList
              data={
                sortBy
                  ? data.sort((a, b) => {
                      if (sortBy === 'Имени') {
                        if (b.first_name > a.first_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }

                      if (sortBy === 'Фамилии') {
                        if (b.last_name > a.last_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                    })
                  : data
              }
              keyExtractor={(item) => String(item.id)}
              ListEmptyComponent={ListEmptyComponent}
              ItemSeparatorComponent={() => (
                <View
                  style={{height: 0.5, backgroundColor: colors.grey}}></View>
              )}
              renderItem={renderItem}
              ListFooterComponent={<View style={{height: 100}}></View>}
            />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.createContactBtn}
        onPress={() => navigate(CREATE_CONTACT)}>
        <Icon name="plus" size={20} color={colors.white} />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
