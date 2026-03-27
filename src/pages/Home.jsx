import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "Amir Homsi's (is an) Ascended Human | ITIS3135 | Course Website";
    }, []);
    return (
        <main>
        <h2>Course Website</h2>
        <p>More to come!</p>
        </main>
    );
}
