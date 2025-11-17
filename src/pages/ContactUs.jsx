import "../css/ContactUs.css";
import Socials from "../components/PageContent/ContactSocials";
import ContactForm from "../components/PageContent/ContactForm";


const ContactUs = () => {
    return (
        <main>
            <div className="title">
                <h1>CONTACT US</h1>
            </div>
            <ContactForm/>
            <Socials />
        </main>
    );
};

export default ContactUs;