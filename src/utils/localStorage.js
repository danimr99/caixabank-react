/**
 * Sets a value in local storage.
 *
 * @function
 * @param {string} key - Key to store in local storage.
 * @param {any} value - Value to store in local storage.
 * @throws {Error} Throws error if there is an issue setting the value in local storage.
 * @returns {void}
 */
export const setLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    throw new Error(`Error setting to local storage key ${key}.`);
  }
};

/**
 * Gets a value from local storage.
 *
 * @function
 * @param {string} key - Key to get from local storage.
 * @throws {Error} Throws error if there is an issue getting the value from local storage.
 * @returns {any} Value from local storage.
 */
export const getLocalStorageItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    throw new Error(`Error getting from local storage key ${key}.`);
  }
};

/**
 * Removes a value from local storage.
 *
 * @function
 * @param {string} key - Key to remove from local storage.
 * @throws {Error} Throws error if there is an issue removing the value from local storage.
 * @returns {void}
 */
export const removeLocalStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {
    throw new Error(`Error removing from local storage key ${key}.`);
  }
};
