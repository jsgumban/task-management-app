import { useState } from 'react';

// Custom hook to manage local storage
// It initializes the state with a value from localStorage or a default initial value
// and provides a function to update both the state and localStorage.
function useLocalStorage(key, initialValue) {
	
	
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

	// Function to set the value in both state and localStorage
  const setStoredValue = (newValue) => {
    try {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [value, setStoredValue];
}

export default useLocalStorage;