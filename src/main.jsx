import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import AboutMe from './components/AboutMe.jsx';
import Home from './components/Home.jsx';
import Intro from './components/Intro.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path="" element={<Intro/>}/>
        <Route path="/home" element={<Intro/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/go" element={<Home/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
