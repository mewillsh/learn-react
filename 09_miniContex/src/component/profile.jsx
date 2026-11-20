import { useContext } from "react";
import UserContext from "../contex/UserContext";

function Profile(){
    let {user} = useContext(UserContext)
    let statement = "User Not Provided"
    if(user){
        statement = `Hello How are you mr. ${user.username}`
    }
    return(
        <>
            <h1>{statement}</h1>
        </>
    )
}

export default Profile