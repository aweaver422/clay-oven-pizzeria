import "../../css/General.css";
import "../../css/Order.css";

const OrderCart = () => {
    return (
        <section id="options-cart">
            <section id="cart-checkout-info" class="columns">
                <h3>Cart (0)</h3>
                <button>Check Out</button>
            </section>
            <section id="cart-list">
                <ul>
                    <li>Cart is Empty</li>
                </ul>
            </section>
        </section>
    );
};

export default OrderCart;