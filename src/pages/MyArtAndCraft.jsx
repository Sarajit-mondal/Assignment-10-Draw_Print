import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { userContext } from '../utility/AuthProvider'
import Loading from '../components/loading/Loading'
function MyArtAndCraft() {
  const {togleCraft,allCraft,user,loading, setLoading} = useContext(userContext)
  const [customizationFilter,setCustomizationFilter] = useState("all")
  const [userItem,setUserItem] = useState()
  
   
  useEffect(()=>{
    if(allCraft){
      const filterItem = allCraft.filter(item => item.user_email == user.email)
      setUserItem(filterItem)
    }
  },[])  
 console.log(userItem)
  // delete Item from database
  const deleteData =(url) =>{
    fetch(url,{
          method:"DELETE"
         })
         .then(res => res.json())
         .then(data => {
          console.log(data)
          togleCraft()
         })
  }
  
  const handleDelete =(id,item,price) =>{
    const category = item.toLowerCase().replaceAll(' ','');
    Swal.fire({
      title: "Do you want to Delete?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor:"green"

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // data fetch
        deleteData(`https://a-10-painting-and-drawing-server.vercel.app/allCraft/${id}`)
        // deleteData(`https://a-10-painting-and-drawing-server.vercel.app/category/${category}/${price}`)
    
        Swal.fire("Delete! Successfully", "", "success");
      } else if (result.isDenied) {
      
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  
  }
  
                                         
  // console.log(allCraft)

  // // filter dropdown
  // console.log(customizationFilter)


  // mycardItem

  const handleUpdateLoader =()=>{
    if(loading){
     return <Loading></Loading>
    }
  }
  
   
  

    return (
      <div>
        <h1 className='text-3xl font-bold mt-6 mb-8 text-center  underline'>My all Art And Craft</h1>
  
       {/* Filter dropdown */}
      <div className='flex justify-center mb-8'>
      <select className='bg-transparent p-3 border-2 border-sky-400 rounded-s-full'
        value={customizationFilter}
        onChange={(e) => setCustomizationFilter(e.target.value)}
      >
        <option value="all">All Items</option>
        <option value="yes">Customization Yes</option>
        <option value="no">Customization No</option>
      </select>
      </div>
       {/* filter  */}
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
  
        {
          allCraft && customizationFilter === "no" ? userItem &&
          userItem.filter(item => item.customization === "no").map(item => <div className="card card-compact w-full bg-sky-100 shadow-xl">
          <figure><img src={item.photo_url} alt="Shoes" className='h-72 w-full ' /></figure>
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
                   <button className='btn btn-sm bg-sky-400 text-gray-dark hover:text-sky-500'><Link to={`/update/${item._id}`}>Update</Link></button>
                  
                   
                    <button onClick={()=>handleDelete(item._id,item.item_name,item.price)} className='btn btn-error btn-sm text-gray-dark hover:text-light-color'>Delete</button>
                </div>
            </div>
          </div>   
          )
          // filter yess 
          : customizationFilter === "yes" ? userItem && userItem.filter(item => item.customization === "yes").map(item =>  <div className="card card-compact w-full bg-sky-100 shadow-xl">
          <figure><img src={item.photo_url} alt="Shoes" className='h-72 w-full ' /></figure>
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
                   <button className='btn btn-sm bg-sky-400 text-gray-dark hover:text-sky-500'><Link to={`/update/${item._id}`}>Update</Link></button>
                  
                   
                    <button onClick={()=>handleDelete(item._id,item.item_name,item.price)} className='btn btn-error btn-sm text-gray-dark hover:text-light-color'>Delete</button>
                </div>
            </div>
          </div>  
          )
          //filter all
          : allCraft && allCraft.filter(item => item.user_email == user.email).map(item =>  <div className="card card-compact w-full bg-sky-100 shadow-xl">
          <figure><img src={item.photo_url} alt="Shoes" className='h-72 w-full ' /></figure>
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
                   <button onClick={handleUpdateLoader} className='btn btn-sm bg-sky-400 text-gray-dark hover:text-sky-500'><Link to={`/update/${item._id}`}>Update</Link></button>
                
                   
                    <button onClick={()=>handleDelete(item._id,item.item_name,item.price)} className='btn btn-error btn-sm text-gray-dark hover:text-light-color'>Delete</button>
                </div>
            </div>
          </div>  
          )
        }
       </div>
      
      
  
      </div>
    )
}

export default MyArtAndCraft
