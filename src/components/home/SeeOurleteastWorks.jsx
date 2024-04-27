import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import OilPainting from '../../assets/catagory/Oil Painting.jpg'
function SeeOurleteastWorks() {
    const isSmallDevice = window.innerWidth < 700
    return (
        
        <>
            <Swiper
                slidesPerView={isSmallDevice ?1:3}
                spaceBetween={30}
                //   pagination={{
                //     clickable: true,
                //   }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='hover:scale-105 ease-linear duration-300'>
                        <div className="card card-compact h-72 rounded-2xl shadow-xl">
                            <figure><img src={OilPainting} alt="Shoes" /></figure>
                            <div className='flex justify-center'>
                                <h2 className="card-title p-2"> OilPainting</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>1</SwiperSlide>
            </Swiper>
        </>
    )
}

export default SeeOurleteastWorks

