import React from "react";
import Sidebar from "../nav/nav"; // Make sure the import path is correct
import "../../../src/App.css";

function FAQ() {
  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "How do I install React?",
      answer: "You can install React using npm or yarn. Run 'npm install react' or 'yarn add react' in your project directory."
    },
    {
      question: "What are components in React?",
      answer: "Components are the building blocks of React applications. They are reusable, independent pieces of UI."
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-container">
      <Sidebar /> {/* Render the Sidebar component */}
      <div className="faq-content">
        <h1>Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <div key={index}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
