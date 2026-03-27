import { useEffect } from "react";
import logo from "../assets/images/logo.svg";

export default function MirroredDesigns() {

    useEffect(() => {
        // Save original body styles
        const original = {
            margin: document.body.style.margin,
            padding: document.body.style.padding,
            maxWidth: document.body.style.maxWidth,
            width: document.body.style.width,
            fontFamily: document.body.style.fontFamily,
            background: document.body.style.background,
        };

        // Override global body styles
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.maxWidth = "none";
        document.body.style.width = "auto";
        document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
        document.body.style.background = "#d0cdd7";

        // Cleanup on exit
        return () => {
            document.body.style.margin = original.margin;
            document.body.style.padding = original.padding;
            document.body.style.maxWidth = original.maxWidth;
            document.body.style.width = original.width;
            document.body.style.fontFamily = original.fontFamily;
            document.body.style.background = original.background;
        };
    }, []);

    return (
        <div className="mirrored-page">
        <style>
        {`
            .mirrored-page {
                /* Scoped variables */
                --background: #d0cdd7;
                --text: #210203;
                --header: #235789;
                --accent: #14bdeb;
                --accent2: #f4e04d;

                background-color: var(--background);
                color: var(--text);

                /* Hard override any inherited font */
                font-family: Arial, Helvetica, sans-serif;

                margin: 0;
                padding: 0;
                display: block;
            }

            /* Make sure *everything* inside uses Arial, not the global font */
            .mirrored-page * {
                font-family: Arial, Helvetica, sans-serif;
            }

            .mirrored-page header {
                background-color: var(--header);
                color: var(--background);
                padding: 1rem;
                text-align: center;
            }

            .mirrored-page header img {
                width: 80px;
                height: auto;
                display: block;
                margin: 0.5rem auto 0 auto;
            }

            .mirrored-page main {
                padding: 1rem 2rem;

                /* Kill global layout box */
                margin: 0;
                max-width: none;
                width: auto;
            }

            .mirrored-page h2 {
                color: var(--header);
            }

            .mirrored-page ul {
                list-style-type: square;
                padding-left: 1.5rem;
            }

            .mirrored-page ul li {
                margin-bottom: 0.5rem;
            }

            .mirrored-page a {
                color: var(--accent);
            }

            .mirrored-page h3 {
                color: var(--header);
            }

            .mirrored-page footer {
                background-color: var(--header);
                color: var(--background);
                text-align: center;
                padding: 0.75rem;
                margin-top: 2rem;
            }
            `}
            </style>


            <header>
            <h1>Mirrored Designs</h1>
            <img src={logo} alt="Mirrored Designs Logo" />
            </header>

            <main>
            <h2>Mirroring What Works. Revolutionizing What Doesn’t.</h2>

            <p>
            Mirrored Designs is a user‑first web development and design firm dedicated to creating
            smooth, intuitive experiences for visitors while keeping the backend clean, efficient,
            and developer‑friendly. We believe great design reflects the needs of both the user and
            the client.
            </p>

            <ul>
            <li>User‑centered design grounded in clarity and accessibility</li>
            <li>Clean, maintainable codebases that developers enjoy working with</li>
            <li>Style‑inspired redesigns that capture the feel of admired sites without copying</li>
            <li>Open‑source aligned development practices and toolchains</li>
            <li>A collaborative, flat team structure that keeps communication direct</li>
            <li>Responsive layouts tailored for all screen sizes</li>
            <li>Standards‑compliant, accessible interfaces</li>
            <li>Transparent project planning and delivery</li>
            </ul>

            <p>
            Whether you need a fresh design, a refined user experience, or a site inspired by a style
            you admire, Mirrored Designs can bring your vision into focus with clarity and precision.
            </p>

            <section>
            <h3>Contact Information</h3>
            <p>Phone: 973-303-8694</p>
            <p>Email: AmirHomsi@mirroreddesigns.sh</p>
            <p>Address: 2160 Monitors R., Suite 60, Shadow Moses, Alaska</p>
            </section>
            </main>

            <footer>
            <p>Page created by Mirrored Designs</p>
            </footer>
            </div>
    );
}
