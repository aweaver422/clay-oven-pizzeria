import "../../css/Header.css";
import "../../css/General.css";
import imgHeader from "../../images/other/home-pg-pizza.jpeg";

const ContentHeader = () => {
    return (
        <section id="content-header">
                <img src={imgHeader} />
                <section className="hide-small">
                    <h2>CLAY OVEN PIZZERIA</h2>
                </section>
        </section>
    );
};

export default ContentHeader;