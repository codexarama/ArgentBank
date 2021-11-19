export const getValueFromSessionStorage = (key) => sessionStorage.getItem(key)
export const setValueToSessionStorage = (key, value) => sessionStorage.setItem(key, value)
export const removeValueFromSessionStorage = (key) => sessionStorage.removeItem(key)
export const clearSessionStorage = () => sessionStorage.clear()