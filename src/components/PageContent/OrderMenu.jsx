import "../../css/General.css";
import "../../css/Order.css";
import ItemList from "../PageContent/ItemsList";


const OrderMenu = () => {
    return (
        <section id="order-menu" className="columns">
            <ItemList num={20} />
        </section>
    );
};

export default OrderMenu;