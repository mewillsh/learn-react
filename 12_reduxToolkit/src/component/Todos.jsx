import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeTodo, updateTodo, toggleTodo } from "../features/todo/todoSlice"


function Todos() {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch();
    const [todoMsg, setTodoMsg] = useState("")
    const [editingId, setEditingId] = useState(null)
    return (
        <>
            {
                todos.map((curr) => (
                    < div key={curr.id}
                        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${curr.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                            }`
                        }
                    >
                        <input
                            type="checkbox"
                            className="cursor-pointer"
                            checked={curr.complete}
                            onChange={() => dispatch(toggleTodo(curr.id))}
                        />
                        <input
                            type="text"
                            className={`border outline-none w-full bg-transparent rounded-lg ${curr.id == editingId ? "border-black/10 px-2" : "border-transparent"
                                } ${curr.complete ? "line-through" : ""}`}
                            value={curr.id == editingId ? todoMsg : curr.title}
                            onChange={(e) => setTodoMsg(e.target.value)}
                            readOnly={editingId !== curr.id}
                        />
                        {/* Edit, Save Button */}
                        <button
                            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                            onClick={() => {
                                if (curr.complete) return;
                                if (curr.id == editingId) {
                                    dispatch(updateTodo({ id: curr.id, title: todoMsg, complete: curr.complete }));
                                    setEditingId(null)
                                }
                                else {
                                    setTodoMsg(curr.title)
                                    setEditingId(curr.id)
                                }
                            }}
                            disabled={curr.complete}
                        >
                            {editingId == curr.id ? "📁" : "✏️"}
                        </button>
                        {/* Delete Todo Button */}
                        <button
                            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                            onClick={() => dispatch(removeTodo(curr.id))}
                        >
                            ❌
                        </button>
                    </div >
                ))}
        </>)
}

export default Todos