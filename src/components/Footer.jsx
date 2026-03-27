import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
        <a href="https://amir-janid-homsi.github.io/itis3135/index.html">
        ITSC 3135 Course Page
        </a>

        <a href="https://github.com/Amir-Janid-Homsi">
        GitHub Profile
        </a>

        <a href="https://webpages.charlotte.edu/ahomsi/">
        UNCC Webpage
        </a>

        <a href="https://Amir-Janid-Homsi.github.io/">
        GitHub.io (home page)
        </a>

        <a href="https://www.linkedin.com/in/amir-homsi-8b2623341/">
        LinkedIn
        </a>

        {/* After deployment, add this to your GitHub.io footer, not here:
            <a href="https://YOUR-VERCEL-URL">ITIS3135@Vercel</a>
            */}

            <p>&copy; 2026 Mirrored Designs</p>

            <Link to="/mirroreddesigns">
            Visit Mirrored Designs
            </Link>
            </footer>
    );
}
