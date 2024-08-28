import React from "react";

interface PaymentMethodProps {
  method: "card" | "bank";
  onClick: (method: "card" | "bank") => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ method, onClick }) => {
  return (
    <div className="flex justify-center  mt-4">
      <button
        className={`py-2 px-4 sm:px-2 sm:text-sm text-lg  ${
          method === "card" ? "border-primary border-b-4 t" : "text-gray-600"
        }`}
        onClick={() => onClick("card")}
      >
        Pay with your card
      </button>
      <button
        className={`py-2 px-4 sm:px-1 text-lg sm:text-sm ml-4  ${
          method === "bank" ? "border-primary border-b-4 " : "text-gray-600"
        }`}
        onClick={() => onClick("bank")}
      >
        Pay using bank transfers
      </button>
    </div>
  );
};

export default PaymentMethod;
