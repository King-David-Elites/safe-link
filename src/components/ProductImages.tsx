import Image from "next/image";
import React from "react";

function ProductImages() {
  return (
    <div className="mt-10 gap-3 grid">
      <>
        <div className="space-y-1">
          <Image
            src="/image8.png" // Replace with your image URL
            alt=""
            //className="h-[400px] w-full "
            width={2000}
            height={500}
            //placeholder="blur"
          />

          <div className="grid grid-cols-3 sm:grid-cols-2">
            {/* Other images */}
            <Image
              src="/image9.png" // Replace with another image URL
              alt="product image"
              width={500}
              height={300}
              className="h-[150px] w-full"
            />
            <Image
              src="/image9.png" // Replace with another image URL
              alt="product image"
              width={500}
              height={300}
              className="h-[150px] w-full"
            />
            <Image
              src="/image9.png" // Replace with another image URL
              alt="product image"
              width={500}
              height={300}
              className="h-[150px] w-full"
            />
            <Image
              src="/image9.png" // Replace with another image URL
              alt="product image"
              width={500}
              height={300}
              className="h-[150px] w-full hidden sm:flex"
            />
          </div>
        </div>
      </>
    </div>
  );
}

export default ProductImages;
