import {Link} from "react-router-dom";
import "./../css/Specials.css";
import "./../css/General.css";
import PageTitle from "../components/PageContent/PageTitle";
import TextSec from "../components/PageContent/TextSec";
import Special from "../components/PageContent/SpecialsPizza";
import imgSep25 from "../images/specials/mush.jpeg";
import imgAug25 from "../images/specials/hawaiian.jpg";
import imgJul25 from "../images/specials/salami.jpeg";

const Specials = () => {
    return (
        <main id="specials" className="content">
            <PageTitle name="MONTHLY SPECIALS"/>
            <TextSec title="" text="Every month, we introduce a Monthly Special Pizza—a one-of-a-kind creation crafted to surprise your taste buds. Each limited-time pizza features unique flavors, fresh seasonal ingredients, and creative combinations you won’t find on our regular menu. Once the month ends, it’s gone—so don’t miss your chance to try something new and delicious while it lasts!" />
            <Special highlight="true" month="September" year="2025" src={imgSep25} price="14" desc="Our September Pizza of the Month features a golden, hand-tossed crust topped with a rich layer of melted cheese and tangy tomato sauce. Generously layered with sliced mushrooms, bits of savory meat, and fresh herbs, it’s finished with a drizzle of creamy white sauce that adds both flavor and visual flair. The vibrant mix of orange cheese, earthy toppings, and green garnish creates a mouthwatering balance of color and taste—perfect for anyone craving a bold and satisfying slice." />
            <Special month="August" year="2025" src={imgAug25} price="13" desc="Our August Pizza of the Month features a perfectly baked golden crust topped with a smooth layer of tomato sauce and melted mozzarella cheese. Generous pieces of savory ham and juicy pineapple chunks are scattered across the surface, creating the perfect balance of sweet and salty flavors. With its vibrant colors and irresistible aroma, this classic Hawaiian-style pizza is a refreshing and satisfying choice for anyone craving a tropical twist on tradition." />
            <Special highlight="true" month="July" year="2025" src={imgJul25} price="15" desc="Our July Pizza of the Month is a bold fusion of savory and fresh flavors that excite every bite. Crispy, smoky strips of bacon and spicy, slightly tangy slices of salami are scattered generously across a golden, hand-stretched crust. Fresh mozzarella melts into creamy pockets, balancing the saltiness of the meats, while bright, fragrant sprigs of cilantro add a surprising burst of freshness that elevates the entire pie. Each slice delivers a satisfying mix of textures—crispy edges, chewy dough, gooey cheese, and tender toppings—making it a pizza that’s both indulgent and vibrant, perfect for those craving something adventurous yet comforting." />
        </main>
    );
};

export default Specials;