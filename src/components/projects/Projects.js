import React, { useRef, useState } from "react";
import "./projects.css";
import Data from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay,Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">Personal Works</span>

      <Swiper
        className="testimonial__container container swiper-container"
        autoplay = {{delay: 2000, disableOnInteraction: false}}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Autoplay,Pagination]}
      >
        {Data.map(({ id, image, title }) => {
          return (
            <SwiperSlide
        autoplay={{delay: 2500, disableOnInteraction: false}}

              className="testimonial__card"
              key={id}
            >
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
            </SwiperSlide>
          );
        })}
        ;
      </Swiper>
    </section>
  );
};

export default Projects;
