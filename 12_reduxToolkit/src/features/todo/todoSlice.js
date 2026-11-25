import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
    {id:1,
    title:"Complete your homework!",
    complete : false
    }
]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //complete body without id
        addTodo:(state,action)=>{
            let curr = {
                id:nanoid(),
                title:action.payload.title,
                complete:action.payload.complete

            }
            state.todos.push(curr)
        },
        //id
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((curr)=>curr.id != action.payload)
        },
        //full body will come title , complete , id
        updateTodo:(state,action)=>{
            state.todos = state.todos.map((currTodo)=>currTodo.id==action.payload.id?{...currTodo,...action.payload}:currTodo)
        },
        //id
        toggleTodo:(state,action)=>{
            state.todos = state.todos.map((currTodo)=>currTodo.id==action.payload?{...currTodo,complete : !currTodo.complete}:currTodo)
        }
    }
})

export const {addTodo , removeTodo, updateTodo , toggleTodo} = todoSlice.actions

export default todoSlice.reducer