import "../../css/Specials.css";
import "../../css/General.css";

const SpecialsPizza = ({ month, year, src, price, desc, highlight}) => {
    return (
        <section className="columns monthly-pizza" >
            <div className="one specialImg">
                <img src={src} />
            </div>
            <section className="one">
                <h1>{month} {year} Pizza of the Month</h1>
                <p>{desc}</p>
                <h4>${price}</h4>
            </section>
        </section>
    );
};

export default SpecialsPizza;