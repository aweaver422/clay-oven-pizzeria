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
                    <div class="columns">
                        <img src={"https://portiaportia.github.io/json/images/house-plans/"+props.main_image} alt="house" />
                        <div id="dialog-content">
                            <h3>{item.name}</h3>
                            <img src={item.img}/>
                            <p>Type: {item.type}</p>
                            <p>{item.description}</p>
                            <p>Price: {item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDialog;