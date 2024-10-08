import { baseUrl } from "@/lib/api";
import useUserStore from "@/store/useUserStore";
import { Metadata } from "next";

import useLocalStorage from "use-local-storage";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:4050"), // Set the base URL for metadata
  title: "SAFELINK",
  description:
    "SAFELINK helps you tell your prospects and clients about yourself, your business and why they should buy from you",
  openGraph: {
    type: "website",
    //url: "localhost:4050/",
    title: "Kolawole Iwalewa",
    description: "I am a Software Developer",

    // images: [
    //   {
    //     url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    //     width: "100",
    //     height: "100",
    //     alt: "user profile",
    //   },
    // ],
  },
  // icons: {
  //   icon: "favicon.ico",
  // },
};

async function fetchUser() {
  //const { user } = useUserStore();
  const token = "asd";
  //console.log("ffg", user);
  try {
    const res = await fetch(`${baseUrl}/user/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return { email: "Unknown User", profilePicture: "/homepage-image-2.jpg" }; // Fallback
  }
}

export default function LayOut({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const { user } = useUserStore();
  const user = { email: "kol", profilePicture: "/homepage-image-2.jpg" };
  //const [user] = useLocalStorage("user", null);
  //fetchUser();

  if (metadata.openGraph) {
    metadata.openGraph.siteName = user?.email ?? "Unknown User";

    metadata.openGraph.images = [
      {
        url: user?.profilePicture ?? "/homepage-image-2.jpg",
        width: "100",
        height: "100",
        alt: "user profile",
      },
    ];
  }

  return <div>{children}</div>;
}
