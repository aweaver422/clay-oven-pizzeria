import {Link} from "react-router-dom";
import "./../css/Order.css";
import OrderCart from "../components/PageContent/OrderCart";
import OrderMenu from "../components/PageContent/OrderMenu";
import PageTitle from "../components/PageContent/PageTitle";

const Order = () => {
    return (
        <main id="content-order">
            <PageTitle name="ORDER" />
            <div className="columns">
                <OrderCart />
                <OrderMenu />  
            </div>       
        </main>
    );
};

export default Order;