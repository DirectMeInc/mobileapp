import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  return await SecureStore.setItemAsync(key, value);
}

async function getValue(key) {
  return await SecureStore.getItemAsync(key);
}

async function deleteValue(key) {
  return await SecureStore.deleteItemAsync(key);
}

export { save, getValue, deleteValue };
