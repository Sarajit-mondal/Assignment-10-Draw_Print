import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/header/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-between min-h-screen'>
    <header className=' '>
     <NavBar></NavBar>
    </header>
    <main className='w-11/12 mx-auto max-w-[1280px]'>
      <Outlet></Outlet>
    </main>
    <footer>
      <h1>This is out footer</h1>
    </footer>
    </div>
  )
}

export default App
