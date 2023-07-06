import {View, Text} from 'react-native';
import SettingsComponent from '../../components/SettingsComponent';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const [email, setEmail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const saveSetting = (name, value) => {
    AsyncStorage.setItem(name, value);
  };

  const settingsOptions = [
    {
      title: 'Моя информация',
      subTitle: 'Настрой свой профиль',
      onPress: () => {},
    },
    {title: 'Аккаунты', subTitle: null, onPress: () => {}},
    {
      title: 'Аккаунт по умолчанию для новых контактов',
      subTitle: email,
      onPress: () => {},
    },
    {
      title: 'Отображение контактов',
      subTitle: 'Все контакты',
      onPress: () => {},
    },
    {
      title: 'Сортировать по',
      subTitle: sortBy,
      onPress: () => {
        setModalVisible(true);
      },
    },
    {
      title: 'Формат отображения ФИО',
      subTitle: 'Сначала имя',
      onPress: () => {},
    },
    {title: 'Импорт', subTitle: null, onPress: () => {}},
    {title: 'Экспорт', subTitle: null, onPress: () => {}},
    {title: 'Заблокированный номера', subTitle: null, onPress: () => {}},
    {title: 'О программе', subTitle: null, onPress: () => {}},
  ];

  const prefArr = [
    {
      name: 'Имени',
      selected: sortBy === 'Имени',
      onPress: () => {
        saveSetting('sortBy', 'Имени');
        setSortBy('Имени');
        setModalVisible(false);
      },
    },
    {
      name: 'Фамилии',
      selected: sortBy === 'Фамилии',
      onPress: () => {
        saveSetting('sortBy', 'Фамилии');
        setSortBy('Фамилии');
        setModalVisible(false);
      },
    },
  ];

  const getSettings = async () => {
    const user = await AsyncStorage.getItem('user');
    setEmail(JSON.parse(user).email);

    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <SettingsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      settingsOptions={settingsOptions}
      prefArr={prefArr}
    />
  );
};

export default Settings;
