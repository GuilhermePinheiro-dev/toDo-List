import { ThemeContext } from "../contexts/themeContext";
import { themeConfig } from "../contexts/theme";
import { useContext, type FormEvent } from "react";

interface TodoinputProps {
  addTodo: (event: FormEvent<HTMLFormElement>) => void;
  setForm: (form: { text: string }) => void;
  form: { text: string };
}

export const TodoForm = ({ addTodo, setForm, form }: TodoinputProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <form className="relative mb-10" onSubmit={addTodo}>
        <span
          className={`absolute h-6 w-6 border ${themeConfig[theme].todo.borderColor} top-1/2 transform: -translate-y-1/2 left-6 rounded-full cursor-pointer`}
        ></span>
        <input
          type="text"
          name="todo"
          placeholder="Write a new todo..."
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          className={`${themeConfig[theme].todo.backgroundColor} rounded-md ${themeConfig[theme].todo.textColor} outline-none w-full pl-16 py-6 text-lg`}
        />
      </form>
    </>
  );
};
