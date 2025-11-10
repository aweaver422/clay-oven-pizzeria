import "../../css/Menu.css";

const ItemDialog = (props) => {
    return (
        <div id="item-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeItemDialog}
                    >
                        &times;
                    </span>
                    <div id="dialog-content">
                        <img src={props.img}/>
                        <h3>{props.name}</h3>
                        <p>Type: {props.type}</p>
                        <p>Price: ${props.price}</p>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDialog;