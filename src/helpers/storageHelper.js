import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorageData = async (name) => {
  try {
    const value = await AsyncStorage.getItem(name);
    return value !== null ? value : null;
  } catch (e) {
    // error reading value
    return null;
  }
};

export const getStorageObjData = async (name) => {
  try {
    const jsonValue = await AsyncStorage.getItem(name);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    return null;
  }
};

export const setStorageData = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, value);
    return await getStorageData(name);
  } catch (e) {
    // saving error
    return null;
  }
};

export const setStorageObjData = async (name, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(name, jsonValue);
    return await getStorageObjData(name);
  } catch (e) {
    // saving error
    return null;
  }
};

export const clearStorageData = async (name) => {
  try {
    await AsyncStorage.removeItem(name);
    return true;
  } catch (e) {
    // error reading value
    return false;
  }
};

export const clearAllStorageData = async (name) => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (e) {
    // error reading value
    return false;
  }
};
