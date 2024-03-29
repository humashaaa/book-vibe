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
// import Wishlist from './Components/Wishlist';
// import BookItem from './Components/BookItem';
import WishlistedCard from './Components/WishlistedCard';
import ErrorPge from './Pages/ErrorPge';
import Faq from './Components/Faq';
import Contact from './Components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPge></ErrorPge>,
    children:[{
      path: "/",
      element:<Home></Home>,
      loader: ()=> fetch('/bookname.json'),
    },
      {
      path: "/:bookId",
      element: <Details></Details>,
      loader: () =>fetch(`/bookname.json`),
    },
      {
      path: "/listedbook",
      element: <ListedBook></ListedBook>,
      loader: ()=> fetch('/bookname.json'),
      children: [
        {
          index:true,
          element:<ListedCard></ListedCard>,
          loader: ()=> fetch('/bookname.json'),
        },
        {
          path: 'wishList',
          element: <WishlistedCard></WishlistedCard>,
          loader: ()=> fetch('/bookname.json'),

        },
      ]

      
    },
    {
      path: "/readpages",
      element: <ReadPages></ReadPages>,
      loader: ()=> fetch('/bookname.json'),

    },
    {
      path: "/faq",
      element: <Faq></Faq>,
    },
    {
      path: "/contact",
      element: <Contact></Contact>,
    },
  ]
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
