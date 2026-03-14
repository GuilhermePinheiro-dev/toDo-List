import { themeConfig } from "../contexts/theme"
import { ThemeContext } from "../contexts/themeContext"
import { useContext } from "react"

interface TodoContainerProps {
    children: React.ReactNode
}


export const TodoContainer = ({ children }: TodoContainerProps) => {
    const { theme } = useContext(ThemeContext)
    return (
        <main className={`${themeConfig[theme].layout.backgroundColor} h-screen`}>
            <div className={`${themeConfig[theme].layout.heroClass}`}>
                <div className="m-auto max-w-175 p-8">{children}</div>
            </div>
        </main>
    )
}