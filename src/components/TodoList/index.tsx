const todos = [
  { id: 1, text: "Todo 1" },
  { id: 2, text: "Todo 2" },
  { id: 3, text: "Todo 3" }
]


export const TodoList = () => {
    return (
        <div className="bg-navy-900 rounded-md">
            <ul>
                {
                    todos.map((todoItem) => (
                        <li key={todoItem.id} className="p-6 border-b border-purple-700">
                            <div className="flex items-center gap-4">
                                <button className="w-6 h-6 border border-purple-700 rounded-full cursor-pointer"></button>
                                <p className="text-gray-50">{todoItem.text}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <div className="flex justify-between p-4 text-gray-50">
                <p>{todos.length} items total</p>

                <div className="flex gap-4">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>

                <button>Clear Selected</button>
            </div>
        </div>
    )
}