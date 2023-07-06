import React from 'react';
import {Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Icon} from '../Icon';
import PropTypes from 'prop-types';

export const AppModal = ({
  modalVisible,
  setModalVisible,
  title,
  modalBody,
  modalFooter,
  closeOnTouchOutside,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => {
          if (closeOnTouchOutside) {
            setModalVisible(false);
          }
        }}
        style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="close" size={25} />
              </TouchableOpacity>

              <Text style={styles.title}>{title || 'Контакты'}</Text>
              <View style={{width: '40%'}} />
            </View>
            <View style={styles.footerSeparator} />
            <View style={styles.body}>{modalBody}</View>
            {modalFooter}

            {!modalFooter && (
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

AppModal.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
};

AppModal.defaultProps = {
  closeOnTouchOutside: true,
};
