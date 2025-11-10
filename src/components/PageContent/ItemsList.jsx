import {useState, useEffect} from "react";
import axios from "axios";
import "../../css/Order.css";
import OrderItem from "../PageContent/OrderItem";

const Item = (props) => {
    const [items, setItems] = useState([]);
    
    useEffect(()=>{
        const loadItems = async() => {
            try {
                const response = await axios.get("http://localhost:3001/api/menu/");
                setItems(response.data.slice(0,props.num));
            } catch (error) {
                console.error("Error loading menu: ", error)
            }
        };
        loadItems();
    },[]);

    return (
        <div id="menu-options" className="columns">
            {items.map((item)=>(
                <OrderItem  
                        key={item._id} 
                        id={item._id}
                        name={item.name} 
                        img={`https://server-pizzas-fall-2025.onrender.com${item.img}`}
                        type={item.type}
                        description={item.description}
                        price={item.price} 
                />
            ))}
        </div>
    )
};

export default Item;