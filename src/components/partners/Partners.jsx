import React from "react";
import "./Partners.css";
import image1 from "../../assets/avatar-1.svg";
import image2 from "../../assets/avatar-1.svg";
import image3 from "../../assets/avatar-1.svg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Partners = () => {
  const data = [
    {
      id: 1,
      image: image1,
      subtitle: "John Doe",
      about:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      id: 2,
      image: image2,
      subtitle: "John Doe",
      about:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      id: 3,
      image: image3,
      subtitle: "John Doe",
      about:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
  ];
  return (
    <section className="partners container section" id="partners">
      <h2 className="section__title">Partners</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        className="partners__container grid"
      >
        {data.map(({ id, image, title, subtitle, about }) => {
          return (
            <SwiperSlide className="partner__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="partners__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{about}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Partners;
