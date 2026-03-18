import { useContext } from "react"
import { themeConfig } from "../contexts/theme"
import { ThemeContext } from "../contexts/themeContext"
import type { Todo } from "../hooks/useTodo";
import IconCheck from "../../../public/images/icon-check.svg"

interface TodoListProps {
    todoList: Todo[];
    toggleTodoList: (id: number) => void
    setFilter: (filter: 'all' | 'active' | 'completed') => void
    filter: 'all' | 'active' | 'completed'
    clearCompleted: () => void
}

export const TodoList = ({ todoList, toggleTodoList, setFilter, filter, clearCompleted }: TodoListProps) => {

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
                <ul>
                    {
                        todoList.map((todoItem) => (
                            <li key={todoItem.id} className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}>
                                <div className="flex items-center gap-4">
                                    <span className={`w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-px `}>
                                        <button
                                            onClick={() => toggleTodoList(todoItem.id)}
                                            className={`w-full h-full ${themeConfig[theme].todo.backgroundColor} border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer ${todoItem.completed ? "bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]" : ""}`}>
                                            {todoItem.completed && <img src={IconCheck} alt="icone de marcado" className="w-2 h-2 m-auto" />}
                                        </button>
                                    </span>
                                    <p className={`${themeConfig[theme].todo.textColor} ${todoItem.completed ? "line-through opacity-50" : ""}`} >{todoItem.text}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <div className={`flex justify-between p-4 text-sm ${themeConfig[theme].layout.textColor}`}>
                    <p>{todoList.length} items total</p>

                    <div className="hidden sm:flex gap-4">
                        <button onClick={() =>
                            setFilter("all")}
                            className={`${filter === 'all' ? 'text-blue-500' : ""} cursor-pointer`}>
                            All
                        </button>
                        <button onClick={() =>
                            setFilter("active")}
                            className={`${filter === 'active' ? 'text-blue-500' : ""} cursor-pointer ${theme === "dark" ? "hover:text-gray-50" : "hover:text-purple-600"}`}>Active
                        </button>
                        <button onClick={() =>
                            setFilter("completed")}
                            className={`${filter === 'completed' ? 'text-blue-500' : ""} cursor-pointer ${theme === "dark" ? "hover:text-gray-50" : "hover:text-purple-600"}`}>
                            Completed
                        </button>
                    </div>

                    <button 
                    onClick={clearCompleted}
                    className={`cursor-pointer ${theme === "dark" ? "hover:text-gray-50" : "hover:text-purple-600"}`}>Clear Completed</button>
                </div>
            </div>
            <div className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} flex justify-center gap-5 rounded-md py-4 mt-4 sm:hidden`}>
                <button
                    onClick={() => setFilter("all")}
                    className={`${filter === 'all' ? 'text-blue-500' : ""} cursor-pointer`}>
                    All
                </button>
                <button
                    onClick={() => setFilter("active")}
                    className={`${filter === 'active' ? 'text-blue-500' : ""} cursor-pointer ${theme === "dark" ? "hover:text-gray-50" : "hover:text-purple-600"}`}>
                    Active
                </button>
                <button
                    onClick={() => setFilter("completed")}
                    className={`${filter === 'completed' ? 'text-blue-500' : ""} cursor-pointer ${theme === "dark" ? "hover:text-gray-50" : "hover:text-purple-600"}`}>
                    Completed
                </button>
            </div>
        </>
    )
}