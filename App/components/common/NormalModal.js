import React, {useState} from 'react';

import {Text, View, ScrollView} from 'react-native';
import Modal from 'react-native-modal';

const NormalModal = ({modalOpen, setModalOpen, children}) => {
  return (
    <Modal
      isVisible={modalOpen}
      //   style={{justifyContent: 'flex-end', margin: 0}}
      onBackdropPress={() => {
        setModalOpen(false);
      }}>
      <View
        style={{
          // flex: 0.8,
          // flex: 0.5,
          backgroundColor: '#fff',
          justifyContent: 'space-around',
          borderRadius: 16,
          paddingHorizontal: '6%',
        }}>
        {/* <ScrollView> */}
        {children}
        {/* </ScrollView> */}
      </View>
    </Modal>
  );
};

export default NormalModal;
