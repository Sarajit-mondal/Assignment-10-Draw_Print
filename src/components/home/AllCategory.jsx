 import {Link} from 'react-router-dom'
 
 
 import allCardFram from '../../assets/catagory/fram/allCardFram.png'
 import LandscapePainting from '../../assets/catagory/Landscape Painting.jpg'
 import  PortraitDrawing from '../../assets/catagory/Portrait Drawing.jpg'
 import WatercolourPainting from '../../assets/catagory/Watercolour Painting.jpg'
 import OilPainting from '../../assets/catagory/Oil Painting.jpg'
 import CharcoalSketching from '../../assets/catagory/Charcoal Sketching.jpg'
 import CartoonDrawing from '../../assets/catagory/Cartoon Drawing.jpg'
function AllCategory() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center gap-6 [&>div]:mx-auto '>
        <div className="relative w-[350px] h-[250px] hover:scale-105 ease-linear duration-200">
         <img src={allCardFram} alt="" className='absolute z-10 rounded-lg' /> 
         <img src={LandscapePainting} alt=""  className='absolute p-1'/>

          {/* text and button   */}
          <Link to={`/catagory/${"landscapepainting"}`} className='absolute flex justify-center items-center z-40 bg-[#bcbcbc1A] rounded-2xl w-full h-full hover:bg-[#bcbcbc80] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
              text-sky-500 border-2  z-50 active:scale-95'>See More</button>
                </Link>
                
                <div className='absolute flex justify-center items-center z-50 bottom-3 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                    <h2 >Landscape Painting</h2 >
                </div>
         {/* text and button   */}
        </div> 
          {/* card one */}
          <div className="relative w-[350px] h-[250px] hover:scale-105 ease-linear duration-200">
         <img src={allCardFram} alt="" className='absolute z-10 rounded-lg' /> 
         <img src={PortraitDrawing} alt=""  className='absolute p-1'/>

         {/* text and button   */}
         <Link to={`/catagory/${"portraitdrawing"}`} className='absolute flex justify-center items-center z-40 bg-[#bcbcbc1A] rounded-2xl w-full h-full hover:bg-[#bcbcbc80] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
              text-sky-500 border-2  z-50 active:scale-95'>See More</button>
                </Link>
                
                <div className='absolute flex justify-center items-center z-50 bottom-3 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                    <h2 >Portrait Drawing</h2 >
                </div>
         {/* text and button   */}
        </div> 
        {/* card two */}
        <div className="relative w-[350px] h-[250px] hover:scale-105 ease-linear duration-200">
         <img src={allCardFram} alt="" className='absolute z-10 rounded-lg' /> 
         <img src={WatercolourPainting} alt=""  className='absolute p-1'/>
         {/* text and button   */}
         <Link to={`/catagory/${"watercolourpainting"}`} className='absolute flex justify-center items-center z-40 bg-[#bcbcbc1A] rounded-2xl w-full h-full hover:bg-[#bcbcbc80] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
              text-sky-500 border-2  z-50 active:scale-95'>See More</button>
                </Link>
                
                <div className='absolute flex justify-center items-center z-50 bottom-3 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                    <h2 >Water colour Painting</h2 >
                </div>
         {/* text and button   */}
        </div> 
        {/* card three */}
        <div className="relative w-[350px] h-[250px] hover:scale-105 ease-linear duration-200">
         <img src={allCardFram} alt="" className='absolute z-10 rounded-lg' /> 
         <img src={OilPainting} alt=""  className='absolute p-1'/>
         {/* text and button   */}
         <Link to={`/catagory/${"oilpainting"}`} className='absolute flex justify-center items-center z-40 bg-[#bcbcbc1A] rounded-2xl w-full h-full hover:bg-[#bcbcbc80] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
              text-sky-500 border-2  z-50 active:scale-95'>See More</button>
                </Link>
                
                <div className='absolute flex justify-center items-center z-50 bottom-3 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                    <h2 >Oil Painting</h2 >
                </div>
         {/* text and button   */}
        </div> 
        {/* card four */}
        <div className="relative w-[350px] h-[250px] hover:scale-105 ease-linear duration-200">
         <img src={allCardFram} alt="" className='absolute z-10 rounded-lg' /> 
         <img src={CharcoalSketching} alt=""  className='absolute p-1'/>
         {/* text and button   */}
         <Link to={`/catagory/${"charcoalsketching"}`} className='absolute flex justify-center items-center z-40 bg-[#bcbcbc1A] rounded-2xl w-full h-full hover:bg-[#bcbcbc80] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
              text-sky-500 border-2  z-50 active:scale-95'>See More</button>
                </Link>
                
                <div className='absolute flex justify-center items-center z-50 bottom-3 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                    <h2 >Charcoal Sketching</h2 >
                </div>
         {/* text and button   */}
        </div> 
        {/* card five */}
        <div className="relative w-[350px] h-[250px] hover:scale-105 ease-linear duration-200">
         <img src={allCardFram} alt="" className='absolute z-10 rounded-lg' /> 
         <img src={CartoonDrawing} alt=""  className='absolute p-1'/>
         {/* text and button   */}
         <Link to={`/catagory/${"cartoondrawing"}`} className='absolute flex justify-center items-center z-40 bg-[#bcbcbc1A] rounded-2xl w-full h-full hover:bg-[#bcbcbc80] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
              text-sky-500 border-2  z-50 active:scale-95'>See More</button>
                </Link>
                
                <div className='absolute flex justify-center items-center z-50 bottom-3 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                    <h2 >Cartoon Drawing</h2 >
                </div>
         {/* text and button   */}
        </div> 
      
    </div>
  )
}

export default AllCategory
