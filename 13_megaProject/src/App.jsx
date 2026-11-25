import { useState } from 'react'
import './App.css'
import conf from './conf/conf'
function App() {
  const [count, setCount] = useState(0)

  return (
    <h1>This is Coming from env variable {conf.appwriteUrl}</h1>
  )
}

export default App
