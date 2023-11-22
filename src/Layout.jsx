import Navbar from "./Views/Navbar";
import FooterWeb from "./Views/FooterWeb";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <FooterWeb />
        </>
    );
};

export default Layout;
