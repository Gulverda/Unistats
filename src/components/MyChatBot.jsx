import React, { useEffect } from "react";
import ChatBot from "react-chatbotify";
import "../App.css"; // Import custom CSS for styling

const MyChatBot = () => {
    useEffect(() => {
        const chatHeader = document.querySelector(".rcb-chat-header h3");
        if (chatHeader) {
          chatHeader.textContent = "UniStats Bot"; // Change the text content of h3
        }
      }, []);
    
  useEffect(() => {
    const chatTooltip = document.querySelector(".rcb-chat-tooltip");
    if (chatTooltip) {
      chatTooltip.style.color = "#4318ff";
      chatTooltip.style.backgroundColor = "#f4f7fe";
      chatTooltip.innerHTML = "Let me help you!";
    }
  }, []);

  useEffect(() => {
    const chatHeaderButton = document.querySelector(".rcb-chat-bot button");
    if (chatHeaderButton) {
      chatHeaderButton.style.backgroundColor = "#ffffff";
      chatHeaderButton.style.color = "#ffffff";
    }
  }, []);

  const flow = {
    start: {
      message: "Hello, I am a UniStats Bot!",
      options: ["Calendar", "Github", "LinkedIn"],
      path: "process_options"
    },
    process_options: {
      message: (params) => {
        let link = "";
        switch (params.userInput) {
          case "Calendar":
            link = "http://localhost:3000/calendar";
            break;
          case "Github":
            link = "https://github.com/Gulverda/Unistats";
            break;
          case "LinkedIn":
            link = "https://www.linkedin.com/in/gulverda/";
            break;
          case "No, thanks":
            return "No problem! Have a great day!";
          default:
            return "I don't know what you mean. Please try again.";
        }
        setTimeout(() => {
          window.open(link);
        }, 1000);
        return `Sit tight! I'll send you to ${params.userInput}!`;
      },
      transition: { duration: 1 },
      path: "loop"
    },
    loop: {
      message: "Do you need any more help?",
      options: ["Calendar", "Github", "LinkedIn", "No, thanks"],
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
