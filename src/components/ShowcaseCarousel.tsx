import React from "react";
import Slider from "react-slick";
import "@/app/sliders.css";
import ShowcaseCard from "./ShowcaseCard";
import { recentWorkData } from "@/data/webData";

export default function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="pb-4">
      <Slider {...settings}>
        {recentWorkData.map((recentWork, index) => (
          <ShowcaseCard
            key={index}
            image={recentWork.image}
            title={recentWork.title}
            description={recentWork.description}
          />
        ))}
      </Slider>
    </div>
  );
}
