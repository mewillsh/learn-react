import { useState } from 'react'
import './App.css'
import { Inputbox } from './components'
import UseFetchCurrency from './hooks/UseFetchCurrency'
function App() {
  
  let [from, setFrom] = useState("inr")
  let [to, setTo] = useState("usd")
  let [current, setCurrent] = useState(1)
  let [converted, setConverted] = useState(0)
  let list = UseFetchCurrency(from)
  let countryCode = Object.keys(list)
  function converter(){
    let calculate = current * Number(list[to])
    setConverted(calculate)
  }
  return (
    <>
      <div className="h-screen bg-cover bg-center flex items-center justify-center"
  style={{backgroundImage: "url('https://wallpaperbat.com/img/2080854-foreign-exchange.jpg')"}}>
      <form onSubmit={(e)=>{
        e.preventDefault();
        converter()
      }} className="bg-white/90 p-6 rounded-xl shadow-lg flex flex-col gap-4">
            <Inputbox label="From Currency" currenyOption={countryCode} amount={current} onAmountChange={(amount)=>setCurrent(amount)} selectOption={from} amountDisabled={false} onCurrencyChange={(currency)=>setFrom(currency)}/>
            <Inputbox label="To Currency" currenyOption={countryCode} amount={converted} onCurrencyChange={(currency)=>setTo(currency)} selectOption={to} amountDisabled={true}/>
          <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg'>Submit</button>
      </form>
      </div>
    </>
  )
}

export default App
