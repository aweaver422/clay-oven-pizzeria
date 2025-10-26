import {Link} from "react-router-dom";
import "../../css/Careers.css";
import imgPizzaMaker from "../../images/other/pizzamaker.png";

const CareersInfo = () => {
    return (
        <section id="career-info" className="one">
            <div id="career-img" className="hide-small">
                <img src={imgPizzaMaker} />
            </div>
            <h1>We Are Currently Hiring for the Following Positions:</h1>
            <div className="columns" id="positions">
                <ul>
                    <li>Pizza Maker</li>
                    <li>Prep Cook</li>
                    <li>Server</li>
                    <li>Host</li>
                    <li>Dishwasher</li>
                </ul>
                <ul className="hide-small">
                    <li>Makes and cooks pizzas</li>
                    <li>Prepares ingredients for cooking</li>
                    <li>Takes orders and serves food</li>
                    <li>Greets and seats guests</li>
                    <li>Washes dishes and kitchen tools</li>
                </ul>
            </div>
        </section>
    );
};

export default CareersInfo;