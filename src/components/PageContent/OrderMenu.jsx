import "../../css/General.css";
import "../../css/Order.css";
import OrderItem from "./OrderItem";

/* I only added a couple items on here just so you can see the idea and so the page isn't overloaded with those imports. Is there a better way to do it..? */
import imgBreadBites from "../../images/apps/breadBites.jpg"; 
import imgMeatballs from "../../images/apps/meatballs.jpg"
import imgPep from "../../images/pizzas/pep.jpeg";
import imgCheese from "../../images/pizzas/cheese.jpg";
import imgCheesecake from "../../images/desserts/cheesecake.jpg";
import imgChocoCake from "../../images/desserts/chocolate-cake.jpg";

const OrderMenu = () => {
    return (
        <section className="columns">
            <section id="menu-list">
                <section id="menu-options" className="columns">
                    <OrderItem name="Parmesan Bread Bites" src={imgBreadBites} price="6" desc="Bite-size pieces of bread coated with butter, parmesan, and garlic seasoning."/>
                    <OrderItem name="Meatballs" src={imgMeatballs} price="8" desc="Pork meatballs covered with marinara sauce, parmesan, and garnish." />
                    <OrderItem name="Pepperoni" src={imgPep} price="11" desc="Fresh mozzarella, parmesan, pepperoni." />
                    <OrderItem name="Cheese" src={imgCheese} price="10" desc="Fresh mozzarella, parmesan." />
                    <OrderItem name="Slice of Cheesecake" src={imgCheesecake} price="5" desc="Made from scratch, topped with fresh strawberries and drizzle." />
                    <OrderItem name="Slice of Chocolate Cake" src={imgChocoCake} price="6" desc="Made from scratch, three-layered chocolate cake with chocolate fudge icing." />
                </section>
            </section>
        </section>
    );
};

export default OrderMenu;