import { Link } from 'react-router-dom'
import catagoryFram from '../../assets/catagory/fram/catagoryCard.png'
import allCardFram from '../../assets/catagory/fram/allCardFram.png'
 import LandscapePainting from '../../assets/catagory/Landscape Painting.jpg'



import { FaStar } from "react-icons/fa";

function AllCardItem() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 [&>div]:mx-auto'>
        {/* card one */}
        <div className="relative w-[380px] h-[280px] hover:scale-105 ease-linear duration-200">
         <img src={catagoryFram} alt="" className='absolute z-10 rounded-lg' /> 
         <img src={LandscapePainting} alt=""  className='absolute w-[300px] pb-5 top-2/4 -translate-y-2/4 -translate-x-2/4 left-2/4'/>

          {/* text and button   */}
          <Link className='absolute flex justify-center items-center z-40 bg-[#bcbcbc0F] rounded-2xl w-full h-full hover:bg-[#bcbcbc33] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
              text-sky-500 border-2  z-50 active:scale-95'>View Details</button>
                </Link>
                
                <div className='absolute flex justify-center items-center z-50 bottom-3 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                    <h2 >Landscape Painting</h2 >
                </div>

         {/* text and button   */}
                <div className='absolute -bottom-4 flex items-center justify-between w-full px-7'>
                <p>Price : $789</p>
                <p className='flex items-center space-x-2'>Rating : <span>5</span> <FaStar></FaStar></p>
                 
                </div> 
        </div> 
        {/* card one */}
     

        {/* card two */}
        <div className="relative w-[380px] h-[280px] hover:scale-105 ease-linear duration-200">
         <img src={allCardFram} alt="" className='absolute z-10 rounded-lg' /> 
         <img src={LandscapePainting} alt=""  className='absolute w-[300px] pb-5 top-2/4 -translate-y-2/4 -translate-x-2/4 left-2/4'/>

          {/* text and button   */}
          <Link className='absolute flex justify-center items-center z-40 bg-[#bcbcbc0F] rounded-2xl w-full h-full hover:bg-[#bcbcbc33] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
              text-sky-500 border-2  z-50 active:scale-95'>View Details</button>
                </Link>
                
                <div className='absolute flex justify-center items-center z-50 bottom-3 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                    <h2 >Landscape Painting</h2 >
                </div>

         {/* text and button   */}
                <div className='absolute -bottom-4 flex items-center justify-between w-full px-7'>
                <p>Price : $789</p>
                <p className='flex items-center space-x-2'>Rating : <span>5</span> <FaStar></FaStar></p>
                 
                </div> 
        </div> 
        {/* card two */}
        <div className="relative w-[380px] h-[280px] hover:scale-105 ease-linear duration-200">
         <img src={allCardFram} alt="" className='absolute z-10 rounded-lg' /> 
         <img src={LandscapePainting} alt=""  className='absolute w-[300px] pb-5 top-2/4 -translate-y-2/4 -translate-x-2/4 left-2/4'/>

          {/* text and button   */}
          <Link className='absolute flex justify-center items-center z-40 bg-[#bcbcbc0F] rounded-2xl w-full h-full hover:bg-[#bcbcbc33] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
              text-sky-500 border-2  z-50 active:scale-95'>View Details</button>
                </Link>
                
                <div className='absolute flex justify-center items-center z-50 bottom-3 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                    <h2 >Landscape Painting</h2 >
                </div>

         {/* text and button   */}
                <div className='absolute -bottom-4 flex items-center justify-between w-full px-7'>
                <p>Price : $789</p>
                <p className='flex items-center space-x-2'>Rating : <span>5</span> <FaStar></FaStar></p>
                 
                </div> 
        </div> 
        {/* card two */}
        <div className="relative w-[380px] h-[280px] hover:scale-105 ease-linear duration-200">
         <img src={allCardFram} alt="" className='absolute z-10 rounded-lg' /> 
         <img src={LandscapePainting} alt=""  className='absolute w-[300px] pb-5 top-2/4 -translate-y-2/4 -translate-x-2/4 left-2/4'/>

          {/* text and button   */}
          <Link className='absolute flex justify-center items-center z-40 bg-[#bcbcbc0F] rounded-2xl w-full h-full hover:bg-[#bcbcbc33] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
              text-sky-500 border-2  z-50 active:scale-95'>View Details</button>
                </Link>
                
                <div className='absolute flex justify-center items-center z-50 bottom-3 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                    <h2 >Landscape Painting</h2 >
                </div>

         {/* text and button   */}
                <div className='absolute -bottom-4 flex items-center justify-between w-full px-7'>
                <p>Price : $789</p>
                <p className='flex items-center space-x-2'>Rating : <span>5</span> <FaStar></FaStar></p>
                 
                </div> 
        </div> 
    </div>
  )
}

export default AllCardItem
