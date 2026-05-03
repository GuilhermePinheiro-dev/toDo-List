import { useEffect, useState, type FormEvent } from "react"
import axios from "axios"

export interface Todo {
  id: number, 
  text: string,
  completed: boolean
}

export const useTodo = () => {
    const [todoList, setTodoList] = useState<Todo[]>([])
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all")
    // const [loading, setLoading] = useState(false)

    const API_URL = "http://localhost:3000/"

    const fetchTodoList =  async () => {
        // setLoading(true)
        try {
            const response = await axios.get(`${API_URL}`)
            setTodoList(response.data)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(()=> {
        fetchTodoList()
    }, [])

    const addTodo = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const todoItem = formData.get("todo") as string

        console.log(todoItem)

        if (!todoItem.trim()) return

        setTodoList(prev => [...prev, {
            id: Date.now(),
            text: todoItem,
            completed: false
        }])

        event.currentTarget.reset()

        setFilter("all")
    }

    const toggleTodoList = (id: number) => {
        const newTodoList = todoList.map(todo => {
            const completed = !todo.completed

            if (id === todo.id) {
                return {
                    ...todo,
                    completed
                };
            }

            return todo
        })
        setTodoList(newTodoList)
    }

    const removeTodoList = (id:number) => {
        const newTodoList = todoList.filter(todo => todo.id !== id)
        setTodoList(newTodoList)
    }

    const filteredList = todoList.filter(todo => {
        if (filter === "active") return !todo.completed
        if (filter === "completed") return todo.completed
        return true
    })

    const clearCompleted = () => {
        setTodoList(prev => prev.filter(todo => !todo.completed))
    }
    return {
        addTodo,
        setFilter,
        filter,
        filteredList,
        clearCompleted,
        toggleTodoList,
        removeTodoList,
        fetchTodoList
    }
}