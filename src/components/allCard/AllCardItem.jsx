import { Link } from 'react-router-dom'
import catagoryFram from '../../assets/catagory/fram/catagoryCard.png'
import allCardFram from '../../assets/catagory/fram/allCardFram.png'
 import LandscapePainting from '../../assets/catagory/Landscape Painting.jpg'



import { FaStar } from "react-icons/fa";

function AllCardItem() {
  return (
    <>
    <h1 className='text-3xl text-center  mt-5  font-bold underline'>All <span className='underline text-sky-500 font-extrabold'>Art & Craft</span>  Items</h1>
     <div className=" flex items-center justify-center pt-5">
    
    <table className='w-full md:w-3/4 text-left '>
       {/* head */}
  <thead>
    <tr className='[&>th]:text-center'>
      
      <th>Name</th>
      <th>Image</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {/* row 1 */}
    <tr>
      <th>
        category name
      </th>
      <td>
      <img src={LandscapePainting} alt="" className='w-24 mx-auto' />
      </td>
      <td>
        price
      </td>
      <th className='text-center'>
        <Link to={'/details'}> <button className="btn btn-ghost hover:bg-sky-400 text-lg ">details</button></Link>
      </th>
    </tr>
    
    </tbody>
    </table>
 </div>
    </>
  
  )
}

export default AllCardItem
