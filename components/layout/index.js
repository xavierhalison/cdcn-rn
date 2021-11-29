import React, { useContext, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { storage } from "../../storage";

import { ViewContext } from "../../context";
import Bar from "../bar";
import EditModal from "../editModal";

export default function Layout({ children }) {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [showEditModal, setShowEditModal] = useState(true);
  const { setCurrentView, data, setData } = useContext(ViewContext);

  const SIDEBAR_DATA = [
    {
      id: 0,
      title: "Adicionar Presentes",
      action: () => setCurrentView("new-gift"),
      icon: "card-giftcard",
    },
    {
      id: 1,
      title: "Adicionar Amigos",
      action: () => setCurrentView("new-friend"),
      icon: "person-add",
    },

    {
      id: 2,
      title: "Compartilhar lista",
      action: () => alert("share"),
      icon: "share",
    },
  ];

  const allData = [];

  if (data) {
    data.forEach((section) => {
      allData.push(...section.data);
    });
  }

  const showContextMenu = allData.some(({ selected }) => selected);
  const showEditMenu = allData.filter(({ selected }) => selected).length > 1;

  const CONTEXT_MENU = [
    {
      id: 0,
      title: "Marcar",
      icon: "check",
      disabled: false,
      action: () => handleMark(),
    },
    {
      id: 1,
      title: "Editar",
      icon: "edit",
      disabled: showEditMenu,
      action: () => handleEdit(),
    },
    {
      id: 2,
      title: "Remover",
      icon: "delete",
      disabled: false,
      action: () => handleRemove(),
    },
  ];

  const handleMark = async () => {
    const currentStorage = await storage.get();

    currentStorage.forEach((section) => {
      section.data.forEach((item) => {
        if (item.selected) item.marked = !item.marked;
      });
    });

    const newStorage = await storage.set(currentStorage);
    setData(newStorage);
  };

  const handleEdit = async () => {};

  const handleRemove = async () => {
    const currentStorage = await storage.get();

    currentStorage.forEach((section) => {
      const newSection = section.data.filter((item) => !item.selected);
      section.data = newSection;
    });

    const newStorage = await storage.set(currentStorage);
    setData(newStorage);
  };

  const renderSidebarItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.sidebarItem}
        onPress={() => {
          item.action();
          setSidebarOpened(false);
        }}
      >
        <Text>{item.title}</Text>
        <Icon name={item.icon} size={28} color={"#000"} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Bar menuAction={() => setSidebarOpened(true)} />
        <View style={styles.content}>{children}</View>
      </View>
      {sidebarOpened && (
        <>
          <View style={styles.sidebarOverlay}></View>
          <View style={styles.sidebar}>
            <TouchableOpacity
              style={styles.menuIcon}
              onPress={() => setSidebarOpened(false)}
            >
              <Icon name="menu" size={28} color="#000" />
            </TouchableOpacity>
            <FlatList
              data={SIDEBAR_DATA}
              renderItem={renderSidebarItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </>
      )}
      {showContextMenu && (
        <View style={styles.contextMenu}>
          {CONTEXT_MENU.map(({ title, icon, disabled, action, id }) =>
            disabled ? (
              <></>
            ) : (
              <TouchableOpacity
                style={styles.contextItem}
                onPress={() => action()}
                key={id}
              >
                <Text>{title}</Text>
                <Icon name={icon} size={28} color="#000" />
              </TouchableOpacity>
            )
          )}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  sidebar: {
    position: "absolute",
    top: 40,
    backgroundColor: "white",
    borderRightWidth: 1,
    height: "100%",
    width: "90%",
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  sidebarOverlay: {
    position: "absolute",
    top: 40,
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
  sidebarItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    marginBottom: 15,
    borderColor: "lightgray",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuIcon: {
    position: "absolute",
    right: 30,
    top: 0,
  },
  contextMenu: {
    height: 100,
    borderTopWidth: 1,
    flexDirection: "row",
  },
  contextItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
