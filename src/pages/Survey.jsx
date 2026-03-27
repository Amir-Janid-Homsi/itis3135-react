import "../styles/survey.css";

export default function Survey() {
    return (
        <main className="survey-page">

        <h1 id="title">Ascended Academy Initiate Evaluation</h1>
        <p id="description">
        A brief assessment to understand your readiness for the Path of Ascension.
        </p>

        <form id="survey-form">

        <label id="name-label" htmlFor="name">Initiate Name</label>
        <input id="name" type="text" placeholder="Enter your name" required />

        <label id="email-label" htmlFor="email">Contact Email</label>
        <input id="email" type="email" placeholder="Enter your email" required />

        <label id="number-label" htmlFor="number">Years of Study (0–50)</label>
        <input
        id="number"
        type="number"
        min="0"
        max="50"
        placeholder="Years of study"
        />

        <label htmlFor="dropdown">Preferred Discipline</label>
        <select id="dropdown">
        <option value="">Select a discipline</option>
        <option value="ethics">Ethical Computation</option>
        <option value="systems">Systems of Emergence</option>
        <option value="aesthetics">Aesthetic Algorithms</option>
        <option value="philosophy">Philosophy of the Ascended</option>
        <option value="other">Other</option>
        </select>

        <p>How aligned do you feel with the Academy’s principles?</p>
        <label>
        <input type="radio" name="alignment" value="high" /> Deeply aligned
        </label>
        <label>
        <input type="radio" name="alignment" value="medium" /> Moderately aligned
        </label>
        <label>
        <input type="radio" name="alignment" value="low" /> Still learning
        </label>

        <p>Which practices do you engage in?</p>
        <label><input type="checkbox" value="reflection" /> Daily Reflection</label>
        <label><input type="checkbox" value="study" /> Independent Study</label>
        <label><input type="checkbox" value="collaboration" /> Collaborative Inquiry</label>
        <label><input type="checkbox" value="experiments" /> Experimental Creation</label>
        <label><input type="checkbox" value="meditation" /> Meditative Focus</label>
        <label><input type="checkbox" value="analysis" /> Analytical Observation</label>

        <label htmlFor="comments">Share your intentions for joining the Academy</label>
        <textarea id="comments" placeholder="Your thoughts..."></textarea>

        <button id="submit" type="submit">Begin Your Ascent</button>

        </form>

        </main>
    );
}
