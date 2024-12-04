import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Sanatan Dharma?",
      answer:
        "Sanatan Dharma, also known as the Eternal Dharma, is the spiritual, ethical, and cultural foundation of Hinduism. It emphasizes universal principles such as truth, righteousness, and harmony with nature.",
    },
    {
      question: "How can I join the spiritual programs?",
      answer:
        "You can join our spiritual programs by registering on our website. Browse the 'Programs' section for details and schedules of upcoming events.",
    },
    {
      question: "What are the benefits of becoming a member?",
      answer:
        "Members gain access to exclusive teachings, spiritual newsletters, personal guidance sessions, and priority access to events and workshops.",
    },
    {
      question: "Are your programs suitable for beginners?",
      answer:
        "Yes, our programs cater to individuals at all levels of spiritual practice, including beginners. Our teachings are designed to guide you step-by-step on your spiritual journey.",
    },
    {
      question: "How can I contribute to the mission?",
      answer:
        "You can support our mission by volunteering, donating, or spreading awareness about our teachings and initiatives. Visit the 'Contribute' section for more information.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-gray-600 text-lg mb-8">
        Have questions? Find answers to some of the most common inquiries about
        our teachings and services.
      </p>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-gray-800 focus:outline-none"
            >
              {faq.question}
              <span className="text-primary">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </MainLayout>
  );
};

export default FAQ;
