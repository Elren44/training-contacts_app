import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import {AppModal} from './../common/AppModal/index';
import {Icon} from '../common/Icon';
import {scale} from 'react-native-size-matters';

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
          <View style={{gap: scale(10)}}>
            {prefArr.map(({name, selected, onPress}) => (
              <View>
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 5,
                    alignItems: 'center',
                  }}>
                  {selected && <Icon size={scale(16)} name="check" />}
                  <Text
                    style={{
                      fontSize: scale(16),
                      color: colors.text,
                      paddingLeft: selected ? scale(10) : scale(25),
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
                <View style={{padding: scale(20), gap: scale(5)}}>
                  <Text style={{color: colors.text, fontSize: scale(16)}}>
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
