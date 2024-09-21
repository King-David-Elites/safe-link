import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { HiUpload } from "react-icons/hi";
import useLocalStorage from "use-local-storage";
import Link from "next/link";
import Toast from "react-hot-toast";
import { RWebShare } from "react-web-share";
import useUserStore from "@/store/useUserStore";
import { base64ToFile } from "@/util/convertImage";
import FileBase64 from "react-file-base64";
import { updateProfile, updateProfilePicture } from "@/lib/api";
import ReactFileBase64 from "react-file-base64";
import axios from "axios";
//import { ShareSocial } from "react-share-social";

const ProfileHeader = () => {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const [profilePicture, setProfilePicture] = useState(
    user?.profilePicture || ""
  );

  const params = useSearchParams();
  const profileId = params.get("id");

  const isOwnProfile = user?._id === profileId;

  // console.log("user", user);

  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(`${window.location.origin}/profile/${user?._id}`);
  }, [user?._id]);


  const handleProfilePictureChange = async (image: any) => {
    try {
    
      const response = await updateProfilePicture(image);
      console.log(123)
      if (response) {
        // Toast.success("Profile picture updated successfully");
        // const data = response;
        // setUser(response?.data?.data);
        fetchUser(response?.data?.data)
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      Toast.error("Error updating profile picture");
    }
  };

  const fetchUser = async (data: any) => {
    // fetch user details from server
    // const response = await fetch(`/api/user/${profileId}`);
    // const data = await response.json();
    setUser(data);
  }


  return (
    <header className="w-full overflow-x-hidden">
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
          <div className="w-20 h-20  sm1:h-12 sm1:w-12 rounded-full relative">
            <img
              className="w-full h-full rounded-full object-cover"
              src={user?.profilePicture as string}
              alt="profile"
            />
            <button className="rounded-full bg-gray-500/[0.5] p-2 absolute bottom-1 -right-1 cursor-pointer">
              <ReactFileBase64 multiple={false} onDone={async (f) => {
                 if (f) {
                  setProfilePicture(f);
                 await handleProfilePictureChange(f); // Update immediately after file is uploaded
                }
              }} />
              <FaCamera size={15} />
            </button>
          </div>
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
            {isOwnProfile && (
              <Link
                href="/profile/edit-profile"
                className="text-[#737373] capitalize flex items-center gap-3 leading-6 p-2 border border-[#A6A6A6] rounded cursor-pointer text-nowrap sm1:hidden"
              >
                <MdEdit size={20} />
                edit profile
              </Link>
            )}
            <RWebShare
              data={{
                text: "",
                url: shareUrl,
                title: "share profile",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <button className="bg-[#F2BE5C] text-white capitalize flex items-center gap-3 leading-6 p-2 border border-[#F2BE5C] rounded-md cursor-pointer text-nowrap sm1:hidden">
                share profile
              </button>
            </RWebShare>
            {isOwnProfile && (
              <Link
                href={"/pricing"}
                className="bg-[#252625] text-[#F2F2F2] capitalize flex items-center gap-3 leading-6 p-2 border border-[#252625] rounded cursor-pointer text-nowrap sm1:hidden"
              >
                <HiUpload size={20} />
                upgrade account
              </Link>
            )}
          </div>
        </div>
      </div>

      <p className="my-2 mx-[5%] sm1:mx-[5%]  text-[#444544] tracking-wide sm:text-[12px] text-[18px] leading-4">
        {user?.about}
      </p>
      {isOwnProfile && (
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
      )}
      <div className="hidden sm1:flex items-center justify-between mx-[5%]">
        {isOwnProfile && (
          <>
            <button
              onClick={() => {
                router.push("/profile/edit-profile");
              }}
              className="text-[#737373] capitalize flex items-center gap-3 leading-6 p-2 border border-[#A6A6A6] rounded cursor-pointer text-nowrap"
            >
              <MdEdit size={16} />
              edit profile
            </button>
            <Link
              href={"/pricing"}
              className="bg-[#252625] text-[#F2F2F2] capitalize flex items-center gap-3 leading-6 p-2 border border-[#252625] rounded cursor-pointer text-nowrap"
            >
              <HiUpload size={20} />
              upgrade account
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default ProfileHeader;
