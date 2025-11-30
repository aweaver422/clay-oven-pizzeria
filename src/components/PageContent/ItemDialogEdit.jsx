import React, { useState } from "react";

const ItemDialogEdit = (props) => {

    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("http://localhost:3001/images/" + props.img);

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const onSubmit = async(event) => {
        event.preventDefault();
        setResult("... sending");
        console.log("ItemDialog _id:", props._id);
        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch(`https://server-pizzas-fall-2025.onrender.com/api/menu/${props._id}`,{
            method:"PUT",
            body:formData
        });

        if(response.status === 200) {
            setResult("Suggestion updated successfully");
            event.target.reset();
            props.closeEditDialog();
            props.updateItem(await response.json());
        } else {
            setResult("Error editing suggestion");
        }
    };

    return (
       <form id="edit-property-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name ">Suggestion Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={props.name}
                required
              />
            </p>
            <p>
              <label htmlFor="ingredients">Ingredients:</label>
              <input
                type="text"
                id="ingredients"
                name="ingredients"
                defaultValue={props.ingredients}
                required
              />
            </p>

            <section>
                    <div>
                        <p id="img-prev-section">
                          {prevSrc !== "" && (
                            <img id="img-prev" src={prevSrc} alt="Preview" />
                          )}
                        </p>
                    </div>
                    <p id="img-upload">
                        <label htmlFor="img">Upload Image:</label>
                        <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                    </p>
                </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>

    );
};

export default ItemDialogEdit;