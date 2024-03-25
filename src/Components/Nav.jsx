import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg p-4 space-x-96 fixed z-10">
  <div className="">
    <Link to='/' className="btn btn-ghost text-3xl font-bold">Book Vibe</Link>
  </div>
  <div className="flex-none gap-2 space-x-96">
    <ul className="menu menu-horizontal px-1 hidden sm:flex gap-12 items-center justify-center text-xl ">
        <NavLink to='/' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg p-2" : "font-bold"
  }>Home</NavLink>
     
        <NavLink to='/listedbook' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg p-2" : "font-bold"
  }>Listed Book</NavLink>
     
        <NavLink to='/readpages' className={({ isActive }) => isActive ? "text-green-600 border-green-400 border-2 font-bold rounded-lg p-2" : "font-bold"
  }>Read Pages</NavLink>
     
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