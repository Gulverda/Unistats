import React, { useState } from "react";
import Sidebar from "../../nav/nav"; // Make sure the import path is correct
import "./FAQ.css";

function FAQ() {
  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How do I install React?",
      answer:
        "You can install React using npm or yarn. Run 'npm install react' or 'yarn add react' in your project directory.",
    },
    {
      question: "What are components in React?",
      answer:
        "Components are the building blocks of React applications. They are reusable, independent pieces of UI.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container-Main">
      <div className="faq-container">
        <Sidebar/>
        <div className="oriwami">
          <div
            style={{
              width: "100%",
              height: "70px",
              backgroundColor: "white",
              paddingLeft: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontFamily: "tkt", paddingTop: "18px", fontSize: "24px", fontWeight: "bold" }}>FAQ</h1>
          </div>
          <div className="faq-content">
            <h1 style={{fontFamily: "tkt", fontSize: '2rem', fontWeight: "bold", paddingLeft: "10px",
        paddingTop: "10px"}}>ხშირად დასმული კითხვები</h1>
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <div
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2>{faq.question}</h2>
                  <span
                    className={`arrow ${
                      activeIndex === index ? "active1" : ""
                    }`}
                  >
                    <svg
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.292893 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L5 4.08579L8.29289 0.792893C8.68342 0.402369 9.31658 0.402369 9.70711 0.792893C10.0976 1.18342 10.0976 1.81658 9.70711 2.20711L5.70711 6.20711C5.51957 6.39464 5.26522 6.5 5 6.5C4.73478 6.5 4.48043 6.39464 4.29289 6.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z"
                        fill="#251D35"
                      />
                    </svg>
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
