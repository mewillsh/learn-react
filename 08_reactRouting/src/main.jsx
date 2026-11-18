import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import {Main, About} from './components'
import Layout from './layout.jsx';

let router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        index: true,
        element : <Main/>
      },
      {
        path: 'about',
        element : <About/>,
      },
      {
        path: 'about/company',
        element: <h1>This is company DATA</h1>
      }      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
