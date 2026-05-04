import { useEffect, useState, type FormEvent } from "react";
import axios from "axios";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [form, setForm] = useState({ text: "" });

  const API_URL = "http://localhost:3000/";

  const fetchTodoList = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      setTodoList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const addTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post(`${API_URL}`, form);

      setForm({ text: "" });

      await fetchTodoList();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodoList = async (id: number, completed: boolean) => {
    try {
      await axios.put(`${API_URL}${id}`, { completed });
      await fetchTodoList();
    } catch (error) {
      console.log(error);
    }
  };

  const removeTodoList = async (id: number) => {
    try {
      await axios.delete(`${API_URL}${id}`);
      await fetchTodoList();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredList = todoList.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const clearCompleted = async () => {
    try {
      await axios.delete(`${API_URL}`);
      await fetchTodoList();
    } catch (error) {
      console.log(error);
    }
  };
  return {
    addTodo,
    setForm,
    form,
    setFilter,
    filter,
    filteredList,
    clearCompleted,
    toggleTodoList,
    removeTodoList,
    fetchTodoList,
  };
};
