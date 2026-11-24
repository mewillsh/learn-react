import { useState , useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context'
import { TodoForm , TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState(()=>{
    return JSON.parse(localStorage.getItem("todos")) || []
  });

  const addTodo = (todo)=>{
    setTodos((prev)=>[{"id":Date.now(),...todo},...prev])
  }

  const updateTodo = (todo,id)=>{
    setTodos((prev)=>(prev.map((curr)=>curr.id === id ? {...curr, ...todo} : curr)))
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>(prev.filter((curr)=>curr.id != id)))
  }

  const toggleTodo = (id)=>{
    setTodos((prev)=>(prev.map((curr)=>curr.id==id?{...curr,done:!curr.done}:curr)))
  }

  useEffect(()=>{
    console.log("Saving:", todos);
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,updateTodo,deleteTodo,addTodo,toggleTodo }}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {
            todos.map((currTodo)=>(
              <TodoItem todo = {currTodo} key={currTodo.id}/>
            ))
          }
        </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
