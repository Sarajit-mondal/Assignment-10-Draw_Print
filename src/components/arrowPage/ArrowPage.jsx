import React from 'react'
import { Link } from 'react-router-dom'

function ArrowPage() {
  return (
    <div className='flex h-screen justify-center items-center'>
     <div className='max-w-60 text-center space-y-5'>
     <h2 className='text-3xl font-bold'>Oops!</h2>
      <p>404 page not found</p>
      <p>The page your are looking for has been remove had its name changed or is temporarily unavailable.</p>
      <Link to='/' className='btn'>Go Home</Link>
     </div>
    </div>
  )
}

export default ArrowPage
