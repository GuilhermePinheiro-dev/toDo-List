import { TodoHeader } from "./components/TodoHeader"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"
import { TodoContainer } from "./components/TodoContainer"
import { useTodo } from "./components/hooks/useTodo"


function App() {
  const {
    addTodo,
    setFilter,
    filter,
    filteredList,
    clearCompleted,
    toggleTodoList
  } = useTodo()

  return (
    <>
      <TodoContainer>

        <TodoHeader></TodoHeader>

        <TodoForm addTodo={addTodo}></TodoForm>

        <TodoList
          todoList={filteredList}
          toggleTodoList={toggleTodoList}
          setFilter={setFilter}
          filter={filter}
          clearCompleted={clearCompleted}></TodoList>
      </TodoContainer>

    </>
  )
}

export default App
