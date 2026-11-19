import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import {Main, About , Contact,User , GithubCard} from './components'
import Layout from './layout.jsx'; 
import {dataLoader} from './components/github/GithubCard.jsx';

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
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'user',
        element: <User/>
      },
      {
        path: 'user/:userID',
        element: <User/>
      },
      {
        path: "github",
        element : <GithubCard/>,
        loader : dataLoader
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
