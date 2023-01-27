import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {

    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined") {
          return value;
        }
        try {
          const item = window.localStorage.getItem(stateVar);
          return item ? JSON.parse(item) : value;
        } catch (error) {
          console.log(error);
          return value;
        }
      });

      const setValue = (value) => {
        try {
          const valueToStore = value instanceof Function ? value(storedValue) : value;
          setStoredValue(valueToStore);
          if (typeof window !== "undefined") {
            window.localStorage.setItem(stateVar, JSON.stringify(valueToStore));
          }
        } catch (error) {
          console.log(error);
        }
      };

      return [storedValue, setValue];
};

export default useLocalStorage;
