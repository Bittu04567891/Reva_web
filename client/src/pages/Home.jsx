import React from "react";
// import Slider from "../components/slider/Slider";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "./Services";
import Contact from "../components/contact/Contact";
import Testmonial from "../components/testmonial/Testmonial";
import Slider from "../components/sliderComp/Slider";

const Home = () => {
  return (
    <div>
      {/* <Slider /> */}
      <Slider />
      <About />
      <Portfolio />
      <Services />
      <Testmonial />
      <Contact />
    </div>
  );
};

export default Home;