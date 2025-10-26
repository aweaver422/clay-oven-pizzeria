import {Link} from "react-router-dom";
import "./../css/Home.css";
import ContentHeader from "../components/PageContent/ContentHeader";
import HomeAboutUs from "../components/PageContent/TextSec";
import HomeOrder from "../components/PageContent/HomeOrder";
import HomeMenuPreview from "../components/PageContent/HomeMenuPreview";
import HomeRewards from "../components/PageContent/HomeRewards";


const Home = () => {
    return (
        <main>
            <ContentHeader />
            <HomeAboutUs title="ABOUT US" text="At Clay Oven Pizzeria, we believe pizza is more than just food—it’s an experience meant to be shared. Using only the freshest ingredients, house-made dough, and signature sauces, we craft every pizza with care and flavor in mind. Whether you’re stopping by for a quick slice or gathering with friends and family, our warm and welcoming atmosphere makes every meal memorable."/>
            <HomeOrder />
            <HomeMenuPreview />
            <HomeRewards />
        </main>
    );
};

export default Home;