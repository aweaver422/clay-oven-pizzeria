import {Link} from "react-router-dom";
import "../css/ContactUs.css";
import PageTitle from "../components/PageContent/PageTitle";
import ContactFormSec from "../components/PageContent/ContactFormSec";
import Socials from "../components/PageContent/ContactSocials";
import Location from "../components/PageContent/ContactLocation";


const ContactUs = () => {
    return (
        <main>
            <PageTitle name="CONTACT US" />
            <ContactFormSec />
            <Socials />
            <Location />
        </main>
    );
};

export default ContactUs;