import React from "react";
import { StyleSheet, TextInput } from "react-native";

function FormField(props) {
  return <TextInput {...props} style={styles.input} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 8,
  },
});

export { FormField };
