import {Link} from "react-router-dom";
import "../../css/Careers.css";
import {useState} from "react";

const CareersForm = () => {
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
        <form onSubmit={onSubmit} id="work-appli-form" class="one">
                <input type="hidden" name="access_key" value="c05e4dce-6afb-4b14-bd69-07a30774eeeb" />
                <div class="columns">
                    <label class="one" for="name">Full Name:</label>
                    <input class="one" type="text" name="name" required />
                </div>
                <div class="columns">
                    <label class="one" for="phone">Phone Number:</label>
                    <input class="one" type="phone" name="phone" required />
                </div>
                <div class="columns">
                    <label class="one" for="email">Email:</label>
                    <input class="one" type="email" name="email" required />
                </div>
                <div class="columns">
                    <label class="one" for="address">Address:</label>
                    <input class="one" type="text" name="address" required />
                </div>

                <hr/>
                
                <div class="columns">
                    <label class="one" for="position">Position:</label>
                    <input class="one" type="text" name="position" required />
                </div>
                <div class="columns">
                    <label class="one" for="experience">Prior Experience:</label>
                    <input class="one" type="text" name="experience" required />
                </div>
                <div class="columns">
                    <label class="one" for="certifs">Certifications:</label>
                    <input class="one" type="text" name="certifs" required />
                </div>
                <div class="columns">
                    <label class="one" for="seeking">Seeking:</label>
                    <select class="one" type="text" name="seeking" required>
                        <option value="full">Full-Time</option>
                        <option value="part">Part-Time</option>
                        <option value="no-pref">No Preference</option>
                    </select>
                </div>
                <div class="columns">
                    <label class="one" for="availability">Availability:</label>
                    <select class="one" type="text" name="availability" required>
                        <option value="mon">Monday</option>
                        <option value="tue">Tuesday</option>
                        <option value="wed">Wednesday</option>
                        <option value="thu">Thursday</option>
                        <option value="fri">Friday</option>
                        <option value="sat">Saturday</option>
                        <option value="sun">Sunday</option>
                    </select>
                </div>

                <hr />

                <div class="columns">
                    <label class="one" for="felony">Have you ever been convicted of a felony?</label>
                    <select class="one" type="text" name="felony" required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="columns">
                    <label class="one" for="felony-exp">If yes please explain:</label>
                    <input class="one" type="text" name="felony-exp" />
                </div>
                <div class="columns">
                    <label class="one" for="fired">Have you ever been fired from a job?</label>
                    <select class="one" type="text" name="fired">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="columns">
                    <label class="one" for="fired-exp">If yes please explain:</label>
                    <input class="one" type="text" name="fired-exp" />
                </div>
                <div id="btn">  
                    <button id="btn-career-form" type="submit">Submit Form</button>
                </div>
                <span>{result}</span>
            </form>
    );
};

export default CareersForm;