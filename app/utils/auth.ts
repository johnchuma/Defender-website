// localStorageUtils.js

export const setDataToLocalStorage = (key:string, value:string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  
  export const getDataFromLocalStorage = (key:string) => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    }
    return null;
  };
  
  export const deleteDataFromLocalStorage = (key:string) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  };
  
  export const clearLocalStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  };
  