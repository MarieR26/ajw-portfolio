import React from "react";
import "./Services.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const data = [
  {
    id: 1,
    image: image1,
    title: "Comercial",
    description:
      "lorem ipsum lolor sit amet consectetues adipiscing elit aenaen commodo liguala aget",
  },

  {
    id: 2,
    image: image2,
    title: " Residential",
    description:
      "lorem ipsum lolor sit amet consectetues adipiscing elit aenaen commodo liguala aget",
  },
  {
    id: 3,
    image: image3,
    title: "Consultation",
    description:
      "lorem ipsum lolor sit amet consectetues adipiscing elit aenaen commodo liguala aget",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
