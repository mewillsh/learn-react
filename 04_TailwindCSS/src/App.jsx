import { useState } from 'react'
import './App.css'
import Card from './component/cards'

function App() {
  const [count, setCount] = useState(0)
  let Data = {
    "Name":"Bugatti",
    "Color":"red"
  }
  let currArr = [1,2,3,4,5]
  //We can send values from one component to another component with the help of PROPS
  return (
    <>
    <h3 className='text-yellow-500 font-bold bg-red-400 underline w-64 rounded-xl mx-auto my-auto'>This is Harsh Singh</h3>
    <Card name = "Harsh" obj={Data} arr = {currArr}/>
    <Card name = "Devansh" obj={Data} arr = {currArr}/>
    </>
  )
}

export default App
