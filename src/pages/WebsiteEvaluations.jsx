import { useEffect } from "react";
export default function WebsiteEvaluations() {
    useEffect(() => {
        document.title = "Amir Homsi's (is an) Ascened Human | ITIS 3135 | Website Evaluations Page";
    }, []);
    return (
        <main>
        <h2>Website Evaluations Page</h2>

        <h3>
        <a href="https://store.steampowered.com/sale/steammachine">
        Steam Machine'
    </a>
    </h3>
    <ul>
    <li>
    Contrast: Stellar, using bright text when a dark baground is present,
    and light text when a dark background is present. 10/10
    </li>
    <li>
    Repitition: A consistent Color Scheme, fonts, font size, and shapes.
    again, 10/10
    </li>
    <li>
    Alignmennt: text and images are perfectly aligned. 10/10
    </li>
    <li>
    Proximity: Specs, art, product demonstrations, product pages, and
    more, are distintly placed 10/10
    </li>
    </ul>

    <h3>
    <a href="https://www.copyright.gov/fedreg/2003/68fr2011.html">
    Exemption to Prohibition on Circumvention of Copyright Protection
    Systems for Access Control Technologies'
    </a>
    </h3>
    <ul>
    <li>Contrast: very basic. Passable, 6/10</li>
    <li>Repitition: Very repeated. red color links though? 9/10</li>
    <li>
    Alignmennt: everything is left adjusted, which is consistent but
    harder to read. 5/10
    </li>
    <li>
    everything is way too small close, even though it attempts to be
    different 4/10
    </li>
    </ul>
    </main>
    );
}
