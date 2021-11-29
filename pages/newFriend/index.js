import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Cta from "../../components/common/cta";
import { FormField } from "../../components/common/formFields";
import { ViewContext } from "../../context";
import { uuidv4 } from "../../helpers";
import { storage } from "../../storage";

export default function NewFriend() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const { setCurrentView, setTitle, setData } = useContext(ViewContext);

  useEffect(() => {
    setTitle("Adicionar Amigo");
  });

  const handleSubmit = async () => {
    const currentStorage = await storage.get();

    currentStorage[1].data.push({
      name,
      contact,
      selected: false,
      marked: false,
      section: 1,
      id: uuidv4()
    });

    const newStorage = await storage.set(currentStorage);
    setData(newStorage);
    setCurrentView("list");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <FormField
        placeholder="Faqueiro"
        value={name}
        onChangeText={(n) => setName(n)}
      />
      <Text style={[styles.label, styles.labelContact]}>Descrição:</Text>
      <FormField
        placeholder="(00) 00000-0000"
        value={contact}
        onChangeText={(desc) => setContact(desc)}
        keyboardType="numeric"
      />
      <Cta customStyle={styles.submit} onPress={handleSubmit}>
        <Text>Concluído</Text>
      </Cta>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
  },
  label: {
    marginBottom: 10,
  },
  labelContact: {
    marginTop: 20,
  },
  submit: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 40,
    right: 20,
  },
});
