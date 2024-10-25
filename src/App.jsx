import React from 'react'
import NavBar from './Component/NavBar';
import Slider from "./Component/Slider";
// import Offcanvas from './Component/Offcanvas';
//  import { Button } from "flowbite-react";
// import Buttons from './Component/Buttons';

function App() {
  return (
    <>
      <div className=" ">
        <NavBar />
        <div className="mx-auto container">
          <Slider />
         {/* <Buttons /> */}
        </div>
        {/* <Offcanvas /> */}
      </div>
    </>
  );
}

export default App
