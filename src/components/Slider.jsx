import { Swiper } from "swiper/react";
// import "./Slider.css";

import {
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "./slider.css";

const Slider = ({ settings, children }) => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={4}
      spaceBetween={20}
      {...settings}
    >
      {children}
    </Swiper>
  );
};

export default Slider;