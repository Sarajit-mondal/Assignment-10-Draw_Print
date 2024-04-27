import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import CraftCard from '../../assets/catagory/fram/CraftCard.png'
import cardFram from '../../assets/catagory/fram/card-fram.png'
import OilPainting from '../../assets/catagory/Oil Painting.jpg'
import {Link} from 'react-router-dom'

// import required modules
import { Pagination } from 'swiper/modules';

function CreftItemSection() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                //   pagination={{
                //     clickable: true,
                //   }}
                modules={[Pagination]}
                className="mySwiper"
            >
        
                <SwiperSlide className='w-[350px] h-[250px] relative rounded-2xl'>
                {/* text and button   */}
                <Link className='absolute flex justify-center items-center z-40 bg-[#bcbcbc1A] rounded-2xl w-full h-full hover:bg-[#bcbcbc80] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
              text-sky-500 border-2  z-50 active:scale-95'>View Details</button>
                </Link>
                
                <div className='absolute flex justify-center items-center z-50 bottom-8 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                    <h2>subcategory_Name</h2>
                </div>
         {/* text and button   */}

                <img src={CraftCard} alt="" className='w-full h-[250px] rounded-2xl' />

                    <img src={OilPainting} alt="" className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[245px] h-[147px]  rounded-sm  feathered-edge' />
                   
                </SwiperSlide>

                {/* silder 2 */}
                <SwiperSlide>

                <div className="relative w-[350px] h-[250px]">
                {/* text and button   */}
                <Link className='absolute flex justify-center items-center z-40 bg-[#bcbcbc1A] rounded-2xl w-full h-full hover:bg-[#bcbcbc80] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
              text-sky-500 border-2  z-50 active:scale-95'>View Details</button>
                </Link>
                
                <div className='absolute flex justify-center items-center z-50 bottom-8 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                    <h2>subcategory_Name</h2>
                </div>
         {/* text and button   */}
                <img src={cardFram} alt="" className='absolute z-10 w-full h-[250px]' /> 
              <img src={OilPainting} alt=""  className='absolute p-8'/>
        </div> 
                
                       
                    </SwiperSlide>
              

            </Swiper>
        </>
    )
}

export default CreftItemSection
