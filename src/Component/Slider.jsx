import React from 'react'
import Card from './Card';
import { Carousel } from "flowbite-react";
import Buttons from './Buttons';
import "../index.css";
function Slider() {
  return (
    <div className=" flex items-center flex-col rounded-md h-[650px] ">
      <div className="">
        <Carousel
         
          slide={false}
          className="w-[350px] h-[650px] "
          indicators={true}
          leftControl={'.'}
        >
          <Card />
          <Card />
        </Carousel>
      </div>

      <div className="mt-6 ">
        <Buttons />
      </div>
    </div>
  );
}

export default Slider
