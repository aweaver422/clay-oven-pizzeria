import "../../css/ContactUs.css";
import tempMap from "../../images/other/tempMap.png";

const ContactLocation = () => {
    return (
        <section id="map" className="columns">
            <img className="one" src={tempMap} alt="temp map"/>
            <div className="one">
                <h1>Our Restaurant Location</h1>
                <p id="map-desc">123 Gervais St, Columbia, SC 29201</p>
            </div>
        </section>
    );
};

export default ContactLocation;