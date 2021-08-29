import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export function ProvideTheme({children}) {
    const [theme, setTheme] = useState(`light`);
    
    useEffect(() => {
        if (localStorage.getItem("theme")) {
            setTheme(localStorage.getItem("theme"));
        }
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const setLightTheme = () => {
        setTheme("light");
    }

    const setDarkTheme = () => {
        setTheme("dark");
    }
    
    return (
      <ThemeContext.Provider value={{ setLightTheme, setDarkTheme, theme }}>
        <div className={theme}>{children}</div>
      </ThemeContext.Provider>
    );
}
