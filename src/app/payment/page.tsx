"use client";
import PaymentMethod from "@/components/PaymentMethod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface Plan {
  id: string;
  planName: string;
  price: string;
  duration: string;
  features: string[];
}

const plans: Plan[] = [
  {
    id: "1",
    planName: "Basic",
    price: "N2,000",
    duration: "monthly",
    features: [
      "Unlimited Listings",
      "1 MONTH SUBSCRIPTION",
      "Occasional Feature on the homepage",
      "Occasional Feature on the Safelink social media platforms",
    ],
  },
  {
    id: "2",
    planName: "3 Months Plan",
    price: "N5,500",
    duration: "3 months",
    features: [
      "Unlimited Listings",
      "1 MONTH SUBSCRIPTION",
      "Occasional Feature on the homepage",
      "Occasional Feature on the Safelink social media platforms",
    ],
  },
  {
    id: "3",
    planName: "6 Months Plan",
    price: "N10,000",
    duration: "6 months",
    features: [
      "Unlimited Listings",
      "6 MONTH SUBSCRIPTION",
      "Occasional Feature on the homepage",
      "Occasional Feature on the Safelink social media platforms",
    ],
  },
  {
    id: "4",
    planName: "12 Month Plan",
    price: "N18,000",
    duration: "12 months",
    features: [
      "Unlimited Listings",
      "12 MONTH SUBSCRIPTION",
      "Occasional Feature on the homepage",
      "Occasional Feature on the Safelink social media platforms",
    ],
  },
];

const PaymentPage = () => {
  const [method, setMethod] = useState<"card" | "bank">("card");
  const params = useSearchParams();
  const id = params.get("id");

  const plan = plans.filter((item: Plan) => (item.id = id ?? "1"))[0];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-center text-3xl font-bold mb-4">Payment</h1>
      <p className="text-center mb-6">
        You can now complete your profile by listing your desired
        products/services
      </p>
      <PaymentMethod method={method} onClick={setMethod} />

      <div className="bg-white rounded-xl shadow-md p-6 mt-6">
        <div className="flex items-center mb-4">
          <img src="/pricing-ellipse.png" className="h-8 w-8" />
          <h3 className="ml-3 text-lg font-semibold">{plan.planName}</h3>
        </div>
        <div className="text-3xl font-bold mb-2">
          {plan.price}{" "}
          <span className="text-lg font-medium">/{plan.duration}</span>
        </div>
        <h4 className="text-lg font-semibold mb-4">What's included</h4>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className=" mr-2">
                <FaCheckCircle color={"#f2be5c"} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {method === "bank" ? (
          <div className="mt-6">
            <h4 className="text-lg font-semibold">Payment Details</h4>
            <p className="mt-2">Bank Name: Opay</p>
            <p>
              Account Number: 9055443121{" "}
              <span className="cursor-pointer">&#x2398;</span>
            </p>
            <p>Account Name: KDE</p>
            <button className="bg-yellow-500 text-white w-full mt-6 py-2 rounded-md">
              I've made the payment
            </button>
          </div>
        ) : (
          <div className="mt-6">
            <input
              className="w-full p-2 mb-4 border rounded-md"
              type="text"
              placeholder="Card Number"
            />
            <input
              className="w-full p-2 mb-4 border rounded-md"
              type="text"
              placeholder="Card Name"
            />
            <div className="flex space-x-4">
              <input
                className="w-1/2 p-2 mb-4 border rounded-md"
                type="text"
                placeholder="Expiry Date"
              />
              <input
                className="w-1/2 p-2 mb-4 border rounded-md"
                type="text"
                placeholder="CVV"
              />
            </div>
            <input
              className="w-full p-2 mb-4 border rounded-md"
              type="password"
              placeholder="Password"
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" id="saveCard" className="mr-2" />
              <label htmlFor="saveCard">
                Save card details for future transactions
              </label>
            </div>
            <button className="bg-yellow-500 text-white w-full mt-6 py-2 rounded-md">
              Click to Proceed Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
