import { useState } from 'react'
import UserContextProvider from './contex/UserContextProvider'
import Login from './component/login'
import Profile from './component/profile'

function App() {

  return (
    <UserContextProvider>
      <h1>This this the APP content</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
