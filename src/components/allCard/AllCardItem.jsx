import { Link } from 'react-router-dom'
import catagoryFram from '../../assets/catagory/fram/catagoryCard.png'
import allCardFram from '../../assets/catagory/fram/allCardFram.png'
 import LandscapePainting from '../../assets/catagory/Landscape Painting.jpg'


import { FaStar } from "react-icons/fa";
import { useContext } from 'react';
import { userContext } from '../../utility/AuthProvider';

function AllCardItem() {
  const {allCraft} = useContext(userContext)
  console.log(allCraft)
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
   {
      allCraft && allCraft.map(craft =>  <tr key={craft._id}>
        <th>
          {craft.subcategory_name}
        </th>
        <td>
        <img src={craft.photo_url} alt="no found" className='w-24 mx-auto' />
        </td>
        <td className='text-center'>
          price : ${craft.price}
        </td>
        <th className='text-center'>
          <Link to={`/details/${craft._id}`}> <button className="btn btn-ghost hover:bg-sky-400 text-lg ">details</button></Link>
        </th>
      </tr>)
   }
    
    </tbody>
    </table>
 </div>
    </>
  )
}

export default AllCardItem
