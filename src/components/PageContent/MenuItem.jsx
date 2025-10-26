import "../../css/Menu.css";
import "../../css/General.css";

const MenuItem = ({ name, src, desc, price }) => {
    return (
        <section className="item columns">
            <div className="menuImg menu-imgs hide-small">
                <img src={src} />
            </div>
            <div>
                <section className="columns">
                    <h3>{name}</h3>
                    <h4>${price}</h4>
                </section>
                <p>{desc}</p>
            </div>
        </section>
    );
};

export default MenuItem;