import { TodoHeader } from "./components/TodoHeader";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoContainer } from "./components/TodoContainer";
import { useTodo } from "./components/hooks/useTodo";

function App() {
  const {
    addTodo,
    setForm,
    form,
    setFilter,
    filter,
    filteredList,
    clearCompleted,
    toggleTodoList,
    removeTodoList,
  } = useTodo();

  return (
    <>
      <TodoContainer>
        <TodoHeader></TodoHeader>

        <TodoForm addTodo={addTodo} setForm={setForm} form={form}></TodoForm>

        <TodoList
          todoList={filteredList}
          toggleTodoList={toggleTodoList}
          setFilter={setFilter}
          filter={filter}
          clearCompleted={clearCompleted}
          removeTodoList={removeTodoList}
        ></TodoList>
      </TodoContainer>
    </>
  );
}

export default App;
