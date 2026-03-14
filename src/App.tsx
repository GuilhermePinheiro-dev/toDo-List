import { TodoHeader } from "./components/TodoHeader"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"
import { themeConfig } from "./components/contexts/theme"
import { ThemeContext } from "./components/contexts/themeContext"
import { useContext } from "react"

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <>
      <main className={`${themeConfig[theme].layout.backgroundColor} h-screen`}>
        <div className={`${themeConfig[theme].layout.heroClass}`}>
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
