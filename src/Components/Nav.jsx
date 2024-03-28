import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg p-4 md:space-x-36 sm:space-x-5 fixed z-10">
  <div className="">
    <Link to='/' className="btn btn-ghost md:text-3xl sm:text-3xl font-bold">Book Vibe</Link>
  </div>
  <div className="flex-none gap-2 md:space-x-44 sm:space-x-3">
    <ul className="menu menu-horizontal px-1 sm:gap-3  md:gap-12 items-center justify-center text-xl ">
        <NavLink to='/' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg sm:p-1 md:p-2" : "font-bold"
  }>Home</NavLink>
     
        <NavLink to='/listedbook' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg p-2" : "font-bold"
  }>Listed Book</NavLink>
     
        <NavLink to='/readpages' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg p-2" : "font-bold"
  }>Read Pages</NavLink>
        <NavLink to='/faq' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg p-2" : "font-bold"
  }>FAQ</NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg p-2" : "font-bold"
  }>Contact us</NavLink>
     
    </ul>
    {/* button */}
    <div className="space-x-3">
    <button className="btn btn-xs sm:btn-sm md:btn-md bg-green-500  lg:btn-lg">Sign in</button>
    <button className="btn btn-xs sm:btn-sm bg-blue-400 md:btn-md lg:btn-lg">Sign up</button>
    </div>
  </div>
</div>
    );
};

export default Nav;