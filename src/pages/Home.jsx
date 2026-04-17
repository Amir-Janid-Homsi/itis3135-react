import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "Amir Homsi's (is an) Ascended Human | ITIS3135 | Course Website";
    }, []);
    return (
        <main>
        <h2>Home</h2>
        <p>Feel free to check out the pages in the header, because I don't have more to say here. Everything here was for an assignment so take anything I say here under that context.</p>
        </main>
    );
}
