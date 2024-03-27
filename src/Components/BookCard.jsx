import { Link } from "react-router-dom";
const BookCard = ({book}) => {
     const{ bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;
    
    return (
        <Link 
        to={`/${bookId}`}
         className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-slate-100 p-5 rounded-3xl flex flex-col justify-between hover:border-2 transition hover:scale-105 hover:border-green-500 ">
        <img role="presentation" className="object-cover w-96 h-96 rounded  0" src={image}
         />
        <div className="p-6 space-y-2">
            {/* tags */}
            <div className="flex items-center gap-3">
                {
                    tags.map(tag => <p key={bookId} className="text-green-500  ">{tag}</p>)
                }
            </div>
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{bookName}</h3>
            <span className="text-sm text-slate-600 font-medium mt-3">By : {author}</span>
            <div >
                <hr className="border-dashed text-slate-600 " />
            </div>
           <div className="flex justify-between items-center ">
                <p>{category}</p>
                <div className="flex items-center">
                    <p>{rating}</p>
                    <img src="/public/Frame (3).png" alt="" />
                </div>
           </div>
        </div>
    </Link>
    );
};

export default BookCard;