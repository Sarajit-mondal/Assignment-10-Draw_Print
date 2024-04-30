
import { useForm } from "react-hook-form";

import profile from "../../assets/profile.png"
import { useContext } from "react";
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { userContext } from "../../utility/AuthProvider";

function Profile() {
  const {updateUserProfile,user} = useContext(userContext);
  console.log(user)
  const [count,setCount] = useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
   if(data.name !== "" || data.photoURl !== ""){
    updateUserProfile( user && data.name || user.displayName,data.photoURl || user.photoURL)
    .then(() =>{
      swal("Profile Update! Successfull", "You click the button! go your page", "success")
      .then(()=>{
        window.location.reload()
      })
      reset()
     
    })
    .catch(errors =>{
      toast.error(errors.code, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
   }
   
  };
  return (
    <div className=" my-16">
      <div>
        <img
          src={user && user.photoURL ? user.photoURL : profile}
          alt=""
          className="size-40 rounded-full bg-sky-200 mx-auto"
        />
        <h2 className="text-center mt-3">{user && user.displayName ? user.displayName : "User Name"}</h2>
      </div>
      <form
        className=" w-11/12 lg:w-2/4 flex flex-col [&>input]:border-2 [&>input]:border-sky-200 [&>input]:m-2 [&>input]:p-3 [&>input]:rounded-lg rounded-xl [&>input]:bg-transparent bg-gray-200 h-full p-5  mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          autoFocus
          type="text"
          {...register("name")}
          placeholder="Enter your name"
        />
        <input {...register("photoURl", {})} placeholder="photoURL" />

        {/* email */}
        <div className="box-border w-full  flex justify-center relative ">
          <p className="border-2   border-sky-200 m-2 p-3 rounded-lg w-full bg-white font-bold">
            {user.email || "Email not found" }
          </p>
        </div>

        <button
              className="cursor-pointer active:bg-sky-200 font-bold box-border  flex justify-center relative border-2 bg-transparent  border-sky-200 m-2 p-3 rounded-lg"
             type="submit"
            > Update Profile</button>
      </form>
      <ToastContainer />
    </div>
  );
}


export default Profile;
