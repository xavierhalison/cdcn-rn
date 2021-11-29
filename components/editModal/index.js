import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";

function EditModal({ visible }) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true} style={styles.modal}>
      <View style={styles.modalOverlay}></View>
      <View style={styles.modalBox}>
        <Text>teste</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center"

  },
  modalOverlay: {
    backgroundColor: "#000",
    height: "100%",
    width: "100%",
    opacity: 0.5,
    position: "absolute",
  },
  modalBox: {
    width: "80%",
    height: "80%",
    backgroundColor: "#ffffff",
  },
});

export default EditModal;
