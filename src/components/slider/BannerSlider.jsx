
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

const categories = [
  {
    name: "Landscape Painting",
    img: "https://i.postimg.cc/RVFnH279/Landscape-Painting-banner.jpg",
    description: "Capture the beauty of nature with our exquisite landscape paintings. From serene meadows to majestic mountainscapes, each artwork transports you to breathtaking vistas, evoking a sense of wonder and tranquility."
  },
  {
    name: "Portrait Drawing",
    img: "https://img.freepik.com/free-photo/young-blonde-woman-painting-with-acrylics_23-2148854524.jpg?t=st=1714112329~exp=1714115929~hmac=53c0244568ea54d151bae6998c66f56c7fd8c25e3fa3e7f336f9fbb593ae6293&w=740",
    description: "Celebrate the essence of human expression with our captivating portrait drawings. Our talented artists skillfully capture the nuances of emotion and personality, creating timeless portraits that reflect the depth and beauty of the human spirit."
  },
  {
    name: "Watercolour Painting",
    img: "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977736.jpg?t=st=1714112530~exp=1714116130~hmac=1b10f70aa980557519f194881e08c6d9188f78fdd7234cbb623a6cd39c2f0aa7&w=740",
    description: "Experience the delicate artistry of watercolour painting, where vibrant pigments blend seamlessly to create ethereal compositions. Dive into a world of fluidity and transparency, where each brushstroke tells a story of light, color, and emotion."
  },
  {
    name: "Oil Painting",
    img: "https://img.freepik.com/free-photo/india-republic-day-celebration-digital-art-with-woman-portrait_23-2151070778.jpg?t=st=1714112620~exp=1714116220~hmac=85c3d5820aed9dde67c9b9d9f748fa47948412d8b5f77ccfe30a60231b4c6d9b&w=826",
    description: "Indulge in the rich textures and vibrant hues of oil painting, where every stroke reveals depth and intensity. From expressive brushwork to intricate details, our oil paintings captivate the senses and ignite the imagination."
  },
  {
    name: "Charcoal Sketching",
    img: "https://img.freepik.com/free-photo/drawings-about-legal-profession_23-2151190625.jpg?t=st=1714112758~exp=1714116358~hmac=39ae4c71e172af632d7acaeeec35ac9edc8e33ad775a289235b1f00574b6857f&w=826",
    description: "Explore the bold contrasts and raw energy of charcoal sketching, where black and white converge to create striking images. With bold lines and subtle shading, our charcoal sketches capture the essence of form and emotion with captivating simplicity."
  },
  {
    name: "Cartoon Drawing",
    img: "https://i.postimg.cc/5NP3DZ5k/Cartoon-Drawing-banner.jpg",
    description: "Embark on a playful journey into the world of cartoon drawing, where imagination knows no bounds. From whimsical characters to dynamic scenes, our cartoon drawings spark joy and laughter, inviting you to embrace the magic of storytelling through art."
  }
];

function BannerSlider() {
  return (
    <div className="text-center">
      <Swiper
        navigation={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, FreeMode, Pagination]}
        loop={true}
        // autoplay={{ delay: 7000 }}
        spaceBetween={30}
        className="mySwiper"
      >
       {
        categories && categories.map(item =><SwiperSlide className=" rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${item.img})` }}>
        <div className="h-72 lg:h-96 flex items-center">
        <div className="p-5 lg:px-20 md:space-y-5 ">
            <h2 className="font-bold text-light-color text-2xl lg:text-3xl ">{item.name}</h2>
            <p className="text-lg font-semibold text-light-color">{item.description}</p>
            <button className="btn bg-VibrantBlue text-light-color rounded-full px-10 font-bold">See More</button>
          </div>
        </div>
      </SwiperSlide>)
       }
        
      </Swiper>
    </div>
  );
}

export default BannerSlider;