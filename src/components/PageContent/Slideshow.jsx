import "../../css/Slideshow.css"
import {useState} from "react";

const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    
    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../../images/pizzas", false, /\.(png|jpe?g|svg$|webp)/)
    );

    const slideForward = () => {
        setSlideIndex(slideIndex < images.length - 1 ? slideIndex + 1 : 0);
    };

    const slideBackward = () => {
        setSlideIndex(slideIndex == 0 ? images.length-1 : slideIndex-1);
    };

    return (
        <section id="slideshow">
            <img src={images[slideIndex]} />
            <p className="arrow" onClick={slideForward} id="right-arrow">&gt;</p>
            <p className="arrow" onClick={slideBackward} id="left-arrow">&lt;</p>
        </section>
    );
}

export default Slideshow;
    