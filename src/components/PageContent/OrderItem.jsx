import "../../css/General.css";
import "../../css/Order.css";

const OrderItem = ({name, img, price, description}) => {
    return (
        <section className="order-item">
            <img src={img} />
            <div className="columns">
                <h4>{name}</h4>
                <h4>${price}</h4>
                <button>+</button>
            </div>
            <p>{description}</p>
        </section>
    );
};

export default OrderItem;