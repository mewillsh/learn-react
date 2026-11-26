import { useState, useEffect } from 'react'
import './App.css'
import AuthService from './appwrite/auth/auth'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    AuthService.getCurrentUser()
      .then((userData) => {
        if(userData){
          dispatch(login({userData}))
        }
        else{
          dispatch(logout())
        }})
      .finally(setLoading(false))
  }, [])
  return loading ? (
    <>
      <Header />
      <h1>Currently Loading the Data</h1>
      <Footer />
    </>
  ) : (
    <>
      <Header />
      <h1>Data Got Loaded Successfully</h1>
      <Footer />
    </>
  )
}

export default App
