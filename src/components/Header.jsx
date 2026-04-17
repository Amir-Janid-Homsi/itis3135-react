import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
        <h1>Amir Homsi's (is an) Ascened Human | ITIS3135</h1>

        <nav>
        <Link to="/">Home Page</Link>{" | "}
        <Link to="/contract">Contract Page</Link>{" | "}
        <Link to="/website-evaluations">Web Evaluations Page</Link>{" | "}
        <Link to="/survey">Survey Page</Link>{" | "}
        <Link to="/cards">Cards Page</Link>{" | "}
        <Link to="/inventory">Inventory Page</Link>{" | "}
        <Link to="/instructions">Instructions Page</Link>{" | "}
        <Link to="/product">Product Page</Link>
        </nav>

        <nav>
        <Link to="/crappy">Crappy Page</Link>{" | "}
        <Link to="/hobby">Crappy Page</Link>{" | "}
        <Link to="/intro-form">Crappy Page</Link>{" | "}
        <Link to="/hobby">Crappy Page</Link>{" | "}
        </nav>
        </header>
    );
}
