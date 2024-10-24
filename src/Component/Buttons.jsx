import React from 'react'

function Buttons() {
  return (
    <div>
      <div className="flex justify-center gap-1 ">
        <button
          className="bg-[#026cdf]  h-11 w-[160px] rounded-md text-white"
          onClick={() => console.log("Button 1 clicked")}
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
    </div>
  );
}

export default Buttons
