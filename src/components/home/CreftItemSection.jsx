import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import CraftCard from '../../assets/catagory/fram/CraftCard.png'
import cardFram from '../../assets/catagory/fram/card-fram.png'
import OilPainting from '../../assets/catagory/Oil Painting.jpg'

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
        
                <SwiperSlide className='w-[350px] h-[250px] relative'>
                <img src={CraftCard} alt="" className='w-[350px] h-[250px] rounded-2xl' />
                    <img src={OilPainting} alt="" className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[245px] h-[147px]  rounded-sm pr-3 feathered-edge' />
                   
                </SwiperSlide>
                <SwiperSlide className='w-[350px] h-[250px] relative'>
                <img src={cardFram} alt="" className=' rounded-2xl w-[350px] h-[250px] absolute z-50 '/>
                    <img src={OilPainting} alt="" className='absolute top-7 left-2/4 -translate-x-2/4
                      w-[280px] h-[195px]  rounded-sm feathered-edge' /> 
                </SwiperSlide>
                <SwiperSlide className='w-[350px] h-[250px] relative'>
                <img src={cardFram} alt="" className=' rounded-2xl w-[350px] h-[250px] absolute z-50 '/>
                    <img src={OilPainting} alt="" className='absolute top-7 left-2/4 -translate-x-2/4
                      w-[280px] h-[195px]  rounded-sm feathered-edge' /> 
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default CreftItemSection
