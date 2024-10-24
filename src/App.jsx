import React from 'react'
import NavBar from './Component/NavBar';
import Slider from "./Component/Slider";
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
      </div>
    </>
  );
}

export default App
