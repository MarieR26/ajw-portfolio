import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="line"></div>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's Talk!</h3>
          <p className="contact__details">Send an E-mail</p>
        </div>

        <form className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Your Full Name"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                name="email"
                placeholder="Your E-mail"
                required
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Subject"
              required
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              required
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write Your Message"
            ></textarea>
          </div>
          <button className="btn">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
