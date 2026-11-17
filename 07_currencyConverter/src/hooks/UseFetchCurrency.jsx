import { useState, useEffect } from "react";

function UseFetchCurrency(currency){
    let [curr, setCurrency] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setCurrency(res[currency] || {}))
        .catch(()=>setCurrency({}))
    },[currency])
    return curr
}

export default UseFetchCurrency
