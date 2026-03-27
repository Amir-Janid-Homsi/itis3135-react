import { useEffect } from "react";
useEffect(() => {
    document.title = "";
}, []);
export default function Crappy() {
    return (
        <div
        style={{
            all: "unset",
            display: "block",
        }}
        >
        <style>
        {`
            body {
                color: black;
                background-color: white;
            }
            a:link { color: blue; }
            a:visited { color: purple; }
            a:active { color: red; }
            `}
            </style>

            <h2 style={{ fontFamily: "Papyrus", marginTop: "100px", marginBottom: "150px" }}>
            Hot
            </h2>

            <h1 style={{ fontFamily: "Comic Sans MS", marginTop: "150px", marginBottom: "100px" }}>
            Saute
            </h1>

            <p style={{ fontFamily: "Comic Papyrus", fontSize: "160px", textAlign: "center" }}>
            my eyyyyyyes
            </p>

            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>

            <img
            src="/HotSaute"
            alt="its a very large image of a desert that's probably in the middle east and it's also stretched to look like shit, and yes this is bad accessibility ik"
            width="435"
            height="245"
            style={{
                borderTopStyle: "solid",
            borderRightStyle: "hidden",
            borderBottomStyle: "dashed",
            borderLeftStyle: "groove",
            borderWidth: "8% 16% 32% 64%",
            borderTopColor: "red",
            borderRightColor: "green",
            borderBottomColor: "blue",
            borderLeftColor: "purple",
            }}
            />

            <h1>check out very cool alt tex</h1>

            <ul
            style={{
                textAlign: "center",
            backgroundColor: "#FFFFE0",
            textDecorationLine: "underline",
            }}
            >
            <li>thing</li>
            </ul>
            </div>
    );
}
