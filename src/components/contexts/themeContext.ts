import { createContext } from "react";

export type typeTheme = "light" | "dark"

interface ThemeContextType {
    theme: typeTheme,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => {}
});