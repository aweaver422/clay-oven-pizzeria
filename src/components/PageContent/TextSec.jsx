import "../../css/General.css";

const HomeAboutUs = ({title, text}) => {
    return (
        <section>
            <section id="content-about-us">
                <h3>{title}</h3>
                <p>{text}</p>
            </section>
        </section>
    );
};

export default HomeAboutUs;