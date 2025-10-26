import {Outlet} from "react-router-dom";
import Header from './components/Layout/Header';
import Footer from "./components/Layout/Footer";

const Layout = () => {
    return (
        <div id="content">
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
};

export default Layout;