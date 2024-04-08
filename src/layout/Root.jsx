
import Footer from '../Pages/Shered/Footer/Footer';
import { Outlet } from "react-router-dom";
import Navbar from '../Pages/Shered/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;