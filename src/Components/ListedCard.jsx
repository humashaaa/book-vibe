import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooklist } from "../Localstorage";
import BookItem from "./BookItem";

const ListedCard = () => {

    const [readBooklist, setReadBooklist] = useState([])


    

    const books = useLoaderData();
    useEffect(()=> {
        const storedBookids = getStoredBooklist()
        if(books.length > 0){
            const myBooklist = books.filter(book => storedBookids.includes(book.bookId))
            // console.log(books, storedBookids, myBooklist)
            setReadBooklist(myBooklist);

        }

    },[]);

    return (
        <div className="space-y-4">
            {
                readBooklist.map((booklist, index) => <BookItem booklist={booklist} key={index}></BookItem>)
            }
        </div>
    );
};

export default ListedCard;