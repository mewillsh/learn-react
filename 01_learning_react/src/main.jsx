import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//since <App/> these are nothing but a function so we are creating it Natively

function Localcomponent(){
  return(
    <p>This is Getting called from the Local Component</p>
  )
}

//Using component in another way

let AnotherComponent = (<a href="google.com" target='_blank'>Click here to go google </a>)

//Making React component directly which react maked after rendering

let reactComponent = React.createElement(
  'a',
  {"href":"www.google.com","id":"componentR"},
  "Click Parsed React Component"
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {AnotherComponent}
    <Localcomponent/>
    {reactComponent}
  </StrictMode>,
)
