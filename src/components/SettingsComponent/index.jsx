import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import {AppModal} from './../common/AppModal/index';
import {Icon} from '../common/Icon';

const SettingsComponent = ({
  modalVisible,
  setModalVisible,
  settingsOptions,
  prefArr,
}) => {
  return (
    <>
      <AppModal
        modalVisible={modalVisible}
        modalFooter={<></>}
        closeOnTouchOutside={false}
        modalBody={
          <View style={{gap: 10}}>
            {prefArr.map(({name, selected, onPress}) => (
              <View>
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 5,
                    alignItems: 'center',
                  }}>
                  {selected && <Icon size={16} name="check" />}
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors.text,
                      paddingLeft: selected ? 10 : 25,
                    }}>
                    {name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        }
        title={'Сортировать по'}
        setModalVisible={setModalVisible}
      />
      <ScrollView style={{backgroundColor: colors.white}}>
        {settingsOptions.map(({title, subTitle, onPress}) => {
          return (
            <View key={title}>
              <TouchableOpacity onPress={onPress}>
                <View style={{padding: 20, gap: 5}}>
                  <Text style={{color: colors.text, fontSize: 16}}>
                    {title}
                  </Text>
                  {subTitle && (
                    <Text style={{color: colors.text, opacity: 0.5}}>
                      {subTitle}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
              <View
                style={{
                  height: 1,
                  backgroundColor: colors.text,
                  opacity: 0.1,
                }}></View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default SettingsComponent;
