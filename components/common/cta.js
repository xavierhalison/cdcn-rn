import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Cta({ children, onPress, customStyle }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, customStyle]}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "lightgrey",
  },
});
