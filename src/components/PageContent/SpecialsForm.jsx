import "../../css/Specials.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ItemDialog from "./ItemDialog";

const SpecialsForm = () => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedSuggestion, setSelectedSuggestion] = useState(null); // for dialog

    // Handle image preview
    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    // Add suggestion to server
    const addToServer = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);

        try {
            const response = await fetch(
                "https://server-pizzas-fall-2025.onrender.com/api/menu",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (response.status === 200) {
                const newSuggestion = await response.json();
                setSuggestions((prev) => [...prev, newSuggestion]);
                setResult("Suggestion added successfully");
                event.target.reset();
                setPrevSrc("");
            } else {
                setResult("Error adding suggestion");
            }
        } catch (err) {
            console.error(err);
            setResult("Error adding suggestion");
        }
    };

    // Load suggestions on mount
    useEffect(() => {
        axios
            .get("https://server-pizzas-fall-2025.onrender.com/api/menu?type=suggestion")
            .then((res) => setSuggestions(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="columns">
            {/* Suggestion form */}
            <div id="suggestion-form" className="one">
                <h2>Submit a Suggestion</h2>
                <p>Have an idea for a Pizza of the Month? Submit your requests below!</p>
                <form onSubmit={addToServer}>
                    <h3>Suggest New Pizza</h3>
                    <p>
                        <label htmlFor="name">Pizza Name: </label>
                        <input type="text" id="name" name="name" required minLength="3" />
                    </p>
                    <p>
                        <label htmlFor="ingredients">Ingredients: </label>
                        <input type="text" id="ingredients" name="ingredients" required minLength="3" />
                    </p>
                    <section id="img-section" className="columns">
                        <p id="img-prev-section">
                            {prevSrc && <img id="img-prev" src={prevSrc} alt="preview" />}
                        </p>
                        <p id="img-upload">
                            <label htmlFor="img">Upload Image:</label>
                            <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                        </p>
                    </section>
                    <p>
                        <button type="submit">Add</button>
                    </p>
                    <p>{result}</p>
                </form>
            </div>

            {/* Suggestion gallery */}
            <div id="suggestion-gallery" className="one">
                {suggestions.map((d) => (
                    <div
                        key={d._id}
                        className="suggestion-item"
                        onClick={() => setSelectedSuggestion(d)} // Open dialog
                    >
                        {d.img && <img src={d.img} alt={d.name} className="suggestion-img" />}
                        <h3>{d.name}</h3>
                        {d.ingredients && <p><strong>Ingredients:</strong> {d.ingredients}</p>}
                    </div>
                ))}
            </div>

            {/* Suggestion dialog */}
            {selectedSuggestion && (
                <ItemDialog
                    enableSuggestions={true}
                    closeItemDialog={() => setSelectedSuggestion(null)}
                    _id={selectedSuggestion._id}
                    name={selectedSuggestion.name}
                    img={selectedSuggestion.img}
                    ingredients={selectedSuggestion.ingredients}
                    type={selectedSuggestion.type} // optional
                />
            )}
        </section>
    );
};

export default SpecialsForm;