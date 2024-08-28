import LoadingModal from "@/components/LoadingModal";
import Modal from "@/components/LoginModal";
//import { BeatLoader, BounceLoader, DotLoader } from "react-spinners";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <LoadingModal isOpen={true}>
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    </LoadingModal>
  );
}
