import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-briefcase"></i>

        <div>
          <h3 className="about__title">7</h3>
          <span className="about__subtitle">Years Of Experience</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-user"></i>

        <div>
          <h3 className="about__title">24</h3>
          <span className="about__subtitle">Partners</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-bubbles "></i>

        <div>
          <h3 className="about__title">450</h3>
          <span className="about__subtitle">Meetings</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-user-following"></i>

        <div>
          <h3 className="about__title ">340</h3>
          <span className="about__subtitle">Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
