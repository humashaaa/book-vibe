import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const Books = () => {
    const books = useLoaderData()

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
             
              {
                books.map(book => <BookCard key={book.id} book={book}></BookCard>)

              }
                
               
            </div>
           
        </div>
    </section>
    );
};

export default Books;