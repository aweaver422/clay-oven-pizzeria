import {Link} from "react-router-dom";
import "../../css/Home.css";
import "../../css/General.css";
import placeOrder from "../../images/other/placeOrder.jpg";

const HomeOrder = () => {
    return (
        <section id="content-place-order">
            <section className="columns">
                <div id="info-place-order" className="one">
                    <h3>PLACE YOUR ORDER</h3>
                    <h4>Use our new mobile system today!</h4>
                    <button><Link to="/order">Order Now!</Link></button>
                </div>
                <div id="img-content-place-order" className="one hide-small">
                    <img src={placeOrder} alt="place order"/>
                </div>
            </section>
        </section>
    );
};

export default HomeOrder;