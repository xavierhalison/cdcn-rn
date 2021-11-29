import AsyncStorage from "@react-native-async-storage/async-storage";

async function initialize() {
  return await set([
    { title: "Presentes", data: [] },
    { title: "Amigos", data: [] },
  ]);
}

async function set(data) {
  try {
    await AsyncStorage.setItem("cdcn", JSON.stringify(data));
    return await get();
  } catch (error) {
    return error;
  }
}

async function get() {
  try {
    const data = await AsyncStorage.getItem("cdcn");
    if (!data) {
      return await initialize();
    } else {
      return JSON.parse(data);
    }
  } catch (error) {
    return error;
  }
}

async function reset() {
  await AsyncStorage.clear();
}

export const storage = {
  get,
  set,
  reset,
};
