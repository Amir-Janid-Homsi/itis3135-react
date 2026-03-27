import "../styles/product.css";

export default function Product() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
        <div className="product-page">
        {/* FCC header structure */}
        <div id="header" className="product-header">
        <img
        id="header-img"
        src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png"
        alt="Second Wind Monitors logo"
        />

        <nav id="nav-bar">
        <a
        className="nav-link"
        href="#features"
        onClick={(e) => {
            e.preventDefault();
            scrollTo("features");
        }}
        >
        Features
        </a>

        <a
        className="nav-link"
        href="#how-it-works"
        onClick={(e) => {
            e.preventDefault();
            scrollTo("how-it-works");
        }}
        >
        How It Works
        </a>

        <a
        className="nav-link"
        href="#pricing"
        onClick={(e) => {
            e.preventDefault();
            scrollTo("pricing");
        }}
        >
        Pricing
        </a>
        </nav>
        </div>

        <main>
        {/* HERO */}
        <section id="hero">
        <h2>Reborn Displays for a Clearer Path Forward</h2>
        <p className="tagline">
        Ultra‑thin, lightweight monitors restored from high‑performance gaming laptops.
        </p>

        <form id="form" action="https://www.freecodecamp.org/email-submit">
        <input className="product-email"
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        required
        />
        <input id="submit" type="submit" value="Get Updates" />
        </form>
        </section>

        {/* FEATURES */}
        <section id="features">
        <h2 className="visually-hidden">Features</h2>

        <div className="feature">
        <h3>Lightweight by Design</h3>
        <p>
        Every panel is salvaged from a gaming laptop, giving you a monitor that’s thin,
        portable, and surprisingly sturdy.
        </p>
        </div>

        <div className="feature">
        <h3>Restored with Care</h3>
        <p>
        Each display undergoes a full inspection, cleaning, and calibration to ensure
        clarity and color accuracy.
        </p>
        </div>

        <div className="feature">
        <h3>Sustainable Performance</h3>
        <p>
        By reclaiming high‑quality panels, we reduce e‑waste while offering premium
        performance at a fraction of the cost.
        </p>
        </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works">
        <h2 className="visually-hidden">How It Works</h2>

        <iframe
        id="video"
        height="315"
        src="https://www.youtube-nocookie.com/embed/WLP_L7Mgz6M?rel=0&controls=1&showinfo=0"
        allowFullScreen
        ></iframe>
        </section>

        {/* PRICING */}
        <section id="pricing">
        <h2 className="visually-hidden">Pricing</h2>

        <div className="product">
        <div className="level">Esports</div>
        <h3>$120</h3>
        <ol>
        <li>1080p LCD panels</li>
        <li>Typically 144Hz</li>
        <li>Compact and lightweight</li>
        <li>Ideal for competitive play</li>
        </ol>
        <button className="btn">Select</button>
        </div>

        <div className="product">
        <div className="level">Enthusiast</div>
        <h3>$260</h3>
        <ol>
        <li>1440p OLED or 4K LCD</li>
        <li>144–240Hz refresh rates</li>
        <li>High color accuracy</li>
        <li>Great for serious gamers</li>
        </ol>
        <button className="btn">Select</button>
        </div>

        <div className="product">
        <div className="level">Encultured</div>
        <h3>$480</h3>
        <ol>
        <li>Large 4K OLED panels</li>
        <li>Minimum 120Hz</li>
        <li>Exceptional color and PPI</li>
        <li>Top‑tier reclaimed displays</li>
        </ol>
        <button className="btn">Select</button>
        </div>
        </section>
        </main>
        </div>
        </>
    );
}
