import React from "react";
import Data from "./Data";
import Card from "./Card";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience container section">
      <h2 className="section__title">Experience and Education</h2>

      <div className="experience__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
