import {Link} from "react-router-dom";
import "../css/ContactUs.css";
import PageTitle from "../components/PageContent/PageTitle";
import Socials from "../components/PageContent/ContactSocials";
import ContactForm from "../components/PageContent/ContactForm";


const ContactUs = () => {
    return (
        <main>
            <PageTitle name="CONTACT US" />
            <ContactForm/>
            <Socials />
        </main>
    );
};

export default ContactUs;