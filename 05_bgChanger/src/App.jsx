import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("	#eea990")
  function colorChanger(currColor){
    setColor(currColor)
  }
  return (
    <div class="w-screen h-screen" style={{backgroundColor : color}}>
      <div class="fixed bottom-0 left-0 right-0 p-4">
  <div class="mx-auto flex max-w-md justify-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-lg shadow-xl">
    <button class="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600 hover:scale-105" onClick={()=>colorChanger("blue")}>
      Home
    </button>
    <button class="rounded-xl bg-emerald-500 px-6 py-3 font-medium text-white transition hover:bg-emerald-600 hover:scale-105" onClick={()=>colorChanger("rgb(16, 185, 129)")}>
      Search
    </button>
    <button class="rounded-xl bg-purple-500 px-6 py-3 font-medium text-white transition hover:bg-purple-600 hover:scale-105" onClick={()=>colorChanger("purple")}>
      Profile
    </button>
  </div>
</div>
    </div>
  )
}

export default App
