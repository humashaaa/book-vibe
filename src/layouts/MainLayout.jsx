import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Home from "../Pages/Home";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
            <Nav></Nav>
            {/* <Home></Home> */}
            </div>
            <div className="min-h-[calc(100vh-253px)]">
            <Outlet></Outlet>

            </div>
            <div className="bottom-0">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;