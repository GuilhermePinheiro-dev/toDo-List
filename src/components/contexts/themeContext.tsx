import React, { createContext, useState } from "react";


export const ThemeContext = createContext({});

interface ThemeProviderProps {
    children: React.ReactNode
}

type typeTheme = "light" | "dark"

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [theme, setTheme] = useState<typeTheme>("dark")

    const toggleTheme = () => {
        setTheme(prev => prev === "dark" ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

