import React from 'react'
import CreftItemSection from '../components/home/CreftItemSection'
import AllCategory from '../components/home/AllCategory'

function Home() {
  return (
    <div>
      <h1 className='text-3xl font-bold my-12 text-center md:text-left underline'><span className='underline text-sky-500 font-extrabold'>Craft</span> items section</h1>
      <CreftItemSection></CreftItemSection>
      <h1 className='text-3xl text-center md:text-left font-bold my-12 underline'><span className='underline text-sky-500 font-extrabold'>Art & Craft</span>  Categories Section</h1>
      <AllCategory></AllCategory>
    </div>
  )
}

export default Home
