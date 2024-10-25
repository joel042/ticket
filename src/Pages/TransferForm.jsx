// src/BottomOffcanvas.js
import React, { useState } from "react";
import Slider from "../Component/Slider";
import { Link } from "react-router-dom";
import img1 from ".././assets/icons8-ticket-50 (2).png"

const TransferForm = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative ">
        {/* <button
        onClick={toggleOffcanvas}
        className="px-4 py-2 text-white bg-blue-600 rounded shadow"
      >
        Toggle Offcanvas
      </button> */}
        <Slider />
        <div
          className={`fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out bg-white shadow-lg ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ zIndex: 1000 }}
        >
          <div className="p-4 shadow-2xl ">
            <hr />
            <div className="  text-center py-4 font-medium">
              <p className="text-center">TRANSFER TICKETS </p>
            </div>
            <hr />
            {/* sec */}
            <div className="secA3 text-gray-500 p-4 mt-4 ">
              <p className="text-black mb-2">0 Tickets Selected</p>
              <div className="flex text-sm gap-7">
                <p className="flex flex-col">
                  Sec <span>A3</span>
                </p>
                <p className="flex flex-col">
                  Row <span>12</span>
                </p>
                <p className="flex flex-col">
                  Seat <span></span>
                </p>
              </div>
            </div>
            <div className="text-gray-500">
              <div className="flex flex-col py-2">
                <label className="" htmlFor="">
                  First Name
                </label>
                <input
                  className="text-sm focus:outline-none focus:ring-0"
                  type="text"
                  placeholder="First  Name"
                />
              </div>

              <div className="flex flex-col py-2">
                <label htmlFor="">Last Name</label>
                <input
                  className="text-sm focus:outline-none focus:ring-0"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <div className="flex flex-col py-2">
                <label htmlFor="">Email or Mobile Number</label>
                <input
                  type="text"
                  className="text-sm focus:outline-none focus:ring-0"
                  placeholder="Email or Mobile Number"
                />
              </div>

              <div className="flex flex-col py-2">
                <label htmlFor="">Note</label>
                <textarea
                  type=""
                  className="h-[100px] text-sm focus:outline-none focus:ring-0"
                  placeholder="Note"
                />
              </div>

              <div className="flex  flex-row-reverse  justify-between items-center p-2 bg-gray-100 h-[100px]">
                <button
                  onClick={toggleOffcanvas}
                  className="bg-[#026cdf] text-sm h-11 w-[160px] rounded-md text-white"
                >
                  Transfer 0 Tickets
                </button>
                <div>
                  {
                    <Link to="/">
                      <p className="font-medium text-LG cursor-pointer items-center gap-1 text-blue-600 flex">
                        <span className="">
                          <img
                            src="https://img.icons8.com/?size=100&id=39800&format=png&color=026BDD"
                            className="size-5"
                            alt=""
                          />
                        </span>
                        BACK
                      </p>
                    </Link>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferForm;
