import { useEffect } from "react";

export default function IntroForm() {
    useEffect(() => {
        // Load your original JS scripts exactly as-is
        const scriptSources = [
            "/scripts/generate_html.js",
            "/scripts/introduction.js",
            "/scripts/generate_json.js",
            "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js",
            "https://lint.page/kit/4d0fe3.js"
        ];

        scriptSources.forEach((src) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = false;
            document.body.appendChild(script);
        });

        return () => {};
    }, []);

    return (
        <main>
        <h2>Introduction Form</h2>
        <h3>Please submit the form below.</h3>

        <form id="intro-form">

        {/* NAME FIELDS */}
        <label>First Name:
        <input type="text" name="first_name" required defaultValue="Amir" />
        </label>

        <label>Middle Name / Initial (optional):
        <input type="text" name="middle_name" defaultValue="J" />
        </label>

        <label>Nickname / Preferred Name (optional):
        <input type="text" name="preferred_name" />
        </label>

        <label>Last Name:
        <input type="text" name="last_name" required defaultValue="Homsi" />
        </label>

        {/* ACKNOWLEDGMENT */}
        <label>Acknowledgment Statement:
        <input
        type="text"
        name="ack_statement"
        required
        defaultValue="I understand that what I put here is publicly available on the web and I won't put anything here I don't want the public to see"
        />
        </label>

        <label>Acknowledgment Date:
        <input
        type="text"
        name="ack_date"
        id="ack_date"
        required
        defaultValue="2026-01-12"
        placeholder="YYYY-MM-DD"
        />
        </label>

        {/* MASCOT */}
        <label>Mascot Adjective:
        <input type="text" name="mascot_adj" required defaultValue="Ascended" />
        </label>

        <label>Mascot Animal:
        <input type="text" name="mascot_animal" required defaultValue="Human" />
        </label>

        <label>Divider:
        <input type="text" name="divider" required defaultValue="|" />
        </label>

        {/* IMAGE */}
        <label>Picture:
        <input type="file" name="picture" accept="image/*" />
        </label>

        <label>Picture Caption:
        <input
        type="text"
        name="picture_caption"
        required
        defaultValue="&quot;This is the LockPickingLawyer and today-&quot;"
        />
        </label>

        {/* PERSONAL STATEMENT */}
        <label>Personal Statement:
        <textarea name="personal_statement" required defaultValue={
            `I’m a Sophomore (junior by credits!) at UNC Charlotte studying Computer Science with a focus in Systems and Networks. Can’t wait to learn more about computers in general, and in this class specifically web development.`} />
            </label>

            {/* BULLETS */}
            <label>Personal Background:
            <textarea name="personal_background" required defaultValue={
                `I’m 19 and I’ve been tinkering with technology almost as far back as I can remember.`} />
                </label>

                <label>Professional Background:
                <textarea name="professional_background" required defaultValue={
                    `Unfortunately, I have not found a job in the industry just yet.`} />
                    </label>

                    <label>Academic Background:
                    <textarea name="academic_background" required defaultValue={
                        `I strive for A’s, and I rarely pass a math class with anything higher than a B.`} />
                        </label>

                        <label>Background in this Subject:
                        <textarea name="subject_background" required defaultValue={
                            `The amount of time I have used “inspect element” to find something in a webpage over the last 10 years.`} />
                            </label>

                            <label>Primary Work Computer:
                            <textarea name="primary_computer" required defaultValue={
                                `My laptop, dual-booting Linux and Windows. Windows only for Lockdown Browser. Linux clock broken, prevents updates.`} />
                                </label>

                                <label>Backup Work Computer & Location Plan:
                                <textarea name="backup_plan" required defaultValue={
                                    `I will go to the Atkins Library and get a loaner laptop.`} />
                                    </label>

                                    {/* COURSES */}
                                    <h3>Courses</h3>
                                    <div id="courses-container">

                                    <div className="course">
                                    <label>Department:
                                    <input type="text" name="course_dept" defaultValue="ITSC" />
                                    </label>
                                    <label>Number:
                                    <input type="text" name="course_num" defaultValue="2181" />
                                    </label>
                                    <label>Name:
                                    <input type="text" name="course_name" defaultValue="Introduction to Computer Systems" />
                                    </label>
                                    <label>Reason:
                                    <input type="text" name="course_reason" defaultValue="Requirement, hyper relevant to my concentration." />
                                    </label>
                                    </div>

                                    <div className="course">
                                    <label>Department:
                                    <input type="text" name="course_dept" defaultValue="ITSC" />
                                    </label>
                                    <label>Number:
                                    <input type="text" name="course_num" defaultValue="3688" />
                                    </label>
                                    <label>Name:
                                    <input type="text" name="course_name" defaultValue="Computers & Their Impact on Society" />
                                    </label>
                                    <label>Reason:
                                    <input type="text" name="course_reason" defaultValue="Required and interesting." />
                                    </label>
                                    </div>

                                    <div className="course">
                                    <label>Department:
                                    <input type="text" name="course_dept" defaultValue="ITIS" />
                                    </label>
                                    <label>Number:
                                    <input type="text" name="course_num" defaultValue="3135" />
                                    </label>
                                    <label>Name:
                                    <input type="text" name="course_name" defaultValue="Front-End Web Application Development" />
                                    </label>
                                    <label>Reason:
                                    <input type="text" name="course_reason" defaultValue="It would be good to know web dev better." />
                                    </label>
                                    </div>

                                    <div className="course">
                                    <label>Department:
                                    <input type="text" name="course_dept" defaultValue="ITCS" />
                                    </label>
                                    <label>Number:
                                    <input type="text" name="course_num" defaultValue="3050" />
                                    </label>
                                    <label>Name:
                                    <input type="text" name="course_name" defaultValue="Technical Interview Preparation 101" />
                                    </label>
                                    <label>Reason:
                                    <input type="text" name="course_reason" defaultValue="Credit filler but hopefully useful." />
                                    </label>
                                    </div>

                                    <div className="course">
                                    <label>Department:
                                    <input type="text" name="course_dept" defaultValue="MATH" />
                                    </label>
                                    <label>Number:
                                    <input type="text" name="course_num" defaultValue="2164" />
                                    </label>
                                    <label>Name:
                                    <input type="text" name="course_name" defaultValue="Matrices & Linear Algebra" />
                                    </label>
                                    <label>Reason:
                                    <input type="text" name="course_reason" defaultValue="Required course. Math is my weak point!" />
                                    </label>
                                    </div>

                                    </div>

                                    <button type="button" id="add-course">Add Course</button>

                                    {/* QUOTE */}
                                    <label>Quote:
                                    <input type="text" name="quote" required defaultValue="Don’t believe everything you read on the internet" />
                                    </label>

                                    <label>Quote Author:
                                    <input type="text" name="quote_author" required defaultValue="Abraham D. Lincoln" />
                                    </label>

                                    {/* OPTIONAL */}
                                    <label>Funny Thing (optional):
                                    <input type="text" name="funny" defaultValue="I ask and comment in class a lot." />
                                    </label>

                                    <label>Something to Share (optional):
                                    <input type="text" name="share" defaultValue="I was born in New Jersey. All bread is MILES better up there." />
                                    </label>

                                    {/* LINKS */}
                                    <h3>Links</h3>

                                    <label>CLT Web (webpages.charlotte.edu/username):
                                    <input type="url" name="link1" required defaultValue="https://webpages.charlotte.edu/ahomsi/" />
                                    </label>

                                    <label>GitHub.io (username.github.io):
                                    <input type="url" name="link2" required defaultValue="https://Amir-Janid-Homsi.github.io/" />
                                    </label>

                                    <label>GitHub (github.com/username):
                                    <input type="url" name="link3" required defaultValue="https://github.com/Amir-Janid-Homsi" />
                                    </label>

                                    <label>freeCodeCamp (freecodecamp.org/username):
                                    <input type="url" name="link4" required defaultValue="https://www.freecodecamp.org/ahomsi" />
                                    </label>

                                    <label>LinkedIn (linkedin.com/in/username/):
                                    <input type="url" name="link5" required defaultValue="https://www.linkedin.com/in/amir-homsi-8b2623341/" />
                                    </label>

                                    </form>

                                    {/* BUTTONS */}
                                    <div className="form-buttons">
                                    <button type="submit" form="intro-form">Submit</button>
                                    <button type="reset" form="intro-form">Reset</button>
                                    <button type="button" id="clear-button">Clear</button>
                                    <button type="button" id="generate-html-button">Generate HTML</button>
                                    <button type="button" id="generate-json-button">Generate JSON</button>
                                    </div>

                                    <div id="output"></div>
                                    </main>
    );
}
