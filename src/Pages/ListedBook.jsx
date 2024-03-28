import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookItem from "../Components/BookItem";
import { getStoredBooklist } from "../Localstorage";
import WishItem from "../Components/WishItem";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../Localstorage2";


const ListedBook = () => {
    
    const [readBooklist, setReadBooklist] = useState([])
    const bookss = useLoaderData();
    useEffect(()=> {
        const storedBookids = getStoredBooklist()
        if(bookss.length > 0){
            const myBooklist = bookss.filter(book => storedBookids.includes(book.bookId))
            setReadBooklist(myBooklist);

        }

    },[]);

    const [readWishlist, setReadWishlist] = useState( [])
    const books = useLoaderData();
    useEffect(()=> {
        const storedBookids =getStoredWishlist()
        if(books.length > 0){
            const myWishlist = books.filter(book => storedBookids.includes(book.bookId))
            setReadWishlist(myWishlist);

        }

    },[]);
    
    return (
       <div>
        <div className="bg-slate-100 mt-20 min-h-10 mb-6 p-6 text-center font-bold text-2xl">
            <h1>Books</h1>
        </div>
        {/* short by button */}

        {/* tabs */}
       <div className="top-14">
     

<Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <ul className="space-y-3">
          {readBooklist.map((book) => (
            <li key={book.bookId}><BookItem booklist={book}></BookItem></li>
          ))}
        </ul>
    </TabPanel>
    <TabPanel>
      <ul className="space-y-3">
          {readWishlist.map((book) => (
            <li key={book.id}><WishItem wishlist={book}></WishItem></li>
          ))}
        </ul>
    </TabPanel>
  </Tabs>

       </div>
	
</div>
    );
};

export default ListedBook;