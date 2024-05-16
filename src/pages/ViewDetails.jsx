import { Link, useLoaderData, useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa"

function ViewDetails() {
const item = useLoaderData()


    
  return (
    <div className="max-w-5xl mx-auto px-4 py-5 min-h-screen ">
    <div className="grid grid-cols-1 md:h-[500px] md:mt-10  md:grid-cols-2 gap-8 border-2 border-sky-400 ">
      <div className="p-1">
        <img src={item.photo_url} alt={item.item_name} className="w-full md:h-full" />
      </div>

      {/* right side */}
      <div className="pr-5 flex flex-col justify-between p-1">
        <h1 className="text-3xl font-bold mb-4">{item.item_name}</h1>
        <h2 className="text-xl font-semibold mb-2">{item.subcategory_name}</h2>
        <p className="text-gray-700 mb-4">{item.short_description}</p>
        <div className="flex items-center mb-4 justify-between">
          <span className="text-lg font-semibold text-blue-600 mr-2">Price : ${item.price}</span>
          <span className="text-gray-600 flex items-center">Rating: {item.rating} <FaStar></FaStar></span>
          <p>Customization: <Link className="py-1 px-3 bg-sky-500 text-light-color rounded-full">{item.customization}</Link></p>
        </div>
        <div className="mb-4 flex justify-between gap-5 items-center">
          
          <p>Processing Time: {item.processing_time}</p>
          <p>Stock Status: {item.stock_status
}</p>
        </div>
        <div className="mb-4 flex justify-between items-center">
          <p>Woner Email: {item.user_email}</p>
          <p>Create by: {item.user_name}</p>
        </div>
        {/* Add any additional details or actions here */}
      </div>
    </div>
  </div>
  )
}

export default ViewDetails
