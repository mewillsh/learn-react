import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  let addValue = ()=>{
    if(counter>=20){
      setCounter(20)
    }
    else{
      setCounter(counter+1)
    }
  }
  let removeValue = ()=>{
    if(counter<=0){
      setCounter(0)
    }
    else{
      setCounter(counter-1)
    }
  }
  return (
    <>
    <h1>Total Click are {counter}</h1>
    <button onClick={addValue}>PLUS</button>
    <button onClick={removeValue}>MINUS</button>
    </>
  )
}

export default App