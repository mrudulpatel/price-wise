"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const heroImages = [
  {
    imgUrl: "/assets/images/hero-1.svg",
    alt: "Smart Watch",
  },
  {
    imgUrl: "/assets/images/hero-2.svg",
    alt: "bag",
  },
  {
    imgUrl: "/assets/images/hero-3.svg",
    alt: "lamp",
  },
  {
    imgUrl: "/assets/images/hero-4.svg",
    alt: "air fryer",
  },
  {
    imgUrl: "/assets/images/hero-5.svg",
    alt: "chair",
  },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        axis="horizontal"
        showThumbs={false}
        infiniteLoop
        interval={2000}
        autoPlay
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map(({ imgUrl, alt }) => (
          <>
            <Image
              src={imgUrl}
              alt={alt}
              width={484}
              height={484}
              className="object-contain"
              key={alt}
            />
          </>
        ))}
      </Carousel>
      <Image
        alt="hand-drawn-arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
        src={"assets/icons/hand-drawn-arrow.svg"}
      />
    </div>
  );
};

export default HeroCarousel;
