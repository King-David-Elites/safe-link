"use client";
import useModalStore from "@/store/useModalStore";
import React from "react";

type ActionKey = "openLogIn" | "openSignUp" | "openDrawer" | "close";

interface ModalButtonProps {
  actionKey: ActionKey;
  children: React.ReactNode;
}

const ModalButton: React.FC<ModalButtonProps> = ({ actionKey, children }) => {
  const {
    closeLogInModal,
    closeSignUpModal,
    closeDrawer,
    openDrawer,
    openLogInModal,
    openSignUpModal,
  } = useModalStore();

  const handleClick = () => {
    switch (actionKey) {
      case "openLogIn":
        closeSignUpModal();
        closeDrawer();
        openLogInModal();
        break;
      case "openSignUp":
        closeLogInModal();
        closeDrawer();
        openSignUpModal();
        break;
      case "openDrawer":
        closeLogInModal();
        closeSignUpModal();
        openDrawer();
        break;
      case "close":
        closeLogInModal();
        closeSignUpModal();

        break;
      default:
        console.warn("Invalid action key");
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="text-blue-500 text-[10px] font-medium"
      >
        {children}
      </button>
    </div>
  );
};

export default ModalButton;
