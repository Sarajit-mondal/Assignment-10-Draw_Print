import logDesiner from '../../assets/serviceLogo/vector.png'
import software from '../../assets/serviceLogo/coding.png'
import webDevelop from '../../assets/serviceLogo/web-development.png'
import branding from '../../assets/serviceLogo/branding.png'
function OurServices() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 [&>div]:flex [&>div]:flex-col [&>div]:justify-between'>
        {/* service One */}
        <div className="p-8 hover:shadow-xl space-y-5
         [&>button]:hover:bg-transparent [&>button]:hover:text-gray-dark [&>button]:hover:ease-linear [&>button]:hover:duration-300 ease-linear duration-300">
            <img src={branding} alt="" className='size-20 ml-7 mt-4' />
            <h3 className="text-2xl font-bold">
            Company Branding</h3>
              <p className='text-justify'>Crafting unique and memorable brand identities. We offer logo design, brand strategy development, and visual identity creation services.</p>
            <button className="py-2 px-6 bg-gray-dark text-light-color rounded-full  border-2">Learn More</button>
        </div>
        {/* service two */}
        <div className="p-8 hover:shadow-xl space-y-5
         [&>button]:hover:bg-transparent [&>button]:hover:text-gray-dark [&>button]:hover:ease-linear [&>button]:hover:duration-300 ease-linear duration-300">
            <img src={software} alt="" className='size-20 ml-7 mt-4' />
            <h3 className="text-2xl font-bold">Software Development</h3>
            <p className='text-justify'>Building robust and scalable software solutions. Full-cycle services include requirements gathering, design, </p>
            <button className="py-2 px-6 bg-gray-dark text-light-color rounded-full  border-2">Learn More</button>
        </div>
        {/* service three */}
        <div className="p-8 hover:shadow-xl space-y-5
         [&>button]:hover:bg-transparent [&>button]:hover:text-gray-dark [&>button]:hover:ease-linear [&>button]:hover:duration-300 ease-linear duration-300">
            <img src={logDesiner} alt="" className='size-20 ml-7 mt-4' />
            <h3 className="text-2xl font-bold">Logo Design</h3>
            <p className='text-justify'>Creating visually stunning logos. We understand your brand and refine designs until we achieve log is the limed offer so if you want than</p>
            <button className="py-2 px-6 bg-gray-dark text-light-color rounded-full  border-2">Learn More</button>
        </div>
        {/* service four */}
        <div className="p-8 hover:shadow-xl space-y-5
         [&>button]:hover:bg-transparent [&>button]:hover:text-gray-dark [&>button]:hover:ease-linear [&>button]:hover:duration-300 ease-linear duration-300">
            <img src={webDevelop} alt="" className='size-20 ml-7 mt-4' />
            <h3 className="text-2xl font-bold">Web Developer</h3>
            <p className='text-justify'>Designing and developing responsive websites. From static sites to complex web applications, we ensure an optimal user experience across devices</p>
            <button className="py-2 px-6 bg-gray-dark text-light-color rounded-full  border-2">Learn More</button>
        </div>

    </div>
  )
}

export default OurServices

