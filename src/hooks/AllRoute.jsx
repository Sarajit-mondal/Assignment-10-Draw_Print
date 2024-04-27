import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllCardItem from "../components/allCard/AllCardItem";
import AddCreft from "../pages/AddCreft";
import ViewDetails from "../pages/ViewDetails";
 
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
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
          element: <AddCreft></AddCreft>
        },
        {
          path:'/details',
          element: <ViewDetails></ViewDetails>
        },
      ]
    },
  ]);