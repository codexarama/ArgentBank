/////////////////////////////////////////////////////////////////////////////////
// LOCAL STORAGE methods ///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

/**
 * getValueFromLocalStorage
 * @param   {string}    key       [value name]
 * @return  {string}    key       [value]
 */
export const getValueFromLocalStorage = (key) => localStorage.getItem(key);

/**
 * setValueToLocalStorage description
 * @param   {string}    key       [value name]
 * @param   {string}    value     [value]
 * @return  {object}    storage   [value added to local storage]
 */
export const setValueToLocalStorage = (key, value) =>
  localStorage.setItem(key, value);

/**
 * removeValueFromLocalStorage
 * @param   {string}    key       [value name]
 * @return  {object}    storage   [value removed from local storage]
 */
export const removeValueFromLocalStorage = (key) =>
  localStorage.removeItem(key);

/**
 * clearLocalStorage
 * @param   {string}    key       [value name]
 * @return  {object}    storage   [empty local storage]
 */
export const clearLocalStorage = () => localStorage.clear();

/////////////////////////////////////////////////////////////////////////////////
// SESSION STORAGE methods //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

/**
 * getValueFromLocalStorage
 * @param   {string}    key       [value name]
 * @return  {string}    key       [value]
 */
export const getValueFromSessionStorage = (key) => sessionStorage.getItem(key);

/**
 * setValueToSessionStorage description
 * @param   {string}    key       [value name]
 * @param   {string}    value     [value]
 * @return  {object}    storage   [value added to session storage]
 */
export const setValueToSessionStorage = (key, value) =>
  sessionStorage.setItem(key, value);

/**
 * removeValueFromLocalStorage
 * @param   {string}    key       [value name]
 * @return  {object}    storage   [value removed from session storage]
 */
export const removeValueFromSessionStorage = (key) =>
  sessionStorage.removeItem(key);

/**
 * removeValueFromLocalStorage
 * @param   {string}    key       [value name]
 * @return  {object}    storage   [empty session storage]
 */
export const clearSessionStorage = () => sessionStorage.clear();

/////////////////////////////////////////////////////////////////////////////////
// get DATA FROM LOCAL || SESSION STORAGE ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

export const token =
  getValueFromLocalStorage('TOKEN') || getValueFromSessionStorage('TOKEN');

export const user =
  getValueFromLocalStorage('USER') || getValueFromSessionStorage('USER');
