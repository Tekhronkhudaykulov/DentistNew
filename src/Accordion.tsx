import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-lg mx-auto  mt-6 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
      <div
        className="flex  justify-between  items-center cursor-pointer p-5 bg-gray-500 text-white rounded-t-xl transition-all duration-300 ease-in-out hover:brightness-110"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span
          className={`transform transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      <div
        className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="p-5 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;