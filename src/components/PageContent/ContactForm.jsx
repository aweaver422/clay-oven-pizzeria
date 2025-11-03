import "../../css/ContactUs.css";
import {useState} from "react";
import imgWoodfire from "../../images/other/woodfireStock.jpg";

const ContactForm = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c05e4dce-6afb-4b14-bd69-07a30774eeeb");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return (
        <main className="columns">
            <section id="form" className="one">
                <h2>Questions? Concerns?</h2>
                <p>Give us a call today at (123) 456-7890, or submit a message below:</p>
                <form onSubmit={onSubmit} id="contact-inputs">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="phone" name="phone" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" required></textarea>
                    </div>
                    <button id="btn-contact-submit" type="submit">Submit Form</button>
                    <span>{result}</span>
                </form>
            </section>
            <section id="contact-form" className="columns one">
                <div className="one hide-small">
                    <img src={imgWoodfire} id="contactImg" />
                </div>
            </section>
        </main>
    );
};

export default ContactForm;