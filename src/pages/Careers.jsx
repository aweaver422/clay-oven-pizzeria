import {Link} from "react-router-dom";
import "./../css/Careers.css";
import PageTitle from "../components/PageContent/PageTitle";
import CareersInfo from "../components/PageContent/CareersInfo";
import CareersForm from "../components/PageContent/CareersForm";

const Careers = () => {
    return (
        <main>
            <PageTitle name="CAREERS" />
            <div className="columns">
                <CareersInfo />
                <CareersForm />
            </div>
        </main>
    );
};

export default Careers;