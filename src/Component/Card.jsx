import React from 'react'
import img1 from "../assets/taylor.jpg";
import img2 from "../assets/tick-barcode.png";
import img3 from "../assets/verified.jpg"
function Card() {
  return (
    <div>
      <div className="mt-5 text-center ">
        <div className="w-[350px]  mx-auto  shadow-2xl ">
          <div className="text-center">
            <div className="bg-[#155fc8] rounded-t-2xl text-sm p-2 text-white">
              <h1>Standard Ticket</h1>
            </div>
            <div className="flex text-white justify-between p-7  bg-[#026cdf]">
              <h1 className="flex flex-col text-center">
                SEC <span>A3</span>
              </h1>
              <h1 className="flex flex-col text-center">
                SEC <span>A3</span>
              </h1>
              <h1 className="flex flex-col text-center">
                SEC <span>A3</span>
              </h1>
            </div>
          </div>
          <div className="relative overflow-hidden  shadow-lg">
            <img
              src={img1}
              alt="Card Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50">
              <h2 className="text-white text-lg font-semibold">Overlay Text</h2>
            </div>
          </div>

          <div className="flex  flex-col">
            <img className="p-5" src={img2} alt="" />
            <h1 className='mt-4 font-semibold text-blue-500'>Ticket Details</h1>
            <img className="mt-7 rounded-b-2xl" src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
