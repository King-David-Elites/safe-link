import { useState, useEffect, ReactNode } from "react";

const DynamicBackground = ({
  images,
  interval = 5000,
  children,
}: {
  images: string[];
  interval?: number;
  children: ReactNode;
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const timer = setInterval(changeImage, interval);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [images.length, interval]);

  return (
    <div
      className=" h-full w-full image flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        transition: "background-image 3s ease-in-out",
      }}
      //className=" h-full w-full image flex flex-col items-center justify-center"
      // style={{
      //   backgroundImage: "url('/background1.png')",
      //   backgroundColor: "#00000080",
      //   backgroundSize: "cover",
      //   backgroundBlendMode: "mutiply",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="bg_overlay" />
      {children}
    </div>
  );
};

export default DynamicBackground;
