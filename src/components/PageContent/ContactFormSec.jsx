import {Link} from "react-router-dom";
import "../../css/ContactUs.css";
import ContactForm from "./ContactForm";
import imgWoodfire from "../../images/other/woodfireStock.jpg";


const ContactUs = () => {
    return (
        <main>
            <section id="contact-form" className="columns">
                <ContactForm />
                <div className="one hide-small">
                    <img src={imgWoodfire} id="contactImg" />
                </div>
            </section>
        </main>
    );
};

export default ContactUs;