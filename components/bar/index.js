import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ViewContext } from "../../context";

export default function Bar({ menuAction }) {
  const {title} = useContext(ViewContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menu} onPress={menuAction}>
        <Text>
          <Icon name="menu" size={28} color="#000" />
        </Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    position: "absolute",
    left: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
