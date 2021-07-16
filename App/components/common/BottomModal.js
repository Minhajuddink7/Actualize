import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
  modalAddRoom: {
    // flex: 0.6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 30,
  },
});

const BottomModal = ({modalOpen, setModalOpen, children}) => {
  return (
    <Modal
      isVisible={modalOpen}
      style={{justifyContent: 'flex-end', margin: 0}}
      onBackdropPress={() => {
        setModalOpen(false);
      }}>
      <View style={[styles.modalAddRoom]}>{children}</View>
    </Modal>
  );
};

export default BottomModal;
