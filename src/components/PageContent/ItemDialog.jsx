import "../../css/Menu.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ItemDialogDetails from "./ItemDialogDetails";
import ItemDialogEdit from "./ItemDialogEdit";
import ItemDialogDelete from "./ItemDialogDelete";

const ItemDialog = (props) => {
    const location = useLocation();
    const enableSuggestions = props.enableSuggestions ?? location.pathname === "/specials";
    //const enableSuggestions = props.enableSuggestions;
    const [showContent, setShowContent] = useState("details");

    const showEdit = () => setShowContent("edit");
    const showDelete = () => setShowContent("delete");

    return (
        <div id="item-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    
                    {/* SUGGESTION DIALOG */}
                    {enableSuggestions ? (
                    <div id="suggestion-section">
                        {showContent === "details" ? (
                            <ItemDialogDetails
                                showEdit={showEdit}
                                showDelete={showDelete}
                                _id={props._id}
                                name={props.name}
                                img={props.img}
                                ingredients={props.ingredients}
                            />
                        ) : showContent === "edit" ? (
                            <ItemDialogEdit
                                _id={props._id}
                                name={props.name}
                                img={props.img}
                                ingredients={props.ingredients}
                                closeEditDialog={props.closeItemDialog}
                                updateItem={props.updateItem}
                            />
                        ) : (
                            <ItemDialogDelete
                                _id={props._id}
                                name={props.name}
                                closeDeleteDialog={props.closeItemDialog}
                                hideItem={props.hideItem}
                            />
                        )}
                    </div>
                    ) : (
                    // Menu Dialog
                    <div id="dialog-content">
                        <img src={props.img} alt={props.name} />
                        <h3>{props.name}</h3>
                        <p>Type: {props.type}</p>
                        <p>Price: ${props.price}</p>
                        <p>{props.desc}</p>
                    </div>
                    )}

                        <span
                            id="dialog-close"
                            className="w3-button w3-display-topright"
                            onClick={props.closeItemDialog}
                        >
                            &times;
                        </span>

                    </div>
                </div>
            </div>
    );
};

export default ItemDialog;