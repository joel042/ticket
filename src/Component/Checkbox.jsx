// src/CheckboxWithLabel.js
import React, { useState } from "react";

const Checkbox = (props) => {
  const { seatNumber } = props;

  // State to manage the checkboxes

  return (
    <div className="flex flex-col items-center  rounded-b-xl bg-white w-[95px] p-4  shadow-lg">
      <div className="bg-[#026CDF] text-center border border-gray-400 rounded-t-xl w-[95px]  py-2">
        <label className=" mb-2 text-white  ">{seatNumber}</label>
      </div>

      {/* Custom Checkbox */}
      <div className="relative  mt-4 rounded-b-lg">
        <input
          type="checkbox"
          id="checkbox"
          className="border  size-7 cursor-pointer rounded-full"
        />
      </div>

    
    </div>
  );
};

export default Checkbox;
