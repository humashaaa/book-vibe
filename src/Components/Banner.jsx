import { Link } from "react-router-dom";
import banner from "../assets/A-Thousand-Splendid-Suns.jpg"
const Banner = () => {
    return (
        <div className="hero mt-20 ml ">
        <div className="hero-content bg-base-200 p-20 rounded-2xl  flex-col lg:flex-row-reverse">
          <img src={banner} className="max-w-52 rounded-lg shadow-2xl" />
          <div className="space-y-5">
            <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
             <Link to='/listedbook' className="btn bg-green-500 text-white">View The List</Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;