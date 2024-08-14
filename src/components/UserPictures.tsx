import React from 'react'

const UserPictures = ({
    categories,
  }: {
    categories: { title: string; images: string[] }[];
  }) => {
  return (
    <section className="p-6">
    <div className="space-y-6">
      {categories.map((category, index) => (
        <div key={index}>
          <h3 className="text-[18px] sm:text-[13px] text-black/[0.7] font-medium leading-6 my-2">
            {category.title}
          </h3>
          <div className="grid grid-cols-3 gap-4 sm:gap-2">
            {category.images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={category.title}
                className="w-[100%] h-[50vh] sm:w-[45vw] sm:h-auto rounded"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default UserPictures