import { useState,useCallback , useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [passLen , setPassLen] = useState(12)
  const [isNumber , setNumber] = useState(false)
  const [isSymbol, setSymbol] = useState(false)
  const [password , setPassword] = useState("")

  let passwordGenerator=useCallback(()=>{
    let pass = ""
    let passSet = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(isNumber){
      passSet += "1234567890"
    }
    if(isSymbol){
      passSet += "!@#$%^&*()_+"
    }
    for(let i=0;i<passLen;i++){
      let index = Math.floor((Math.random()*passSet.length)+1)
      pass+= passSet.charAt(index)
    }
    setPassword(String(pass))
  },[passLen,isNumber,isSymbol])
    let passwordRef = useRef(null)
  let copyPassword = function(){
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }
  useEffect(passwordGenerator,[passLen,isNumber,isSymbol])
  return (
    <main className="bg-slate-900 min-h-screen flex items-center justify-center">

    <div className="bg-slate-800 p-6 rounded-2xl w-[500px] shadow-xl">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
            Password Generator
        </h1>

        <div className="flex gap-2 mb-6">
            <input
                id="password"
                type="text"
                readonly
                placeholder="Generated Password"
                className="flex-1 bg-slate-700 text-white px-4 py-3 rounded-lg outline-none"
                value={password}
                readOnly
                ref={passwordRef}
            />

            <button
                id="copy"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 rounded-lg"
                onClick={copyPassword}
            >
                Copy
            </button>
        </div>

        <div class="space-y-4">

            <div>
                <label className="text-white block mb-2">
                    Length:
                    <span id="lengthValue">{passLen}</span>
                </label>

                <input
                    id="length"
                    type="range"
                    min="4"
                    max="32"
                    value={passLen}
                    className='cursor-pointer'
                    class="w-full"
                    onChange={(e)=> setPassLen(Number(e.target.value))}
                />
            </div>

            <div class="flex items-center gap-2">
                <input id="numbers" type="checkbox" defaultChecked ={isNumber} onChange={()=>{setNumber((prev)=>!prev)}}/>
                <label className="text-white" htmlFor='numbers'>Include Numbers</label>
            </div>

            <div className="flex items-center gap-2">
                <input id="symbols" type="checkbox" defaultChecked ={isSymbol} onChange={()=>{setSymbol((prev)=>!prev)}}/>
                <label className="text-white" htmlFor='symbols'>Include Symbols</label>
            </div>

            <button
                id="generate"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
                onClick={passwordGenerator}
            >
                Generate Password
            </button>

        </div>
    </div>

</main>
  )
}

export default App
