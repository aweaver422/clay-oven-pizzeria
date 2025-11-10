import {useState, useEffect} from "react";
import "../../css/General.css";
import "../../css/Order.css";
import ItemDialog from "./ItemDialog";

const OrderItem = ({name, img, price, description, type}) => {
    const [showDialog, setShowDialog] = useState(false);

    const showItemDetails = () => {
        setShowDialog(true);
    }

    const closeItemDetails = () => {
        setShowDialog(false);
    }
    
    return (
        <>
            {showDialog?(
                <ItemDialog closeItemDialog={closeItemDetails}
                    name={name}
                    img={img}
                    type={type}
                    price={price}
                    desc={description}
                />
            ):("")}
            <section className="order-item" onClick={showItemDetails}>
                <img src={img} />
                <div className="columns">
                    <h4>{name}</h4>
                    <h4>${price}</h4>
                    <button>+</button>
                </div>
            </section>
        </>
    );
};

export default OrderItem;