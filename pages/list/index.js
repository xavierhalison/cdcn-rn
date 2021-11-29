import React, { useContext, useEffect } from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ViewContext } from "../../context";
import { storage } from "../../storage";

export default function List({ data }) {
  const { setTitle, setCurrentView, setData } = useContext(ViewContext);

  useEffect(() => {
    if (!data.length) {
      setCurrentView("empty");
    } else {
      setTitle("Chá de Casa Nova");
    }
  });

  async function handleSelect(section, index, selected) {
    const currentStorage = await storage.get();

    const item = currentStorage[section].data.find(({ id }) => id === index);

    const id = currentStorage[section].data.indexOf(item);

    currentStorage[section].data[id].selected = !selected;

    const newStorage = await storage.set(currentStorage);
    setData(newStorage);
  }

  const Item = ({ title, selected, index, section, marked }) => {
    return (
      <View style={styles.listItem}>
        <Text style={[marked ? styles.marked : {}]}>{title}</Text>
        <TouchableOpacity
          onPress={() => handleSelect(section, index, selected)}
        >
          <Icon
            name={selected ? "check-box" : "check-box-outline-blank"}
            size={28}
            color={marked ? "#ccc" : "#000"}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <SectionList
          sections={data}
          renderItem={({ item }) => (
            <Item
              title={item.name}
              selected={item.selected}
              index={item.id}
              section={item.section}
              marked={item.marked}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.listHeader}>{title}</Text>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  containerContextMenuOpened: {
    flex: 0.85,
  },
  listItem: {
    marginTop: 10,
    borderBottomWidth: 2,
    paddingVertical: 10,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  listHeader: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 20,
  },
  marked: {
    color: "#ccc",
    fontStyle: "italic",
    textDecorationLine: "line-through",
  },
});
