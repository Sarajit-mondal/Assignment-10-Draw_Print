import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { userContext } from '../../utility/AuthProvider';
import { useContext } from 'react';
function SeeOurleteastWorks() {
    const isSmallDevice = window.innerWidth < 700

    const {allCraft} = useContext(userContext)
    console.log(allCraft)
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
               {
                allCraft && allCraft.map((item,inx)=>{
                    if(inx < 4){
                        return (
                            <SwiperSlide>
                            <div className='hover:scale-105 ease-linear duration-300'>
                                <div className="card card-compact h-72 rounded-2xl shadow-xl">
                                    <figure><img src={item.photo_url} alt="Shoes" className='h-64' /></figure>
                                    <div className='flex justify-center'>
                                        <h2 className="card-title p-2"> {item.item_name}</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        )
                    }
                })
               }
              
            </Swiper>
        </>
    )
}

export default SeeOurleteastWorks

