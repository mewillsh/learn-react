import { useContext, useState } from "react";
import UserContext from "../contex/UserContext";
function Login(){
    let [username,setUsername] = useState("")
    let [password,setPassword] = useState("")

    let {setUser} = useContext(UserContext)

    let saveContext = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <>
        <h1>Login</h1>
        <input type="text" placeholder="UserName" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={saveContext}>Chick</button>
        </>
    )
}

export default Login