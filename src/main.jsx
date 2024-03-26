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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[{
      index:true,
      element:<Home></Home>,
      loader: ()=> fetch('/public/bookname.json'),
    },
      {
      path: "/listedbook",
      element: <ListedBook></ListedBook>,
    },
    {
      path: "/readpages",
      element: <ReadPages></ReadPages>,
    }]
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
