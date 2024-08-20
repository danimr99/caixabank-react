export const useLocalStorage = () => {
  const setItem = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.error(`Error setting localStorage key: ${key}`);
    }
  };

  const getItem = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      console.error(`Error getting localStorage key: ${key}`);
    }
  };

  const removeItem = (key) => {
    try {
      localStorage.removeItem(key);
    } catch {
      console.error(`Error removing localStorage key: ${key}`);
    }
  };

  return { setItem, getItem, removeItem };
};
