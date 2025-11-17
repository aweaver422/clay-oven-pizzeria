import "../../css/Home.css";
import "../../css/General.css";
import Slideshow from "../PageContent/Slideshow";


const HomeMenuPreview = () => {
    return (
        <section id="content-menu-preview">
            <h2>PREVIEW OUR BESTSELLERS</h2>
            <div id="menu-preview-list" className="columns">
                <Slideshow category="pizzas"/>
            </div>
        </section>
    );
};

export default HomeMenuPreview;