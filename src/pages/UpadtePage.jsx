import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { userContext } from '../utility/AuthProvider';
import swal from 'sweetalert';

function UpadtePage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {togleCraft} = useContext(userContext)
    const updateItem = useLoaderData()
    console.log(updateItem)
    const onSubmit = (data) => {
      // Handle form submission here, e.g., send data to backend
      console.log(data)
      fetch(`https://a-10-painting-and-drawing-server.vercel.app/allCraft/${updateItem._id}`,{
        method:"PATCH",
        headers:
          {
            'Content-Type': 'application/json',
          },
        
        body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        
          swal("Update! Successfull", "You click the button! go your page", "success")
          .then(()=>{
            window.location.reload()
          })
      })
      .catch(error =>{
        swal("Update! not sussfully", "You click the button! go your page", "error")
      })
      togleCraft()
    };
  
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto p-5 md:px-16 lg:px-28 ">
        <div className='flex flex-col justify-between md:flex-row md:gap-20 items-center'>
        <div className='w-full'>
          <div className="mb-4">
             <label htmlFor="photo_url" className="block text-sm font-medium text-gray-700">Photo Url</label>
             <input defaultValue={updateItem.photo_url} type="text" id="photo_url" {...register("photo_url", { required: true })} className="mt-1 border-sky-300 border-2 bg-transparent p-2   focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md " />
             {errors.item_name && <span className="text-red-500">Item name is required</span>}
           </div>
           {/* name */}
           <div className="mb-4">
             <label htmlFor="item_name" className="block text-sm font-medium text-gray-700">Item Name</label>
             <input defaultValue={updateItem.item_name} type="text" id="item_name" {...register("item_name", { required: true })} className="mt-1 border-sky-300 border-2 bg-transparent p-2   focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md " />
             {errors.item_name && <span className="text-red-500">Item name is required</span>}
           </div>
     
           <div className="mb-4">
             <label htmlFor="subcategory_name" className="block text-sm font-medium text-gray-700">Subcategory Name</label>
             <input defaultValue={updateItem.subcategory_name} type="text" id="subcategory_name" {...register("subcategory_name", { required: true })} className="mt-1 border-sky-300 border-2 bg-transparent p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md" />
             {errors.subcategory_name && <span className="text-red-500">Subcategory name is required</span>}
           </div>
     
         
     
           <div className="mb-4">
             <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
             <input defaultValue={updateItem.price} type="number" id="price" {...register("price", { required: true, min: 0 })} className="mt-1 border-sky-300 border-2 bg-transparent p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md" />
             {errors.price && <span className="text-red-500">Price is required and must be a positive number</span>}
           </div>
     
          
          </div>
          {/* right side */}
          {/* right side */}
          {/* right side */}
          <div className='w-full'>
          <div className="mb-4">
             <label defaultChecked={updateItem.customization} htmlFor="customization" className="block text-sm font-medium text-gray-700">Customization</label>
             <select id="customization" {...register("customization", { required: true })} className="mt-1 border-sky-300 border-2 bg-transparent p-2 block w-full pl-3 pr-10 text-base  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
               <option value="yes">Yes</option>
               <option value="no">No</option>
             </select>
             {errors.customization && <span className="text-red-500">Please select an option</span>}
           </div>

         {/* rating  */}
         <div className="mb-4">
             <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
             <input defaultValue={updateItem.rating} type="number" id="rating" {...register("rating", { required: true, min: 0, max: 5 })} className="mt-1 border-sky-300 border-2 bg-transparent p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md" />
             {errors.rating && <span className="text-red-500">Rating is required and must be between 0 and 5</span>}
           </div>
           {/* //processing_time */}
           <div className="mb-4">
             <label htmlFor="processing_time" className="block text-sm font-medium text-gray-700">Processing Time</label>
             <input defaultValue={updateItem.processing_time} type="text" id="processing_time" {...register("processing_time", { required: true })} className="mt-1 border-sky-300 border-2 bg-transparent p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md" />
             {errors.processing_time && <span className="text-red-500">Processing time is required</span>}
           </div>
     
           <div className="mb-4">
             <label htmlFor="stock_status" className="block text-sm font-medium text-gray-700">Stock Status</label>
             <select defaultChecked={updateItem.stock_status} id="stock_status" {...register("stock_status", { required: true })} className="mt-1 border-sky-300 border-2 bg-transparent p-2 block w-full pl-3 pr-10 text-base  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
               <option value="In stock">In stock</option>
               <option value="Made to order">Made to order</option>
             </select>
             {errors.stock_status && <span className="text-red-500">Please select an option</span>}
           </div>
     
           {/* <div className="mb-4">
             <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">User Email</label>
             <input defaultValue={updateItem.photo_url} type="email" id="user_email" {...register("user_email", { required: true })} className="mt-1 border-sky-300 border-2 bg-transparent p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md" />
             {errors.user_email && <span className="text-red-500">User email is required</span>}
           </div> */}
     
           {/* <div className="mb-4">
             <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">User Name</label>
             <input defaultValue={updateItem.photo_url} type="text" id="user_name" {...register("user_name", { required: true })} className="mt-1 border-sky-300 border-2 bg-transparent p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md" />
             {errors.user_name && <span className="text-red-500">User name is required</span>}
           </div> */}
          </div>
        </div>
            {/* short description */}
            <div className="mb-4">
             <label htmlFor="short_description" className="block text-sm font-medium text-gray-700">Short Description</label>
             <textarea defaultValue={updateItem.short_description} id="short_description" {...register("short_description", { required: true })} className="mt-1 border-sky-300 border-2 bg-transparent p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md resize-none" />
             {errors.short_description && <span className="text-red-500">Short description is required</span>}
           </div>
          {/* add button */}
           <button type="submit" className="bg-sky-500 text-gray-dark py-2 px-4 rounded hover:bg-sky-400 text-center w-full">Update</button>
         </form>
    );
  };
  

export default UpadtePage
