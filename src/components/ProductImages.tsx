import Image from "next/image";
import React from "react";

function ProductImages({ images }: { images: string[] }) {
  const otherImages = images?.slice(1);
  if (images) {
    return (
      <div className="mt-10 gap-3 grid">
        <>
          <div className="space-y-1">
            <img
              src={images[0]} // Replace with your image URL
              className="h-[400px] w-[90vw] "
            />

            <div className="grid grid-cols-3 sm:grid-cols-2">
              {otherImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="product image"
                  className="h-[150px] w-full"
                />
              ))}
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default ProductImages;
