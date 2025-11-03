import "../../css/Home.css";
import "../../css/General.css";
import PreviewItem from "../PageContent/PreviewItem";
import Slideshow from "../PageContent/Slideshow";
import pep from "../../images/pizzas/pep.jpeg";
import cheese from "../../images/pizzas/cheese.jpg";
import shrimp from "../../images/pizzas/shrimp-mari.jpg";
import fajita from "../../images/pizzas/chicken-fajita.jpg";


const HomeMenuPreview = () => {
    return (
        <section id="content-menu-preview">
            <h2>PREVIEW OUR BESTSELLERS</h2>
            <div id="menu-preview-list" className="columns">
                <Slideshow category="pizzas"/>
                {/*
                <PreviewItem type="Pepperoni" src={pep} />
                <PreviewItem type="Cheese" src={cheese} />
                <PreviewItem type="Shrimp Marinara" src={shrimp} />
                <PreviewItem type="Chicken Fajita" src={fajita} />
                */}
            </div>
        </section>
    );
};

export default HomeMenuPreview;