import { createContext , useContext} from "react";

export const TodoContext = createContext({
    todos:[
        {   "id":1,
            "title":"Do the Loundry",
            "done":false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo :(todo,id)=>{},
    deleteTodo : (id)=>{},
    toggleTodo : (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider