import { themeConfig } from "../contexts/theme"
import { ThemeContext } from "../contexts/themeContext"
import { useContext } from "react"

export const TodoHeader = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)
    
    return (
        <header className="flex justify-between mb-6 pt-20">
            <h1 className={`font-bold text-4xl sm:text-[2.5rem] text-white tracking-[1rem]`}>TODO</h1>

            <button className="cursor-pointer w-8 h-8" onClick={toggleTheme}>
                <img src={themeConfig[theme].Icon} alt="Alternar tema" />
            </button>
        </header>
    )
}