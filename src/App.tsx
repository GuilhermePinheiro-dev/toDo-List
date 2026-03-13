import { TodoHeader } from "./components/TodoHeader"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"


function App() {
  return (
    <>
      <main className="bg-navy-950 h-screen">
        <div className="bg-[url('/public/images/bg-desktop-dark.jpg')] h-80 bg-center bg-cover">
          <div className="m-auto max-w-175 p-8">
            <TodoHeader></TodoHeader>

            <TodoForm></TodoForm>

            <TodoList></TodoList>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
