export const setLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.error(`Error setting to local storage key ${key}`);
  }
};

export const getLocalStorageItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    console.error(`Error getting from local storage key ${key}`);
  }
};

export const removeLocalStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {
    console.error(`Error removing from local storage key ${key}`);
  }
};
