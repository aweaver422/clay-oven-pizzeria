import "../../css/General.css";
import "../../css/Order.css";

const OrderItem = ({name, src, price, desc}) => {
    return (
        <section class="order-item">
            <img src={src} />
            <div class="columns">
                <h4>{name}</h4>
                <h4>${price}</h4>
                <button>+</button>
            </div>
        </section>
    );
};

export default OrderItem;