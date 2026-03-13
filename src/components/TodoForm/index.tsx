export const TodoForm = () => {
    return (
        <form className="relative mb-10">
            <span className="absolute h-6 w-6 border border-purple-800 top-1/2 transform: -translate-y-1/2 left-6 rounded-full cursor-pointer"></span>
            <input
                type="text"
                name="todo"
                placeholder="Write a new todo..."
                className="bg-navy-900 rounded-md text-white outline-none w-full pl-16 py-6 text-lg" />
        </form>
    )
}