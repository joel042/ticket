import Checkbox from './Checkbox';
import React, { useState } from 'react'



function Buttons() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOffcanvas = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
      <div className="flex justify-center gap-1 ">
        <button
          onClick={toggleOffcanvas}
          className="bg-[#026cdf]  h-11 w-[160px] rounded-md text-white"
        >
          Transfer
        </button>

        <button
          className="bg-[#026cdf]  w-[160px] rounded-md h-11 text-white"
          onClick={() => console.log("Button 2 clicked")}
        >
          Sell
        </button>
      </div>

      {/* modal */}

      <div
        className={`fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out bg-white shadow-lg ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className=" border   ">
          <button
            onClick={toggleOffcanvas}
            className=" text-red-600 flex justify-start "
          >
            Close
          </button>
          <div className="gap-[300px]  text-center  p-4 font-semibold py-1">
            <p className="text-center">SELECT TICKETS TO TRANSFER</p>
          </div>
          <hr className="border w-full mb-6" />
          <div className="border p-4 bg-gray-50 flex justify-between h-[120px]">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <p>
                Only transfer tickets to people you know and trust to ensure
                everyone stays safe and socially distanced.
              </p>
            </div>
          </div>

          <div className="secA3 p-4 flex justify-between mt-4 ">
            <div className="flex gap-2">
              <p>Sec A3</p>
              <p>Row 12</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>2 Tickets</p>
            </div>
          </div>
          {/* checkbox */}
          <div className="flex gap-2 mb-7 p-4 ">
            <Checkbox seatNumber="SEAT 7 " />
            <Checkbox seatNumber="SEAT 8 " />
          </div>
          <hr className="py-4" />
          <div className="flex p-4 justify-between items-center p-2 bg-gray-100 h-[100px]">
            <div>
              <p>0 Selected</p>
            </div>
            <div>
              <p className="font-bold text-blue-600">TRANSFER TO</p>
            </div>
          </div>
          {/* <button onClick={toggleOffcanvas} className="mt-4 text-red-600">
            Close
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Buttons
