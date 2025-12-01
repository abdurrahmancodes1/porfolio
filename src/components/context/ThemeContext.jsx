import { createContext, useContext, useEffect, useState } from "react";

//creating the context

const ThemeContext = createContext();

//providing the state

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, toggleDarkMode] = useState(
    localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", isDarkMode);
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider
      value={{ isDarkMode: isDarkMode === "dark", toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

//consuming the state

export const useTheme = () => useContext(ThemeContext);
