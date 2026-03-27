import { useEffect } from "react";
import "../styles/inventory.css";
useEffect(() => {
    document.title = "Amir Homsi's (is an) Ascended Human | ITIS3135 | Book Inventory";
}, []);
export default function Inventory() {
    return (
        <main>
        <h2 className="book-inv">Book Inventory</h2>

        <p className="page-intro">
        These are the stories, philosophies, and worlds that shaped my path as the Ascended Human.
        There is no single route to ascension — only the ideas that resonate, challenge, and transform us.
        </p>

        <div className="table-container">
        <table>
        <thead>
        <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Status</th>
        <th>Rate</th>
        </tr>
        </thead>

        <tbody>

        <tr className="in-progress">
        <td>1984</td>
        <td>George Orwell</td>
        <td>Dystopian Fiction</td>
        <td><span className="status">In Progress</span></td>
        <td>
        <span className="rate" data-rate="three">
        <span></span><span></span><span></span>
        </span>
        </td>
        </tr>

        <tr className="read">
        <td>Fahrenheit 451</td>
        <td>Ray Bradbury</td>
        <td>Dystopian Fiction</td>
        <td><span className="status">Read</span></td>
        <td>
        <span className="rate" data-rate="two">
        <span></span><span></span><span></span>
        </span>
        </td>
        </tr>

        <tr className="to-read">
        <td>The Handmaid's Tale</td>
        <td>Margaret Atwood</td>
        <td>Dystopian Fiction</td>
        <td><span className="status">To Read</span></td>
        <td>
        <span className="rate" data-rate="one">
        <span></span><span></span><span></span>
        </span>
        </td>
        </tr>

        <tr className="to-read">
        <td>Berserk</td>
        <td>Kentaro Miura</td>
        <td>Dark Fantasy Manga</td>
        <td><span className="status">To Read</span></td>
        <td>
        <span className="rate" data-rate="three">
        <span></span><span></span><span></span>
        </span>
        </td>
        </tr>

        <tr className="read">
        <td>JoJo's Bizarre Adventure</td>
        <td>Hirohiko Araki</td>
        <td>Action/Adventure Manga</td>
        <td><span className="status">Read</span></td>
        <td>
        <span className="rate" data-rate="three">
        <span></span><span></span><span></span>
        </span>
        </td>
        </tr>

        <tr className="in-progress">
        <td>One Piece</td>
        <td>Eiichiro Oda</td>
        <td>Adventure Manga</td>
        <td><span className="status">In Progress</span></td>
        <td>
        <span className="rate" data-rate="two">
        <span></span><span></span><span></span>
        </span>
        </td>
        </tr>

        <tr className="read">
        <td>Dragon Ball</td>
        <td>Akira Toriyama</td>
        <td>Shōnen Manga</td>
        <td><span className="status">Read</span></td>
        <td>
        <span className="rate" data-rate="one">
        <span></span><span></span><span></span>
        </span>
        </td>
        </tr>

        </tbody>
        </table>
        </div>
        </main>
    );
}
