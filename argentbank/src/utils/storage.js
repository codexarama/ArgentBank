// LOCAL STORAGE
export const getValueFromLocalStorage = (key) => localStorage.getItem(key);
export const setValueToLocalStorage = (key, value) =>
  localStorage.setItem(key, value);
export const removeValueFromLocalStorage = (key) =>
  localStorage.removeItem(key);
export const clearLocalStorage = () => localStorage.clear();

// SESSION STORAGE
export const getValueFromSessionStorage = (key) => sessionStorage.getItem(key);
export const setValueToSessionStorage = (key, value) =>
  sessionStorage.setItem(key, value);
export const removeValueFromSessionStorage = (key) =>
  sessionStorage.removeItem(key);
export const clearSessionStorage = () => sessionStorage.clear();

// DATA FROM LOCAL || SESSION STORAGE
export const token =
  getValueFromSessionStorage('TOKEN') || getValueFromLocalStorage('TOKEN');
export const user =
  getValueFromSessionStorage('USER') || getValueFromLocalStorage('USER');
// export const firstName = user.split(' ')[0];
// export const lastName = user.split(' ')[1];
