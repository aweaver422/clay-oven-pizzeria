import {Link} from "react-router-dom";
import "./../css/Menu.css";
import PageTitle from "../components/PageContent/PageTitle";
import MenuItem from "../components/PageContent/MenuItem";

/* I only added a couple items on here just so you can see the idea and so the page isn't overloaded with those imports. Is there a better way to do it..? */
import imgBreadBites from "../images/apps/breadBites.jpg"; 
import imgMeatballs from "../images/apps/meatballs.jpg"
import imgPep from "../images/pizzas/pep.jpeg";
import imgCheese from "../images/pizzas/cheese.jpg";
import imgCheesecake from "../images/desserts/cheesecake.jpg";
import imgChocoCake from "../images/desserts/chocolate-cake.jpg";

const Menu = () => {
    return (
        <main>
            <PageTitle name="MENU" />
            <section class="menu-main-content">
                <section id="menu-items">
                    <section id="app">
                        <h2>APPETIZERS</h2>
                        <MenuItem name="PARMESAN BREAD BITES" src={imgBreadBites} price="6" desc="Bite-size pieces of bread coated with butter, parmesan, and garlic seasoning." />
                        <MenuItem name="MEATBALLS" src={imgMeatballs} price="8" desc="Pork meatballs covered with marinara sauce, parmesan, and garnish." />
                    </section>
                    
                    <section id="pizza">
                        <h2>PIZZAS</h2>
                        <MenuItem name="PEPPERONI" src={imgPep} price="11" desc="Fresh mozzarella, parmesan, pepperoni." />
                        <MenuItem name="CHEESE" src={imgCheese} price="10" desc="Fresh mozzarella, parmesan" />
                    </section>
                    
                    <section id="dessert">
                        <h2>DESSERTS</h2>
                        <MenuItem name="SLICE OF CHEESECAKE" src={imgCheesecake} price="5" desc="Made from scratch, topped with a fresh strawberry and drizzle." />
                        <MenuItem name="SLICE OF CHOCOLATE CAKE" src={imgChocoCake} price="6" desc="Made from scratch, three-layered chocolate cake with chocolate fudge icing." />
                    </section>
                </section>
            </section>
        </main>
    );
};

export default Menu;