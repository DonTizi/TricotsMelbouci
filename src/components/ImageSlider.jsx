import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const NextArrow = ({ onClick }) => (
  <div className="nextArrow" onClick={onClick}>
    <BsChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="prevArrow" onClick={onClick}>
    <BsChevronLeft />
  </div>
);

// Utilisez "export function" pour définir et exporter le composant Echarpes
export function ImageSlider({ images, slidesToShow = 3 }) {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateImages = images.map((image, idx) => (
    image !== null && (
      <div
        className={idx === imageIndex ? "activeSlide" : "slide"}
        key={image.id}
      >
        <div className="slideWrapper">
          {image.code ? image.code : <img src={image.src} alt={image.alt} />}
        </div>
      </div>
    )
  ));

  return <Slider {...settings}>{templateImages}</Slider>;
}
