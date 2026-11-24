import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
    // sabsa pehale edit todo click hoga jiska default value false rahega agar false hua to wo true me
    // convert kar dia jaaega and then text edit hoga fir edit save karne ke liye jab phir se same 
    // button ko click kiya jaaega to abhi edit todo true hai to wo state me jaake change kardega
    // and then phir se edit false kar diya jaaega
    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const [todoMsg,setTodoMsg] = useState(todo.title)
    const {updateTodo,deleteTodo,toggleTodo} = useTodo()

    const editTodo = ()=>{
        updateTodo({...todo,title:todoMsg},todo.id)
        setIsTodoEditable(false)
    }
    const toggleTodoList = ()=>{
        toggleTodo(todo.id)
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.done ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.done}
                onChange={toggleTodoList}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.done ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.done) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.done}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;

