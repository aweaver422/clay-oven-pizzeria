import "./../css/Menu.css";
import MenuItem from "../components/PageContent/MenuItem";

/* I only added a couple items on here just so you can see the idea and so the page isn't overloaded with those imports. Is there a better way to do it..? */
import imgBreadBites from "../images/apps/breadBites.jpg"; 
import imgMeatballs from "../images/apps/meatballs.jpg"
import imgSalad from "../images/apps/salad.jpg";
import imgWings from "../images/apps/wings.png";
import imgPep from "../images/pizzas/pep.jpeg";
import imgCheese from "../images/pizzas/cheese.jpg";
import imgMeatLovers from "../images/pizzas/meat-lovers.png";
import imgFourCheese from "../images/pizzas/four-cheese.png";
import imgCheesecake from "../images/desserts/cheesecake.jpg";
import imgChocoCake from "../images/desserts/chocolate-cake.jpg";
import imgSmores from "../images/desserts/smores.png";
import imgApplePie from "../images/desserts/apple-pie.jpg";

const Menu = () => {
    return (
        <main>
            <div className="title">
                <h1>MENU</h1>
            </div>
            <section class="menu-main-content">
                <section id="menu-items">
                    <section id="app">
                        <h2>APPETIZERS</h2>
                        <MenuItem name="PARMESAN BREAD BITES" src={imgBreadBites} price="6" desc="Bite-size pieces of bread coated with butter, parmesan, and garlic seasoning." />
                        <MenuItem name="MEATBALLS" src={imgMeatballs} price="8" desc="Pork meatballs covered with marinara sauce, parmesan, and garnish." />
                        <MenuItem name="HOUSE SALAD" src={imgSalad} price="5" desc="Spring mix, tomatoes, red onions, bell pepper, and your choice of dressing: Ranch, Balsamic Vinagrette, Blue Cheese, Italian." />
                        <MenuItem name="CHICKEN WINGS" src={imgWings} price="10" desc="Six chicken wings coated in your choice of our housemade sauces: Buffalo, BBQ, Garlic Parmesan, Teriyaki, Hot Honey." />
                    </section>
                    
                    <section id="pizza">
                        <h2>PIZZAS</h2>
                        <MenuItem name="PEPPERONI" src={imgPep} price="11" desc="Fresh mozzarella, parmesan, pepperoni." />
                        <MenuItem name="CHEESE" src={imgCheese} price="10" desc="Fresh mozzarella, parmesan" />
                        <MenuItem name="MEAT LOVERS" src={imgMeatLovers} price="15" desc="Fresh mozzarella, bacon, pepperoni, sausage, hamburger." />
                        <MenuItem name="FOUR CHEESE" src={imgFourCheese} price="11" desc="Fresh mozzarella, parmesan, feta, and provolone." />
                    </section>
                    
                    <section id="dessert">
                        <h2>DESSERTS</h2>
                        <MenuItem name="SLICE OF CHEESECAKE" src={imgCheesecake} price="5" desc="Made from scratch, topped with a fresh strawberry and drizzle." />
                        <MenuItem name="SLICE OF CHOCOLATE CAKE" src={imgChocoCake} price="6" desc="Made from scratch, three-layered chocolate cake with chocolate fudge icing." />
                        <MenuItem name="S'MORES PIZZA" src={imgSmores} price="12" desc="Pizza dough base with chocolate, marshmallows, and crushed graham crackers." />
                        <MenuItem name="APPLE PIE PIZZA" src={imgApplePie} price="10" desc="Pizza dough base with caramelized apples, brown sugar crumbles, and icing drizzle." />
                    </section>
                </section>
            </section>
        </main>
    );
};

export default Menu;