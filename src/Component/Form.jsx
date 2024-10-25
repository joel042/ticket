// src/BottomOffcanvas.js
import React, { useState } from "react";
import Buttons from "./Buttons";

const Form = ({ onClickBtn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvasTwo = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
    
  };

  return (
    <div className="relative">
      {/* <button
        onClick={toggleOffcanvas}
        className="px-4 py-2 text-white bg-blue-600 rounded shadow"
      >
        Toggle Offcanvas
      </button> */}
      <Buttons onClickBtn = {toggleOffcanvasTwo} />
      <div
        className={`fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out bg-white shadow-lg ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="p-4 ">
          <h2 className="text-lg font-semibold">Offcanvas Content</h2>
          <p>This is the content of the offcanva.</p>
          <button onClick={toggleOffcanvasTwo} className="mt-4 text-red-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
