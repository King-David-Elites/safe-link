import React, { ReactNode } from "react";

const LoadingModal = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-transparent p-6 rounded-lg  relative">{children}</div>
    </div>
  );
};

export default LoadingModal;
