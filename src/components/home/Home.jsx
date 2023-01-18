import React from "react";
import "./Home.css";
// import Austin from "../../assets/avatar-1.svg";
// import Austin from "../../assets/austin.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        {/* <img src={Austin} alt="" className="home__img" /> */}
        <h1 className="home__name">Austin Weyers</h1>
        <span className="home__education">I am a real estate agent</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Contact Me
        </a>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
