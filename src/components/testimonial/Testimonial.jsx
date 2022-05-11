import React from "react";
import "./testimonial.css";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CLIP1 from "../../assets/clint_1.png";
import CLIP2 from "../../assets/clinte_2.png";
import CLIP3 from "../../assets/clint_3.gif";
// import AVT1 from "../../assets/avatar1.jpg";
// import AVT2 from "../../assets/avatar2.jpg";
// import AVT3 from "../../assets/avatar3.jpg";
// import AVT4 from "../../assets/avatar4.jpg";

const data = [
  {
    profile: CLIP1,
    name: "LegendaryLayon.co",
    revew: "Very good client. Would definitely like to work with him again...",
  },
  {
    profile: CLIP2,
    name: "Elisen",
    revew:
      "He is a great client. Wonderful communication, helpful cooperation. I am looking forward to work with him. Great relationship and wonderful passion!",
  },
  {
    profile: CLIP3,
    name: "SPI",
    revew:
      "Ashim is too friendly and too serious about his work. I am really satisfite with his work. Highly recomended to everyone.",
  },
];

const testimonial = () => {
  return (
    <section id="testimonial">
      <div className="services_title">
        <h5>What Say My Clinte</h5>
        <h2>Testimonial</h2>
      </div>

      <Swiper
        className="container testimonial_container"
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {/* using map mathod */}

        {data.map(({ profile, name, revew }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="clint_profile">
                <img src={profile} alt="clinte Profile" />
              </div>
              <div className="clinte_revew_areia">
                <h5 className="clinte_name">{name}</h5>
                <code className="clinte_revew">{revew}</code>
              </div>
            </SwiperSlide>
          );
        })}

        {/* clinte revew end*/}
      </Swiper>
    </section>
  );
};

export default testimonial;
