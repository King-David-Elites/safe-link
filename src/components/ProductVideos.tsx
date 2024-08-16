import Image from "next/image";
import React from "react";

const videos = [...Array(2)].map(() => ({
  src: "/video1.mp4",
  type: "video/mp4",
}));

function ProductVideos() {
  return (
    <div className="mt-2 space-y-1 grid">
      <>
        {videos && (
          <div className="space-y-1">
            <video
              controls
              src="/video1.mp4" // Replace with your image URL
              className="h-[200px] w-full "
            >
              <source src="/video1.mp4" />
            </video>

            <div className="grid grid-cols-2 space-x-2">
              {/* Other images */}
              <video
                controls
                src="/video1.mp4" // Replace with your image URL
                className="h-[100px] w-full "
              >
                <source src="/video1.mp4" />
              </video>
              <video
                controls
                src="/video1.mp4" // Replace with your image URL
                className="h-[100px] w-full "
              >
                <source src="/video1.mp4" />
              </video>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default ProductVideos;
