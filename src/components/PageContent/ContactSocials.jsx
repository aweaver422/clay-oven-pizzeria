import "../../css/ContactUs.css";
import imgSocials from "../../images/other/phone-stock.jpg";
import tempMap from "../../images/other/tempMap.png";


const ContactSocials = () => {
    return (
        <div>
            <section id="socials" class="columns">
                <div class="one">
                    <div id="img-socials">
                        <img src={imgSocials} />
                    </div>
                    <section id="socials-list">
                    <h1>Follow us on our social medias!</h1>
                    <ul>
                        <li>Facebook: Clay Oven Pizzeria</li>
                        <li>Instagram: @clayovenpizzeria</li>
                        <li>TikTok: @clay-oven-pizzeria</li>
                    </ul>
                </section>
                </div>
                <section class="one" id="socials-desc">
                    <p>Stay connected with us on social media for a slice of the action! Be the first to hear about our latest pizzas, monthly specials, and exclusive deals. Follow along for exciting giveaways, limited-time promotions, and behind-the-scenes updates you won’t find anywhere else. Join our online community and never miss a chance to grab your favorite pies at a great price!</p>
                </section>
            </section>
            <section id="map" className="columns">
                <img className="one" src={tempMap} alt="temp map"/>
                <div className="one">
                    <h1>Our Restaurant Location</h1>
                    <p id="map-desc">123 Gervais St, Columbia, SC 29201</p>
                </div>
            </section>
        </div>
    );
};

export default ContactSocials;