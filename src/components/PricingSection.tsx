// components/PricingSection.js
import PriceCard from "./PriceCard";

export default function PricingSection() {
  const plans = [
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

  return (
    <section className="container mx-auto p-[10%] py-4 sm:p-4">
      <h2 className="text-4xl font-bold text-center mb-8">Prices</h2>
      <p className="text-center mb-12">
        by showcasing your exclusive listings to our highly-esteemed users
      </p>
      <div className="grid sm:grid-cols-1 grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <PriceCard
            key={index}
            id={plan.id}
            planName={plan.planName}
            price={plan.price}
            duration={plan.duration}
            features={plan.features}
          />
        ))}
      </div>
    </section>
  );
}
