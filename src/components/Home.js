import React from "react";
import Hero from "../images/hero-img.jpg";
import "../Style/Home.css";
import Subhero from "../images/design.png";
import Subhero2 from "../images/design.png";
import advertisment from "../images/Offer-banner.0.jpg";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Product from "./Product";

function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <img src={Hero} alt="Snow" style={{ width: "100%" }} />
      </div>
      <Product />
    </div>
  );
}
export default Home;
