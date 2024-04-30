import React from 'react'
import CreftItemSection from '../components/home/CreftItemSection'
import AllCategory from '../components/home/AllCategory'
import OurServices from '../components/home/OurServices'
import SeeOurleteastWorks from '../components/home/SeeOurleteastWorks'

function Home() {

  return (
    <div className='mb-10'>

      <h1 className='text-3xl font-bold mt-10 mb-8 text-center  underline'><span className='underline text-sky-500 font-extrabold'>Craft</span> items section</h1>
      <CreftItemSection></CreftItemSection>
      <h1 className='text-3xl text-center  mt-16 mb-8  font-bold my-12 underline'><span className='underline text-sky-500 font-extrabold'>Art & Craft</span>  Categories Section</h1>
      <AllCategory></AllCategory>
      <h1 className='text-3xl text-center  mt-20 mb-8  font-bold  underline'><span className='underline text-sky-500 font-extrabold'>Our Services </span>
        Include Creative,Digital,
        Video,<span className='underline text-sky-500 font-extrabold'>Paint Artist</span>Gallery</h1>
      <OurServices></OurServices>

      <h1 className='text-3xl font-bold mt-20 mb-12 text-center underline'>See Our <span className='underline text-sky-500 font-extrabold'> Latest </span> Works</h1>
      <SeeOurleteastWorks></SeeOurleteastWorks>
    </div>
  )
}

export default Home
