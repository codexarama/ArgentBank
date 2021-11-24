// LOCAL STORAGE methods
export const getValueFromLocalStorage = (key) => localStorage.getItem(key);
export const setValueToLocalStorage = (key, value) =>
  localStorage.setItem(key, value);
export const removeValueFromLocalStorage = (key) =>
  localStorage.removeItem(key);
export const clearLocalStorage = () => localStorage.clear();

// SESSION STORAGE methods
export const getValueFromSessionStorage = (key) => sessionStorage.getItem(key);
export const setValueToSessionStorage = (key, value) =>
  sessionStorage.setItem(key, value);
export const removeValueFromSessionStorage = (key) =>
  sessionStorage.removeItem(key);
export const clearSessionStorage = () => sessionStorage.clear();

// get DATA FROM LOCAL || SESSION STORAGE
export const token =
  getValueFromLocalStorage('TOKEN') || getValueFromSessionStorage('TOKEN');
export const user =
  getValueFromLocalStorage('USER') || getValueFromSessionStorage('USER');
