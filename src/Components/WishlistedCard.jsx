import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooklist } from "../Localstorage";
import BookItem from "./BookItem";
import ReadPages from "../Pages/ReadPages";
import WishItem from "./WishItem";


const WishlistedCard = () => {
    const [readWishlist, setReadWishlist] = useState([])
    // const [newReadBooklist, setNewReadBooklist] = useState([])


    // const books = useLoaderData();
    // useEffect(()=> {
    //     const storedBookids = getStoredBooklist()
    //     if(books.length > 0){
    //         const myWishlist = books.filter(book => storedBookids.includes(book.bookId))
    //         // console.log(books, storedBookids, myBooklist)
    //         setReadWishlist(myWishlist);
    //         // setNewReadBooklist(myBooklist)

    //     }

    // },[]);

    return (
        <div>
            <div className="space-y-4">
            {
                readWishlist.map((wishlist, index) => <WishItem wishlist={wishlist} key={index}></WishItem>)
            }
        </div>
        </div>
    );
};

export default WishlistedCard;

   
   