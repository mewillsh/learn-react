import { useState } from 'react'
import './App.css'
import AddTodos from './component/AddTodo'
import Todos from './component/Todos'

function App() {
  return (
    <>
    <h1>Studying About Redux-Tool-Kit</h1>
    <AddTodos/>   
    <Todos/>
    </>
  )
}

export default App
