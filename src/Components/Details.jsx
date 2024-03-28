import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBooklist } from "../Localstorage";
import { saveWishlist } from "../Localstorage2";



const Details = () => {
    const books = useLoaderData()
    const{bookId} = useParams()
    const bookIdInt = parseInt (bookId)
    const book = books.find(book=> book.bookId == bookIdInt)
    // console.log(book)

    const{ bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;
    


    const handleRead = () =>{
      saveBooklist(bookIdInt)

      toast('added to the reading list')
    }
    const handleWishlist = () =>{
      saveWishlist(bookIdInt)

      toast('added to the wishlist')
    }

    
    return (
        <div className="mt-16">
    
    <div className="hero  ">
  <div className="hero-content flex-col gap-9 lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg bg-base-200 p-14 w-full h-full shadow-md" />
    <div className="space-y-2">
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className=" font-semibold"> <span className="">By :</span> {author}</p>
     <div> <hr /></div>
     <p className="font-semibold">{category}</p>
     <div> <hr /></div>

      <p className=""> <span className="font-bold">Review :</span> <span className="text-gray-500">{review}</span></p>
      <div className="flex items-center gap-3">
               <p className="flex flex-row gap-4"><span className="font-bold">Tag:</span> {
                    tags.map(tag => <p key={bookId} className="text-green-500  ">#{tag}</p>)
                }</p>
            </div>
            <div> <hr /></div>

            <p className="font-medium text-gray-500">Number of Pages: <span className=" text-black">{totalPages}</span></p>
            <p className="font-medium text-gray-500">Publisher: <span className=" text-black">{totalPages}</span></p>
            <p className="font-medium text-gray-500">Year of Publishing: <span className=" text-black">{totalPages}</span></p>
            <p className="font-medium text-gray-500">Rating: <span className=" text-black">{totalPages}</span></p>
            <div className="space-x-3">
            <button onClick={handleRead}  className="btn btn-outline btn-success">Read</button>
            <button onClick={handleWishlist}  className="btn btn-outline btn-warning  text-white">Wishlist</button>

            </div>
            <ToastContainer></ToastContainer>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;