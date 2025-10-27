import "../../css/General.css";
import "../../css/Order.css";
import OrderItem from "./OrderItem";

/* I only added a couple items on here just so you can see the idea and so the page isn't overloaded with those imports. Is there a better way to do it..? */
import imgBreadBites from "../../images/apps/breadBites.jpg"; 
import imgMeatballs from "../../images/apps/meatballs.jpg"
import imgSalad from "../../images/apps/salad.jpg";
import imgWings from "../../images/apps/wings.png";
import imgPep from "../../images/pizzas/pep.jpeg";
import imgCheese from "../../images/pizzas/cheese.jpg";
import imgMeatLovers from "../../images/pizzas/meat-lovers.png";
import imgFourCheese from "../../images/pizzas/four-cheese.png";
import imgCheesecake from "../../images/desserts/cheesecake.jpg";
import imgChocoCake from "../../images/desserts/chocolate-cake.jpg";
import imgSmores from "../../images/desserts/smores.png";
import imgApplePie from "../../images/desserts/apple-pie.jpg";

const OrderMenu = () => {
    return (
        <section className="columns">
            <section id="menu-list">
                <section id="menu-options" className="columns">
                    <OrderItem name="Parmesan Bread Bites" src={imgBreadBites} price="6" desc="Bite-size pieces of bread coated with butter, parmesan, and garlic seasoning."/>
                    <OrderItem name="Meatballs" src={imgMeatballs} price="8" desc="Pork meatballs covered with marinara sauce, parmesan, and garnish." />
                    <OrderItem name="House Salad" src={imgSalad} price="5" desc="Spring mix, tomatoes, red onions, bell pepper, and your choice of dressing: Ranch, Balsamic Vinagrette, Blue Cheese, Italian." />
                    <OrderItem name="Chicken Wings" src={imgWings} price="10" desc="Six chicken wings coated in your choice of our housemade sauces: Buffalo, BBQ, Garlic Parmesan, Teriyaki, Hot Honey." />
                    <OrderItem name="Pepperoni" src={imgPep} price="11" desc="Fresh mozzarella, parmesan, pepperoni." />
                    <OrderItem name="Cheese" src={imgCheese} price="10" desc="Fresh mozzarella, parmesan." />
                    <OrderItem name="Meat Lovers" src={imgMeatLovers} price="15" desc="Fresh mozzarella, bacon, pepperoni, sausage, hamburger." />
                    <OrderItem name="Four Cheese" src={imgFourCheese} price="11" desc="Fresh mozzarella, parmesan, feta, and provolone." />
                    <OrderItem name="Slice of Cheesecake" src={imgCheesecake} price="5" desc="Made from scratch, topped with fresh strawberries and drizzle." />
                    <OrderItem name="Slice of Chocolate Cake" src={imgChocoCake} price="6" desc="Made from scratch, three-layered chocolate cake with chocolate fudge icing." />
                    <OrderItem name="S'mores Pizza" src={imgSmores} price="12" desc="Pizza dough base with chocolate, marshmallows, and crushed graham crackers." />
                    <OrderItem name="Apple Pie Pizza" src={imgApplePie} price="10" desc="Pizza dough base with caramelized apples, brown sugar crumbles, and icing drizzle." />
                </section>
            </section>
        </section>
    );
};

export default OrderMenu;