import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/austin-weyers-a64b2491/"
        className="home__social-link icon-social-linkedin"
        target="_blank"
      ></a>

      {/* <a
        href="https://austin.weyers@cvr.com.vn"
        className="home__social-link icon-envelope"
        target="_blank"
      ></a> */}

      <a
        href="https://wa.me/+84868326923"
        className="home__social-link icon-phone"
        target="_blank"
      ></a>

      <a
        href="https://www.youtube.com/watch?v=9ZludpemynY&ab_channel=CVR-CentralVietnamRealty"
        className="home__social-link icon-social-youtube
        "
        target="_blank"
      ></a>
    </div>
  );
};

export default HeaderSocials;
