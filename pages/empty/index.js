import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Cta from "../../components/common/cta";
import { ViewContext } from "../../context";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Empty() {
  const { setCurrentView } = useContext(ViewContext);

  return (
    <View style={styles.container}>
      <Text>Ainda não existem dados cadastrados</Text>
      <Icon style={styles.icon} name="inventory" size={100} color="#bbb" />
      <Cta onPress={() => setCurrentView("new-gift")}>
        <Text>Adicionar Presente</Text>
      </Cta>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    marginVertical: 15,
  },
});
