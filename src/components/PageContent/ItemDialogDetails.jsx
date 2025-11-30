import "../../css/Specials.css";
const ItemDialogDetails = (props) => {

    return (
        <div className="columns">
            <img src={props.img} alt="suggestion" id="suggestion-pic" />
            <div id="dialog-content">
                <section id="edit-links">
                    <button onClick={props.showEdit}>&#9998;</button>
                    <button onClick={props.showDelete}>&#x2715;</button>
                </section>
                <h3>{props.name}</h3>
                <p>Ingredients: {props.ingredients}</p>
            </div>
        </div>

    );
};

export default ItemDialogDetails;