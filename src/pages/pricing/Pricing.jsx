import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly"); // Toggle for billing type

  const plans = [
    {
      name: "Basic Plan",
      price: billing === "monthly" ? 100 : 1000,
      features: [
        "Access to basic teachings",
        "Monthly spiritual newsletters",
      ],
      missingFeatures: [
        "Personal guidance sessions",
        "Priority event access",
        "Exclusive video library",
      ],
      color: "bg-blue-100",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      for: billing === "monthly" ? '/mo' : '/yr'
    },
    {
      name: "Premium Plan",
      price: billing === "monthly" ? 200 : 2000,
      features: [
        "Access to all teachings",
        "Monthly spiritual newsletters",
        "Exclusive video library",
        "Two personal guidance sessions",
      ],
      missingFeatures: ["Priority event access"],
      color: "bg-yellow-100",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      for: billing === "monthly" ? '/mo' : '/yr'
    },
    {
      name: "Enterprise Plan",
      price: billing === "monthly" ? 300 : 3000,
      features: [
        "All-inclusive access",
        "Monthly spiritual newsletters",
        "Exclusive video library",
        "Unlimited personal guidance sessions",
        "Priority event access",
      ],
      missingFeatures: [],
      color: "bg-green-100",
      buttonColor: "bg-green-500 hover:bg-green-600",
      for: billing === "monthly" ? '/mo' : '/yr'
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-5 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        Choose Your Plan
      </h1>
      <p className="text-center text-gray-600 text-lg mb-10">
        Start your spiritual journey with a plan that suits your needs.
      </p>

      {/* Toggle for Monthly/Yearly */}
      <div className="flex justify-center items-center mb-10">
        <span className="text-sm text-gray-600 mr-3">Monthly</span>
        <button
          onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
          className={`relative w-16 h-8 bg-gray-300 rounded-full focus:outline-none transition duration-300 ${
            billing === "yearly" ? "bg-primary" : ""
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transform transition duration-300 ${
              billing === "yearly" ? "translate-x-8" : ""
            }`}
          ></span>
        </button>
        <span className="text-sm text-gray-600 ml-3">Yearly</span>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full md:w-1/4 p-6 rounded-xl shadow-lg ${plan.color} transition-transform transform hover:scale-105`}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {plan.name}
            </h2>
            <p className="text-5xl font-bold text-primary mb-6">
              &#x20b9;{plan.price}
              <span className="text-lg font-medium text-gray-600">{plan.for}</span>
            </p>
            <ul className="text-gray-700 mb-6 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-green-600 mr-3">✔</span>
                  {feature}
                </li>
              ))}
              {plan.missingFeatures.map((missingFeature, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-red-500 mr-3">✘</span>
                  {missingFeature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 text-white font-medium rounded-lg ${plan.buttonColor} transition duration-300`}
            >
              Start Free Trial
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Why Choose Us?
        </h3>
        <p className="text-gray-600">
          Explore the wisdom of Sanatan Dharma and connect with your spiritual
          self. Join our community and begin your transformation today.
        </p>
      </div>
    </div>
    </MainLayout>
  );
};

export default Pricing;
