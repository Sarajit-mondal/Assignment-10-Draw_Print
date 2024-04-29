import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllCardItem from "../components/allCard/AllCardItem";
import AddCreft from "../pages/AddCreft";
import ViewDetails from "../pages/ViewDetails";
import MyArtAndCraft from "../pages/MyArtAndCraft";
 
  
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
          path:'/details/:id',
          loader: ({params}) => fetch(`http://localhost:5001/allCraft/${params.id}`),
          element: <ViewDetails></ViewDetails>
        },
        {
          path:'/myArtAndCraft',
          element: <MyArtAndCraft></MyArtAndCraft>
        },
      ]
    },
  ]);