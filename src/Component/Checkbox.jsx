// src/CheckboxWithLabel.js
import React, { useState } from "react";

const Checkbox = (props) => {

    const {seatNumber} = props
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex flex-col items-center rounded-b-xl bg-white w-[95px] p-4  shadow-lg">
      <div className="bg-blue-500 text-center rounded-t-xl w-[95px]  py-2">
        <label className=" mb-2 text-white  ">{seatNumber}</label>
      </div>

      {/* Custom Checkbox */}
      <div className="relative  mt-3 rounded-b-lg">
        <input
          type="checkbox"
          id="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className="absolute opacity-0 cursor-pointer"
        />
        <div
          className={`w-6 h-6 rounded-full border-2 border-gray-300 transition-colors ${
            checked ? "bg-blue-600" : "bg-white"
          }`}
        >
          {checked && (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-blue-600" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
