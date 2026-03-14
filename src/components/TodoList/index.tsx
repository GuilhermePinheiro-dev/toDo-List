import { useContext } from "react"
import { themeConfig } from "../contexts/theme"
import { ThemeContext } from "../contexts/themeContext"

const todos = [
    { id: 1, text: "Todo 1" },
    { id: 2, text: "Todo 2" },
    { id: 3, text: "Todo 3" }
]


export const TodoList = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
                <ul>
                    {
                        todos.map((todoItem) => (
                            <li key={todoItem.id} className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}>
                                <div className="flex items-center gap-4">
                                    <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-px">
                                        <button className={`w-full h-full ${themeConfig[theme].todo.backgroundColor} border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer`}></button>
                                    </span>
                                    <p className={`${themeConfig[theme].todo.textColor}`}>{todoItem.text}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <div className={`flex justify-between p-4 text-sm ${themeConfig[theme].layout.textColor}`}>
                    <p>{todos.length} items total</p>

                    <div className="hidden sm:flex gap-4">
                        <button className="text-blue-500">All</button>
                        <button className={`cursor-pointer ${theme === "dark" ? "hover:text-gray-50" : "hover:text-purple-600"}`}>Active</button>
                        <button className={`cursor-pointer ${theme === "dark" ? "hover:text-gray-50" : "hover:text-purple-600"}`}>Completed</button>
                    </div>

                    <button className={`cursor-pointer ${theme === "dark" ? "hover:text-gray-50" : "hover:text-purple-600"}`}>Clear Selected</button>
                </div>
            </div>
            <div className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} flex justify-center gap-5 rounded-md py-4 mt-4 sm:hidden`}>
                <button className="text-blue-500">All</button>
                <button className={`cursor-pointer ${theme === "dark" ? "hover:text-gray-50" : "hover:text-purple-600"}`}>Active</button>
                <button className={`cursor-pointer ${theme === "dark" ? "hover:text-gray-50" : "hover:text-purple-600"}`}>Completed</button>
            </div>
        </>
    )
}