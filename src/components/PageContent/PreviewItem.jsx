import "../../css/Home.css";
import "../../css/General.css";

const PreviewItem = ({ type, src }) => {
    return (
        <section className="preview-item one">
            <div className="img-menu-preview">
                <img src={src} />
            </div>
            <h4>{type}</h4>
        </section>
    );
};

export default PreviewItem;