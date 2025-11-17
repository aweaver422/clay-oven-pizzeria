import "./../css/Careers.css";
import CareersInfo from "../components/PageContent/CareersInfo";
import CareersForm from "../components/PageContent/CareersForm";

const Careers = () => {
    return (
        <main>
            <div className="title">
                <h1>CAREERS</h1>
            </div>
            <div className="columns">
                <CareersInfo />
                <CareersForm />
            </div>
        </main>
    );
};

export default Careers;