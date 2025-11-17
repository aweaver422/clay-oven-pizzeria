import "./../css/Order.css";
import OrderCart from "../components/PageContent/OrderCart";
import OrderMenu from "../components/PageContent/OrderMenu";

const Order = () => {
    return (
        <main id="content-order">
            <div className="title">
                <h1>ORDER</h1>
            </div>
            <div className="columns">
                <OrderCart />
                <OrderMenu />  
            </div>       
        </main>
    );
};

export default Order;