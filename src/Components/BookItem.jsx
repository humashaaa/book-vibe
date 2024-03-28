import { FaMapMarkerAlt} from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";


const BookItem = ({booklist}) => {
    const{ bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing, bookId} = booklist;

    
   
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-lg">
        <figure><img className="size-80 " src={image} alt=""/></figure>
        <div className="card-body ">
          <h2 className="card-title font-bold text-4xl">{bookName}</h2>
          <p className="font-semibold">By : {author}</p>
          <div className="flex gap-10 ">
          <div className="flex items-center gap-2  ">
               <p className="flex flex-row gap-3"><span className="font-bold">Tag:</span> {
                   tags.map(tag => <p key={bookId} className="text-green-500  ">#{tag}</p>)
                }</p>
            </div>
            
                <div className="flex items-center gap-2">
                        <p><FaMapMarkerAlt /></p>
                        <p> <span>Year of publishing : {yearOfPublishing}</span></p>
                    </div>
          </div>

          <div className="flex gap-9">
                    <div className="flex items-center gap-2">
                        <p><BsPeople /></p>
                        <p> <span>Publisher : {publisher}</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p>< MdOutlineContactPage /></p>
                        <p> <span>Page: </span> {totalPages}</p>
                    </div>
                     </div>

                     <div className="mt-5 mb-5">
                        <hr />
                     </div>
                     <div className="flex gap-3">
                     <button type="button" className="px-8 bg-blue-200 text-blue-700 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100">category: {category}</button>
                     <button type="button" className="px-8 py-3 font-semibold rounded-full bg-orange-200 text-orange-700 dark:bg-gray-800 dark:text-gray-100">rating: {rating}</button>
                     <button type="button" className="px-8 py-3 font-semibold rounded-full bg-green-400 text-white ">View Details</button>



                     </div>
         
        </div>
      </div>
        </div>
    );
};

export default BookItem;