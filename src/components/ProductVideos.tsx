import Image from "next/image";
import React from "react";

function ProductVideos({ videos }: { videos: string[] }) {
  const otherVideos = videos?.slice(1);
  if (videos) {
    return (
      <div className="mt-2 space-y-1 grid">
        <>
          <div className="space-y-1">
            <video
              controls
              src={videos[0]} // Replace with your image URL
              className="h-[200px] w-full "
            >
              <source src={videos[0]} />
            </video>

            <div className="grid grid-cols-2 sm:grid-cols-2">
              {otherVideos?.map((video, index) => (
                <video
                  controls
                  src={video} // Replace with your image URL
                  className="h-[100px] w-full "
                >
                  <source src={video} />
                </video>
              ))}
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default ProductVideos;
