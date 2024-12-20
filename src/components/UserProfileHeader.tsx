import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RWebShare } from "react-web-share";
import Lightbox from "yet-another-react-lightbox";
import NextJsLightBox from "./NextJsLightBox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
//import { ShareSocial } from "react-share-social";

const ProfileHeader = ({ user }: { user: User }) => {
  const router = useRouter();

  console.log("user", user);

  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(`${window.location.origin}/profile/${user?._id}`);
  }, [user?._id]);

  const [open, setOpen] = useState(false);
  const imageSlides = [{ src: user?.profilePicture ?? "/pp-placeholder.png" }];

  return (
    <header className="w-full overflow-x-hidden">
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={imageSlides}
        render={{
          slide: NextJsLightBox,
          buttonPrev: imageSlides.length <= 1 ? () => null : undefined,
          buttonNext: imageSlides.length <= 1 ? () => null : undefined,
        }}
        carousel={{ finite: imageSlides.length <= 1 }}
        plugins={[Fullscreen]}
      />
      <div className="relative ">
        <img
          src={
            user?.professionalPictures && user?.professionalPictures.length > 0
              ? user?.professionalPictures[0]
              : "/cp-placeholder.png"
          }
          alt=""
          className="h-[150px] w-full"
        />
        <button
          className="capitalize absolute top-2 left-2 flex items-center gap-2"
          onClick={() => router.back()}
        >
          <FaArrowLeftLong size={24} /> back
        </button>
      </div>
      <div className="w-full mx-auto flex  items-center mt-3 justify-between sm1:px-2 ">
        <div className="flex flex-row items-center gap-2 ">
          <button
            onClick={() => setOpen(true)}
            className="w-20 h-20  sm1:h-12 sm1:w-12 rounded-full"
          >
            <img
              className="w-full h-full rounded-full"
              src={user?.profilePicture ?? "/pp-placeholder.png"}
              alt="profile"
            />
          </button>
          <div className="">
            <h1 className="flex items-center gap-1 font-semibold sm:w-auto w-[40vw] text-[22px] sm1:text-[12px] break-words">
              <span className="max-w-full overflow-hidden">{user?.email}</span>
              <img src={"/verification.svg"} alt="" />
            </h1>
            <small className="text-[14px]  sm1:text-[12px] font-semibold leading-5 text-[#737373]">
              Joined: {user?.createdAt && user?.createdAt.slice(0, 4)}
            </small>
          </div>
          {/* <button className="rounded-full  bg-gray-500/[0.5] p-2 absolute bottom-1 -right-1 sm:-right-1 cursor-pointer">
            <FaCamera size={8} />
          </button> */}
        </div>
        <div className="flex items-center gap-2   ">
          <div className="flex items-center gap-3 justify-between sm1:flex-wrap sm1:justify-center">
            <RWebShare
              data={{
                text: "User Profile",
                url: shareUrl,
                title: "share profile",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <button className="bg-[#F2BE5C] text-white capitalize flex items-center gap-3 leading-6 p-2 border border-[#F2BE5C] rounded-md cursor-pointer text-nowrap sm1:hidden">
                share profile
              </button>
            </RWebShare>
          </div>
        </div>
      </div>

      <p className="my-2 mx-[5%] sm1:mx-[5%]  text-[#444544] tracking-wide sm:text-[12px] text-[18px] leading-4">
        {user?.about}
      </p>

      <div className="mb-2 mt-4 w-full justify-center hidden sm1:flex">
        <RWebShare
          data={{
            text: "",
            url: shareUrl,
            title: "share profile",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <button className="bg-[#F2BE5C]  w-[90%] rounded-md text-white capitalize flex items-center justify-center gap-3 leading-6 p-2 border border-[#F2BE5C] cursor-pointer text-nowrap">
            share profile
          </button>
        </RWebShare>
      </div>
    </header>
  );
};

export default ProfileHeader;
