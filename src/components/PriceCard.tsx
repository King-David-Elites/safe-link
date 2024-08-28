import Link from "next/link";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

// components/PriceCard.js
export default function PriceCard({
  planName,
  price,
  duration,
  features,
  id,
}: {
  id: string;
  planName: string;
  price: string;
  duration: string;
  features: string[];
}) {
  return (
    <div className="bg-white rounded-lg  shadow-xl  p-6 mb-6">
      <div className="flex items-center mb-4">
        <img src="/pricing-ellipse.png" className="h-8 w-8" />
        <h3 className="ml-3 text-lg font-semibold">{planName}</h3>
      </div>
      <div className="text-3xl font-bold mb-2">
        {price} <span className="text-lg font-medium">/{duration}</span>
      </div>
      <h4 className="text-lg font-semibold mb-4">What's included</h4>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className=" mr-2">
              <FaCheckCircle color={"#f2be5c"} />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full bg-primary text-white py-2 rounded-xl">
        <Link
          href={{
            pathname: "/payment",
            query: {
              id: id,
            },
          }}
        >
          Get started
        </Link>
      </button>
    </div>
  );
}
