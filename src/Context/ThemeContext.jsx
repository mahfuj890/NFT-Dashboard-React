import { useState, useEffect, createContext } from "react";

const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  const [switchbox, setSwitchbox] = useState(true);

  const handleChangeSWitch = () => {
    if (switchbox) {
      setSwitchbox(false);
      localStorage.setItem("data-theme", "light");
    } else {
      setSwitchbox(true);
      localStorage.setItem("data-theme", "dark");
    }
  };

  useEffect(() => {
    const getThemeColor = localStorage.getItem("data-theme");

    if (getThemeColor == "light") {
      localStorage.setItem("data-theme", "light");
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
      setSwitchbox(false);
    } else {
      localStorage.setItem("data-theme", "dark");
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
      setSwitchbox(true);
    }
  }, [switchbox]);
  return (
    <ThemeContext.Provider
      value={{
        switchbox,
        handleChangeSWitch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
