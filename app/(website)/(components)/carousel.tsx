import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { android , rto } from "../../utils/constants";

interface ArrowProps {
  onClick?: () => void;
}

const SimpleCarousel = ({ type }: { type: string }) => {
  const products = type == "android" ? android : rto;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => (
      <div className="w-4 h-4 rounded-full border-2 border-primaryColor" />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className=" mt-4">
        <div className="flex justify-center items-center space-x-2">
        {React.Children.map(dots, (dot, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                (dot as React.ReactElement).props.className.includes("slick-active")
                  ? "bg-primaryColor"
                  : "border-2 border-primaryColor"
              }`}
            />
          ))}
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="carousel-container max-w-xs md:max-w-5xl mx-auto px-4 py-10 relative">
      <Slider {...settings}>
      {products.map((product) => (
          <div
            key={product.id}
            className="p-4 flex flex-col justify-between items-center"
          >
            <Image
              src={product.image}
              height={2000}
              width={2000}
              className="w-full h-60 rounded-lg object-contain bg-[#F2F2F2]"
              alt={product.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="absolute -left-5 md:-left-14 top-1/2 transform -translate-y-1/2 z-10 inline-flex items-center justify-center p-2 border-2 border-primaryColor rounded-full cursor-pointer hover:shadow-primaryColor hover:shadow-lg hover:ease-linear hover:ring-2 hover:ring-primaryColor"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-primaryColor" />
    </div>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="absolute -right-5 md:-right-14 top-1/2 transform -translate-y-1/2 z-10 inline-flex items-center justify-center p-2 bg-primaryColor rounded-full cursor-pointer hover:shadow-primaryColor hover:shadow-lg hover:ease-linear hover:ring-2 hover:ring-primaryColor"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-white" />
    </div>
  );
};

export default SimpleCarousel;
