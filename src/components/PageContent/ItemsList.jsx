import {useState, useEffect} from "react";
import axios from "axios";
import "../../css/Order.css"
import OrderItem from "../PageContent/OrderItem";

const ItemsList = (props) => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const loadItems = async() => {
            try {
                const response = await axios.get("https://server-pizzas-fall-2025-udn4.onrender.com/api/menu");
                setItems(response.data.slice(0,props.num));
            } catch (error) {
                console.error("Error loading menu: ", error)
            }
        };
        loadItems();
    },[props.num]);

    return (
        <div id="menu-list" className="columns">
            {items.map((item)=>(
                <OrderItem  key={item._id} 
                        id={item._id}
                        name={item.name} 
                        img={`https://server-pizzas-fall-2025-udn4.onrender.com${item.img}`}
                        type={item.type}
                        description={item.description}
                        price={item.price} />
            ))}
        </div>
    )
};

export default ItemsList;