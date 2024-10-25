import Checkbox from "./Checkbox";
import React, { useState } from "react";
import img4 from ".././assets/icons8-ticket-50 (2).png";
import iconFW from ".././assets/icons8-forward-26.png";
import infoIcocn from ".././assets/icons8-info.svg";
import { Link } from "react-router-dom";


function Buttons() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

    const handleTransferClick = (e) => {
      if (!isOpen) {
        e.preventDefault(); // Prevent navigation if off-canvas is closed
      } else {
        console.log("Transfer link clicked");
      }
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
          <hr className="border w-full  mb-6" />
          <div className="border border-black m-4 bg-gray-50 flex items-center gap-4 h-[120px] md:h-[200px]">
            <div>
              <img src={infoIcocn} className="size-40" alt="" />
            </div>
            <div>
              <p>
                Only transfer tickets to people you know and trust to ensure
                everyone stays safe and socially distanced.
              </p>
            </div>
          </div>

          <div className="secA3 text-gray-500 p-4 flex justify-between mt-4 ">
            <div className="flex text-xl gap-2">
              <p>Sec A3</p>
              <p>Row 12</p>
            </div>
            <div className="flex  gap-3">
              <img className="size-5 " src={img4} alt="" />
              <p>2 Tickets</p>
            </div>
          </div>
          {/* checkbox */}

          <div className="flex gap-2 mb-7 p-4 ">
            <Checkbox seatNumber="SEAT 7 " />
            <Checkbox seatNumber="SEAT 8 " />
          </div>
          <hr className="py-4" />
          <div className="flex  justify-between items-center p-2 bg-gray-100 h-[100px]">
            <div>
              <p>Selected</p>
            </div>
            <div>
              {
                <Link
                  onClick={(handleTransferClick, toggleOffcanvas)}
                  to="/transfer-form"
                >
                  <p className="font-medium text-xl cursor-pointer items-center gap-1 text-blue-600 flex">
                    TRANSFER TO
                    <span className="">
                      <img src={iconFW} className="size-5" alt="" />
                    </span>
                  </p>
                </Link>
              }
            </div>
          </div>
        </div>
      </div>

      {/* modal2 */}
    </div>
  );
}

export default Buttons;
