import React from "react";
import "./About.css";
import img from "../../assets/austin.jpg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section " id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={img} alt="" />

        <div className="about__info">
          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            itaque libero atque autem iure eveniet, dolorum blanditiis enim
            consequuntur ipsam! Modi error aut suscipit vero quibusdam debitis
            ex odio maxime? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Sed fugiat eius aperiam fugit consequuntur rerum modi?
            Suscipit dicta saepe harum ducimus commodi unde veniam ipsa,
            praesentium alias nam nisi est. Lorem ipsum dolor sit amet.
          </p>

          <div className="line"></div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
