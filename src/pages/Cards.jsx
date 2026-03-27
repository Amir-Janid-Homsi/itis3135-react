import "../styles/cards.css";
import { useEffect } from "react";
useEffect(() => {
    document.title = "Amir Homsi's (is an) Ascended Human | ITIS3135 | Energy Sigil Cards";
}, []);

export default function Cards() {
    return (
        <main>
        <h2>Energy Signs Cards</h2>
        <p>These cards are probably what an Ascended Human would play with or smth.</p>

        <section id="playing-cards">
        <h2 className="visually-hidden">Playing Cards</h2>

        {/* A / ⚡ */}
        <div className="card">
        <div className="left">
        <div>A</div>
        <div>⚡</div>
        </div>
        <div className="middle">
        <div>⚡</div>
        </div>
        <div className="right">
        <div className="flipped">⚡</div>
        <div className="flipped">A</div>
        </div>
        </div>

        {/* 2 / ✦ */}
        <div className="card">
        <div className="left">
        <div>2</div>
        <div>✦</div>
        </div>
        <div className="middle">
        <div>✦</div>
        <div className="flipped">✦</div>
        </div>
        <div className="right">
        <div className="flipped">✦</div>
        <div className="flipped">2</div>
        </div>
        </div>

        {/* 3 / ❤ (red) */}
        <div className="card red">
        <div className="left">
        <div>3</div>
        <div>❤</div>
        </div>
        <div className="middle">
        <div>❤</div>
        <div>❤</div>
        <div className="flipped">❤</div>
        </div>
        <div className="right">
        <div className="flipped">❤</div>
        <div className="flipped">3</div>
        </div>
        </div>

        {/* 4 / ☯ */}
        <div className="card">
        <div className="left">
        <div>4</div>
        <div>☯</div>
        </div>
        <div className="middle">
        <div className="middle-section">
        <div>☯</div>
        <div>☯</div>
        </div>
        <div className="middle-section">
        <div className="flipped">☯</div>
        <div className="flipped">☯</div>
        </div>
        </div>
        <div className="right">
        <div className="flipped">☯</div>
        <div className="flipped">4</div>
        </div>
        </div>

        {/* 5 / ✧ (red) */}
        <div className="card red">
        <div className="left">
        <div>5</div>
        <div>✧</div>
        </div>
        <div className="middle">
        <div className="middle-section">
        <div>✧</div>
        <div>✧</div>
        </div>
        <div className="middle-section">
        <div>✧</div>
        </div>
        <div className="middle-section">
        <div>✧</div>
        <div>✧</div>
        </div>
        </div>
        <div className="right">
        <div className="flipped">✧</div>
        <div className="flipped">5</div>
        </div>
        </div>
        </section>
        </main>
    );
}
