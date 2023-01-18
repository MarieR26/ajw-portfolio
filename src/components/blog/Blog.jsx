import React from "react";
import "./Blog.css";
// import Example from "./Video";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Blog</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumbnail">
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/9ZludpemynY"
              className="video"
              width=""
              height=""
              frameBorder="0"
              allowFullScreen="allowFullScreen"
            ></iframe>
            {/* <Example videoId="9ZludpemynY" /> */}
          </div>
          <h3 className="blog__title">Danang Condominium Tour</h3>
          <span className="blog__text">05 Feb</span>
        </div>

        <div className="blog__card">
          <div className="blog__thumbnail">
            <iframe
              className="video"
              title="YouTube video player"
              src="https://www.youtube.com/embed/TuWgdgdWtd4"
              width=""
              height=""
              frameBorder="0"
              allowFullScreen="allowFullScreen"
            ></iframe>
          </div>
          <h3 className="blog__title">
            Can foreigners purchase land in Vietnam?
          </h3>
          <span className="blog__text">05 Feb</span>
        </div>

        <div className="blog__card">
          <div className="blog__thumbnail">
            <iframe
              className="video"
              title="YouTube video player"
              src="https://www.youtube.com/embed/ewRoNYSBYOA"
              width=""
              height=""
              frameBorder="0"
              allowFullScreen="allowFullScreen"
            ></iframe>
          </div>
          <h3 className="blog__title">
            Walkthrough of Hoiana Residences Beachfront Condos
          </h3>
          <span className="blog__text">05 Feb</span>
        </div>
      </div>
    </section>
  );
};

export default Blog;
