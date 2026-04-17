import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Contract from "./pages/Contract";
import Cards from "./pages/Cards";
import Crappy from "./pages/Crappy";
import Instructions from "./pages/Instructions";
import Inventory from "./pages/Inventory";
import Product from "./pages/Product";
import Survey from "./pages/Survey";
import WebsiteEvaluations from "./pages/WebsiteEvaluations";


import Hobby from "./pages/Hobby";
import IntroForm from "./pages/IntroForm";
import MirroredDesigns from "./pages/MirroredDesigns";
import Slideshow from "./pages/Slideshow.jsx";

export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>

    {/* Core pages */}
    <Route index element={<Home />} />
    <Route path="contract" element={<Contract />} />
    <Route path="cards" element={<Cards />} />
    <Route path="instructions" element={<Instructions />} />
    <Route path="inventory" element={<Inventory />} />
    <Route path="product" element={<Product />} />
    <Route path="survey" element={<Survey />} />
    <Route path="website-evaluations" element={<WebsiteEvaluations />} />

    {/* Special pages */}
    <Route path="crappy" element={<Crappy />} />
    <Route path="hobby" element={<Hobby />} />
    <Route path="intro-form" element={<IntroForm />} />
    <Route path="mirroreddesigns" element={<MirroredDesigns />} />
    <Route path="slideshow" element={<Slideshow />} />

    </Route>
    </Routes>
  );
}
