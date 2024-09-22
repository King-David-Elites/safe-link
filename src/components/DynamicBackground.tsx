import { useState, useEffect, ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Nav } from "./Nav";

const DynamicBackground = ({
  images,
  interval = 5000, // Change every 5 seconds
  children,
}: {
  images: string[];
  interval?: number;
  children: ReactNode;
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="h-[80vh] mb-8 relative overflow-hidden">
      {/* Current Image */}
      <Carousel
        responsive={responsive}
        className="w-[100%] object-cover"
        showDots={false}
        autoPlay={true}
        ssr={true}
        autoPlaySpeed={7500}
        customTransition="all .7"
        arrows={false}
        infinite={true}
      >
        {images?.map((image, index) => (
          <>
            <img
              src={image}
              key={index}
              alt={`Slide ${index}`}
              className="w-full h-[100vh] object-cover"
            />
          <div className="overlay" />
            <div className="absolute  top-[25vh] sm:[15vh] left-0 right-0 z-[10] flex flex-col items-center justify-center ">
              {children}
            </div>
          </>
          // <div
          //   key={index}
          //   className="absolute inset-0 flex flex-col items-center justify-center "
          //   style={{
          //     backgroundImage: `url(${image})`,
          //     backgroundSize: "cover",
          //     backgroundPosition: "center",
          //   }}
          // >
          //   {children}
          // </div>
        ))}
      </Carousel>

      {/* Next Image */}
    </div>
  );
};

export default DynamicBackground;
