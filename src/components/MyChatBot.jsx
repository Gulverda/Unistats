import React, { useEffect } from "react";
import ChatBot from "react-chatbotify";
import "../App.css"; // Import custom CSS for styling

const MyChatBot = () => {
    useEffect(() => {
        const chatHeader = document.querySelector(".rcb-chat-header h3");
        if (chatHeader) {
          chatHeader.style.fontFamily = "tkt";
          chatHeader.textContent = "UniStats Bot"; // Change the text content of h3
        }
      }, []);
    
  useEffect(() => {
    const chatTooltip = document.querySelector(".rcb-chat-tooltip");
    if (chatTooltip) {
      chatTooltip.style.color = "#4318ff";
      chatTooltip.style.fontFamily = "tkt";
      chatTooltip.style.backgroundColor = "#f4f7fe";
      chatTooltip.innerHTML = "გინდა დაგეხმარო?";
    }
  }, []);

  useEffect(() => {
    const chatHeaderButton = document.querySelector(".rcb-chat-bot button");
    if (chatHeaderButton) {
      chatHeaderButton.style.fontFamily = "tkt";
      chatHeaderButton.style.backgroundColor = "#ffffff";
      chatHeaderButton.style.color = "#ffffff";
    }
  }, []);

  const flow = {
    start: {
      message: "გამარჯობა! მე ვარ ჩათბოტი",
      options: ["დახმარება", "კალენდარი", "Github", "LinkedIn"],
      path: "process_options"
    },
    process_options: {
      message: (params) => {
        let link = "";
        switch (params.userInput) {
          case "დახმარება":
            return "გიგზავნით მეილს: ggdln@gau.edu.ge";
            break;
          case "კალენდარი":
            link = "http://localhost:3000/calendar";
            break;
          case "Github":
            link = "https://github.com/Gulverda/Unistats";
            break;
          case "LinkedIn":
            link = "https://www.linkedin.com/in/gulverda/";
            break;
          case "არა, მადლობა":
            return "არ არის პრობლემა! კარგ დღეს გისურვებ :)";
            break;
          default:
            return "ვერ მივხვდი რას გულისხმობ. გთხოვ აირჩიო შესაბამისი პარამეტრი.";
        }
        setTimeout(() => {
          window.open(link);
        }, 1000);
        return `მოითმინე! ახლავე დაგეხმარები ${params.userInput}!`;
      },
      transition: { duration: 1 },
      path: "loop"
    },
    loop: {
      message: "სხვა რამით ხო ვერ დაგეხმარები?",
      options: ["დახმარება", "კალენდარი", "Github", "LinkedIn", "არა, მადლობა"],
      path: "process_options"
    },
  };

  return (
    <div className="chatbot-container">
      <ChatBot flow={flow} />
    </div>
  );
};

export default MyChatBot;
