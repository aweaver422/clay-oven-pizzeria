import React, { useState } from "react"

const ItemDialogDelete = (props) => {
    const [result, setResult] = useState("");

    const deleteItem = async() => {
        const response = await fetch(`https://server-pizzas-fall-2025.onrender.com/api/menu/${props._id}`, {
            method:"DELETE"
        });

        if(response.status === 200) {
            setResult("Suggestion successfully delete");
            props.hideItem(props._id);
            props.closeDeleteDialog();
        } else {
            setResult("Sorry, we couldn't delete the suggestion.");
        }

    };

    return (
        <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick = {props.closeDeleteDialog}>No</button>            
              <button onClick={deleteItem}>Yes</button>
            </section>
            <span>{result}</span>
        </div>
    );
};

export default ItemDialogDelete;