import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Link, useLoaderData} from 'react-router-dom'

// import required modules
import { Pagination } from 'swiper/modules';
import { userContext } from '../../utility/AuthProvider';
import { useContext } from 'react';

function CreftItemSection() {
    const isSmallDevice = window.innerWidth < 700;

    const {allCraft} = useContext(userContext)
    console.log(allCraft)

    return (
        <>
            <Swiper
                slidesPerView={isSmallDevice ?1:3}
                spaceBetween={30}
                
                loop={true} // Enable loop mode
                autoplay={{ delay: 5000}} // Auto-play configuration
                //   pagination={{
                //     clickable: true,
                //   }}
                modules={[Pagination]}
                className="mySwiper"
            >
        
              

                {
                    allCraft && allCraft.map((item,inx) =>{
                        if(inx %2 == 0){
                            return   <SwiperSlide className='w-[350px] h-[250px] relative rounded-2xl'>
                            {/* text and button   */}
                            <Link to={`/details/${item._id}`}   className='absolute flex justify-center items-center z-40 bg-[#bcbcbc1A] rounded-2xl w-full h-full hover:bg-[#bcbcbc80] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                            <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
                          text-sky-500 border-2  z-50 active:scale-95'>View Details</button>
                            </Link>
                            
                            <div className='absolute flex justify-center items-center z-50 bottom-8 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                                <h2>{item.subcategory_name}</h2>
                            </div>
                     {/* text and button   */}
            
                            <img src="https://i.postimg.cc/9f5xqmvR/Craft-Card.png" alt="" className='w-full h-[250px] rounded-2xl' />
            
                                <img src={item.photo_url} alt="" className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[245px] h-[147px]  rounded-sm  feathered-edge' />
                               
                            </SwiperSlide>
                        }else{
                                  return <SwiperSlide>

                <div className="relative w-full md:w-[350px] h-[250px]">
                {/* text and button   */}
                <Link to={`/details/${item._id}`} className='absolute flex justify-center items-center z-40 bg-[#bcbcbc1A] rounded-2xl w-full h-full hover:bg-[#bcbcbc80] ease-linear duration-300 [&>*]:hidden [&>*]:hover:block'>
                <button className='py-1 bg-[#bcbcbc99] px-3 rounded-full opacity-100
              text-sky-500 border-2  z-50 active:scale-95'>View Details</button>
                </Link>
                
                <div className='absolute flex justify-center items-center z-50 bottom-8 left-2/4 -translate-x-2/4  text-sky-500 rounded-full'>
                    <h2>{item.subcategory_name}</h2>
                </div>
         {/* text and button   */}
                <img src="https://i.postimg.cc/qBzY5XP4/card-fram.png" alt="" className='absolute z-10 w-full h-[250px]' /> 
              <img src={item.photo_url} alt=""  className='absolute p-8'/>
        </div> 
        </SwiperSlide>
                        }
                    } )
                }
                {/* silder 2 */}
            </Swiper>
        </>
    )
}

export default CreftItemSection
