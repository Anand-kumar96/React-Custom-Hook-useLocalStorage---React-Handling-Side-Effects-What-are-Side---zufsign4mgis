import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
     const [storedValue, setStoredValue] = useState(() => {
          const item = window.localStorage.getItem(stateVar);
          return item ? JSON.parse(item) : value;
        });
      
        // create a function that updates the value in local storage and updates the state
        const setValue = (value) => {
          setStoredValue(value);
          window.localStorage.setItem(stateVar, value);
        }
      
        // return the current value and the function to update it
        return [storedValue, setValue];
};

export default useLocalStorage;
