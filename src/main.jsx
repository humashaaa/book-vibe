import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListedBook from './Pages/ListedBook';
import ReadPages from './Pages/ReadPages';
import MainLayout from './layouts/MainLayout';
import Home from './Pages/Home';
import Details from './Components/Details';
import ListedCard from './Components/ListedCard';
import Wishlist from './Components/Wishlist';
import BookItem from './Components/BookItem';
import WishlistedCard from './Components/WishlistedCard';
// import ErrorPge from './Pages/ErrorPge';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement:<ErrorPge></ErrorPge>,
    children:[{
      path: "/",
      element:<Home></Home>,
      loader: ()=> fetch('/public/bookname.json'),
    },
      {
      path: "/:bookId",
      element: <Details></Details>,
      loader: () =>fetch(`/public/bookname.json`),
    },
      {
      path: "/listedbook",
      element: <ListedBook></ListedBook>,
      loader: ()=> fetch('/public/bookname.json'),
      children: [
        {
          index:true,
          element:<ListedCard></ListedCard>,
          loader: ()=> fetch('/public/bookname.json'),
        },
        {
          path: 'wishList',
          element: <WishlistedCard></WishlistedCard>,
          loader: ()=> fetch('/public/bookname.json'),

        },
      ]

      
    },
    {
      path: "/readpages",
      element: <ReadPages></ReadPages>,
      loader: ()=> fetch('/public/bookname.json'),

    }]
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
