import { FaRegUser, FaUser, } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoHelpCircleSharp, IoMoon } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import profile from "../../assets/profile.png"

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";



function NavBar() {
    const [isDropDown, setisDropDown] = useState(false)

    // State to manage whether the dropdown is shown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown's visibility
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // Function to close the dropdown, useful when an item is clicked
    const closeDropdown = () => setIsDropdownOpen(false);
    console.log(isDropDown)

    // user log out
//    const userLogOut =()=>{
//     LogOutUser()
//     .then(result =>{
//         swal("LogOut Successfull", "You click the button! go your page", "success");
//     })
//     .catch(error =>{
//         toast.error(error.code, {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
        
//             });
//     })
//    }
    return (
       
        // responsive navbar
        // responsive navbar
        <div className="navbar bg-base-100 w-11/12 mx-auto max-w-[1280px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4">
        
                     <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/allArtAndCraft">All Art & craft Items</NavLink></li>
                    <li><NavLink to="/addCraftItem">Add Craft Item</NavLink></li>
                    <li><NavLink to="/myArtAndCraft">My Art&Craft List</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/allArtAndCraft">All Art & craft Items</NavLink></li>
                    <li><NavLink to="/addCraftItem">Add Craft Item</NavLink></li>
                    <li><NavLink to="/myArtAndCraft">My Art&Craft List</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex space-x-5 items-center">
                 
                 <div className="space-x-5">
                 <Link to='/signUp'>SignUp</Link>
                 <Link to='/logIn'>LogIn</Link>
             </div>
                 {/* profile detials */}
                 <div>
                     <div className="dropdown">

                         <div tabIndex={0} role="button" className="tooltip  tooltip-left  rounded-full" data-tip={"name"}
                             onClick={() => setisDropDown(!isDropDown)} ><img src={profile } alt="" className="size-10 rounded-full" /> </div>

                         {
                             isDropDown && <ul className="tabIndex={0} shadow-xl menu dropdown-content bg-sky-200 rounded-box w-72 right-1 top-16 p-2 z-20  animate__animated animate__bounceInDown">
                                 <li>
                        <div className="mx-auto">
                                         <img src={profile} alt="" className="size-20 rounded-full" />

                                     </div>

                                     <h3 className="mx-auto">{'User name'}</h3>
                                 </li>



                                 <hr className="my-3" />
                                 {/* one  */}
                                 <li ><Link to="/Profile" className="flex items-center justify-between">
                                     <span className="flex items-center space-x-5">
                                         <FaUser className="size-9 p-2 bg-VibrantBlue rounded-full"></FaUser>
                                         <h4 className=" font-bold">Eidt Profile</h4>
                                     </span>
                                     <RiArrowRightSLine className="text-2xl font-bold"></RiArrowRightSLine>

                                 </Link></li>
                                 {/* Two  */}
                                 <li ><Link onClick={() => setisDropDown(false)} to="" className="flex items-center justify-between">
                                     <span className="flex items-center space-x-5">
                                         <IoMdSettings className="size-9 p-2 bg-VibrantBlue rounded-full"></IoMdSettings>
                                         <h4 className=" font-bold">Setting And Privacy</h4>
                                     </span>
                                     <RiArrowRightSLine className="text-2xl font-bold"></RiArrowRightSLine>

                                 </Link></li>
                                 {/* Three  */}
                                 <li ><Link onClick={() => setisDropDown(false)} to="" className="flex items-center justify-between">
                                     <span className="flex items-center space-x-5">
                                         <IoHelpCircleSharp className="
                     size-9 p-2 bg-VibrantBlue rounded-full"></IoHelpCircleSharp>
                                         <h4 className=" font-bold">Help And Suport</h4>
                                     </span>
                                     <RiArrowRightSLine className="text-2xl font-bold"></RiArrowRightSLine>

                                 </Link></li>
                                 {/* Four */}
                                 <li onClick={() => setisDropDown(false)} ><Link to="" className="flex items-center justify-between">
                                     <span className="flex items-center space-x-5">
                                         <IoMoon className="size-9 p-2 bg-VibrantBlue rounded-full"></IoMoon>
                                         <h4 className=" font-bold">Display & Accessibility</h4>
                                     </span>
                                     <RiArrowRightSLine className="text-2xl font-bold"></RiArrowRightSLine>

                                 </Link></li>
                                 {/* Five */}
                                 <li onClick={() => setisDropDown(false)}><Link to="" className="flex items-center justify-between">
                                     <span className="flex items-center space-x-5">
                                         <FiLogOut className="size-9 p-2 bg-VibrantBlue rounded-full"></FiLogOut>
                                         <h4 className=" font-bold">LogOut</h4>
                                     </span>
                                     <RiArrowRightSLine className="text-2xl font-bold"></RiArrowRightSLine>

                                 </Link></li>

                             </ul>
                         }
                     </div>
                 
                 </div>
             </div>

  </div>
</div>

    )
}

export default NavBar
