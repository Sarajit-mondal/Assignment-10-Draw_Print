import { useState } from 'react'

import { Outlet } from 'react-router-dom'
import NavBar from './components/header/NavBar'
import Footer from './components/header/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-Lobster text-[18px] text-gray-dark flex flex-col justify-between min-h-screen'>
    <header className='bg-purple-400 '>
     <NavBar></NavBar>
    </header>
    <main className='w-11/12 mx-auto max-w-[1280px] min-h-screen'>
      <Outlet></Outlet>
    </main>
    <footer className='bg-purple-400'>
      <Footer></Footer>
    </footer>
    </div>
  )
}

export default App
