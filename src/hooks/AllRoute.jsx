import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllCardItem from "../components/allCard/AllCardItem";
import AddCreft from "../pages/AddCreft";
import ViewDetails from "../pages/ViewDetails";
import MyArtAndCraft from "../pages/MyArtAndCraft";
import CatagoryCard from "../components/allCard/CatagoryCard";
import UpadtePage from "../pages/UpadtePage";
import PrivateRoute from "../utility/PrivateRoute";
import LogIn from "../components/allFrom/LogIn";
import Register from "../components/allFrom/Register";
import Profile from "../components/profile/Profile";
import ArrowPage from "../components/arrowPage/ArrowPage";
import ViewDetailsTwo from "../pages/ViewDetailsTwo";
 
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<ArrowPage></ArrowPage>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/allArtAndCraft',
          element: <AllCardItem></AllCardItem>
        },
        {
          path:'/addCraftItem',
          element: <PrivateRoute><AddCreft></AddCreft></PrivateRoute>
        },
        {
          path:'/details/:id',
          loader: ({params}) => fetch(`https://a-10-painting-and-drawing-server.vercel.app/allCraft/${params.id}`),
          
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
        },
        {
          path:'/category/details/:item/:id',
          loader: ({params}) => fetch(`https://a-10-painting-and-drawing-server.vercel.app/category/details/${params.item}/${params.id}`),
          element:<PrivateRoute> <ViewDetailsTwo></ViewDetailsTwo></PrivateRoute>
        },
        {
          path:'/myArtAndCraft',
          element: <PrivateRoute>  <MyArtAndCraft></MyArtAndCraft></PrivateRoute>
        
        },
        {
          path:'/catagory/:id',
          element: <CatagoryCard></CatagoryCard>
        },
        {
          path:'/update/:id',
     
          element: <PrivateRoute><UpadtePage></UpadtePage></PrivateRoute>
        },
        {
          path:"/logIn",
          element:<LogIn></LogIn>
        },
        {
          path:"/signUp",
          element:<Register></Register>
        },
        {
          path:"/profile",
          element:<Profile></Profile>
        },
      ]
    },
  ]);