import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import EndOfPage from './components/EndOfPage'
import AboutMe from './components/AboutMe'
import { Outlet } from 'react-router-dom'
import Intro from './components/Intro'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <EndOfPage/>
      <Outlet/>
     

    </>
  )
}

export default App
