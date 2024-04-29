import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
function MyArtAndCraft() {const item = 
    {
        customization
: 
"yes",
item_name
: 
"sdfsdfsdf ",
photo_url
: 
"https://t3.ftcdn.net/jpg/05/79/39/50/360_F_579395052_iD87OYMWrQHLwLeCDtcYWicQw3G3UAZv.jpg",
price
: 
"1",
processing_time
: 
"3",
rating
: 
"3",
short_description
: 
"sdfsdfsdf asdfsdf asdf asdfsadf asdf asdf aedsfsadf ",
stock_status
: 
"In stock",
subcategory_name
: 
"sfsdfsd",
user_email
: 
"bdsarajit@gmail.com",
user_name
: 
"jit"
    }

  return (
    <div>
      <div className="card card-compact w-96 bg-sky-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <h1 className="text-3xl font-bold mb-4">{item.item_name}</h1>
        
        <div className="flex items-center mb-4 justify-between">
          <span className="text-lg font-semibold text-blue-600 mr-2">Price : ${item.price}</span>
          <span className="text-gray-600 flex items-center text-right">Rating: {item.rating}<FaStar></FaStar></span>
         
        </div>
        <div className="mb-4 flex justify-between items-center">
          
        <p className=''>Customization: <Link className="py-1 px-3 bg-sky-500 text-light-color rounded-full">{item.customization}</Link></p>
          <p className='text-right'>Stock Status: {item.stock_status}</p>
        </div>
        <div className='mb-4  flex justify-between gap-5 items-center'>
          <Link to={`/update/${item._id}`}> <button className='btn btn-sm bg-sky-400 text-gray-dark hover:text-sky-500'><Link>Update</Link></button>
          </Link>
           
            <button className='btn btn-error btn-sm text-gray-dark hover:text-light-color'>Delete</button>
        </div>
    </div>
  </div>
</div>
  )
}

export default MyArtAndCraft
