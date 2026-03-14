import React, { useState } from "react";
import  {ThemeContext, type typeTheme } from "./themeContext";


interface ThemeProviderProps {
    children: React.ReactNode
}


export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [theme, setTheme] = useState<typeTheme>("dark")

    const toggleTheme = () => {
        setTheme(prev => prev === "dark" ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

