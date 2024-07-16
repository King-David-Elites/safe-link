import React from "react";

const PictureCategories = ({
  categories,
}: {
  categories: { title: string; images: string[] }[];
}) => {
  return (
    <section className="p-6">
      <div className="space-y-6">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-[22px] sm:text-[14px] text-black/[0.7] font-bold mb-2">
              {category.title}
            </h3>
            <div className="grid sm:grid-cols-2 grid-cols-3 gap-4">
              {category.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={category.title}
                  className="w-[100%] h-[50vh] sm:w-[45vw] sm:h-[25vh] rounded"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PictureCategories;
