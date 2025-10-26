import "../../css/ContactUs.css";
import imgSocials from "../../images/other/phone-stock.jpg";
import ContactSocialsList from "./ContactSocialsList";

const ContactSocials = () => {
    return (
        <section id="socials" class="columns">
                <div class="one">
                    <div id="img-socials">
                        <img src={imgSocials} />
                    </div>
                    <ContactSocialsList />
                </div>
                <section class="one" id="socials-desc">
                    <p>Stay connected with us on social media for a slice of the action! Be the first to hear about our latest pizzas, monthly specials, and exclusive deals. Follow along for exciting giveaways, limited-time promotions, and behind-the-scenes updates you won’t find anywhere else. Join our online community and never miss a chance to grab your favorite pies at a great price!</p>
                </section>
            </section>
    );
};

export default ContactSocials;