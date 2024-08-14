import React from "react";

const EditProfile2 = () => {
  return (
    <section>
      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Cover
        </label>
        <div className="border-[0.5px] border-[#A6A6A6] border-dashed rounded w-full p-4 gap-3 flex flex-col items-center justify-center">
          <img src={"/Vector.svg"} className="h-10 w-10" alt="" />
          <small className="text-[#2301F3] text-[11px] leading-3">
            upload a file
          </small>
          <small className="text-[#696969] text-[11px] leading-3">
            PNG, JPG, GIF up to 5mb
          </small>
        </div>
        <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
          upload a clear video showing the views (optional)
        </small>
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Professional Pictures (Upload a maximum of 3 professional pictures of
          you)
        </label>
        <div className="border-[0.5px] border-[#A6A6A6] border-dashed rounded w-full p-4 gap-3 flex flex-col items-center justify-center">
          <img src={"/Vector.svg"} className="h-10 w-10" alt="" />
          <small className="text-[#2301F3] text-[11px] leading-3">
            upload a file
          </small>
          <small className="text-[#696969] text-[11px] leading-3">
            PNG, JPG, GIF up to 5mb
          </small>
        </div>
        <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
          upload a clear video showing the views (optional)
        </small>
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Work Pictures (Upload a maximum of 3 pictures of you doing your work)
        </label>
        <div className="border-[0.5px] border-[#A6A6A6] border-dashed rounded w-full p-4 gap-3 flex flex-col items-center justify-center">
          <img src={"/Vector.svg"} className="h-10 w-10" alt="" />
          <small className="text-[#2301F3] text-[11px] leading-3">
            upload a file
          </small>
          <small className="text-[#696969] text-[11px] leading-3">
            PNG, JPG, GIF up to 5mb
          </small>
        </div>
        <small className="text-[#A6A6A6] text-[10px] leading-[8px]">
          upload a clear video showing the views (optional)
        </small>
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <p className="text-[#252625] text-[14px] leading-4">Address</p>
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Address 1
        </label>
        <textarea
          name="about"
          maxLength={100}
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
        />
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Country
        </label>
        <input
          name="Country"
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          type="text"
        />
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          State
        </label>
        <input
          name="State"
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          type="text"
        />
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Zip/Postal code
        </label>
        <input
          name="Country"
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          type="text"
        />
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Email
        </label>
        <input
          name="Email"
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          type="text"
        />
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Phone 1
        </label>
        <input
          name="phone1"
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          type="text"
        />
      </div>

      <div className="flex flex-col items-start gap-2 my-2">
        <label
          className="text-[#252625] font-medium text-[14px] leading-3"
          htmlFor="title"
        >
          Phone 2
        </label>
        <input
          name="phone2"
          className="border-[0.5px] border-[#A6A6A6] rounded w-full p-2 focus:outline-none"
          type="text"
        />
      </div>

      <button className="bg-[#F2BE5C] font-medium text-white text-[14px] leading-5 rounded-lg p-3">Save and Proceed to Subscription</button>
    </section>
  );
};

export default EditProfile2;
