export const getValueFromLocalStorage = (key) => localStorage.getItem(key)
export const setValueToLocalStorage = (key, value) => localStorage.setItem(key, value)
export const removeValueFromLocalStorage = (key) => localStorage.removeItem(key)
export const clearLocalStorage = () => localStorage.clear()