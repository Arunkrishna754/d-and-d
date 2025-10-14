import { useState } from "react";
import { BsWhatsapp, BsChatDots } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { companyDetails } from "../../constant";

const WhatsAppIconPopUp = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isChatBoxVisible, setChatBoxVisible] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const toggleChatBox = () => {
    setChatBoxVisible(!isChatBoxVisible);
  };

  return (
    <div className="fixed bottom-[2.5rem] right-[1.5rem] z-30">
      {/* Main Button */}
      <button
        className="p-1 hover:-translate-y-1 border bg-green-500 border-white-500 rounded-full transition-all duration-200"
        onClick={togglePopup}
        aria-label="Open chat options"
      >
        <BsChatDots className="w-[2.5rem] scale-95 h-[2.5rem] sm:w-[3rem] sm:h-[3rem] p-1 fill-white hover:scale-110 rounded-full shadow-transparent shadow-large hover:shadow-primary/50 transition-all duration-300" />
      </button>

      {/* Popup Options */}
      {isPopupVisible && (
        <div
          className="absolute bottom-[4.5rem] right-0 bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-3 border border-white/20 w-[12rem]"
        >
          <ul className="space-y-2">
            <li>
              <button
                className="flex items-center space-x-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
                onClick={toggleChatBox}
              >
                <BsChatDots className="w-5 h-5" />
                <span>Live Chat Bot</span>
              </button>
            </li>
            <li>
              <Link
                className="flex items-center space-x-2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200"
                to={companyDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <BsWhatsapp className="w-5 h-5" />
                <span>WhatsApp</span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Chat Box Popup */}
      {isChatBoxVisible && (
        <div
          className="fixed bottom-[2.5rem] right-[1.5rem] bg-white shadow-lg rounded-lg w-[20rem] h-[25rem] border border-gray-300 flex flex-col"
        >
          {/* Header */}
          <div className="bg-yellow-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span>Have a question? Ask us!</span>
            <button
              className="text-white hover:text-gray-200"
              onClick={toggleChatBox}
              aria-label="Close chat box"
            >
              ✖
            </button>
          </div>
          {/* Chat Content */}
          <div className="flex-1 p-3 overflow-y-auto">
            <p className="text-gray-700">Your message...</p>
          </div>
          {/* Input Area */}
          <div className="p-3 border-t border-gray-300 flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-2 bg-yellow-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-all duration-200">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppIconPopUp;
