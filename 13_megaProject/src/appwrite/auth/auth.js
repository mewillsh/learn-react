import { Client, Account, ID } from "appwrite";
import conf from "../../conf/conf"
class AuthObj{
    client = new Client()
    account
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId); 
        this.account = new Account(this.client)
    }
    async singUp({email,password,name}){
        try{
            const user = await this.account.create({
                userId:ID.unique(),
                email:email,
                password:password,
                name:name
            })
            if(user){
                this.login(email,password)
            }
            else{
                return user
            }
        }
        catch(e){
            throw e
        }
    }
    async login ({email,password}){
        try{
            const session = await this.account.createEmailPasswordSession({
                email:email,
                password:password
            })
            return session
        }
        catch(e){
            throw e
        }
    }
    async getCurrentUser(){
        try {
            const user = await this.account.get()
            console.log(`User is Authenticated ${user}`)
            return user
        } catch (error) {
            console.log(`User is not Autheticated ${error}`)
            return null
        }
    }
    async logOut(){
        try{
            await this.account.deleteSessions()
            return true
        }
        catch(error){
            console.log(error)
            return false
        }
    }
}
const AuthService = new AuthObj()
export default AuthService