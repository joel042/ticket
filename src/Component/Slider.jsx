import React from 'react'
import Card from './Card';
import { Carousel } from "flowbite-react";
import Buttons from './Buttons';
import "../index.css";
// import Sliderr from "react-slick";

function Slider() {
 var settings = {
   dots: true,
   infinite: false,
   speed: 500,
   slidesToShow: 4,
   slidesToScroll: 4,
   initialSlide: 0,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true,
       },
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 2,
         initialSlide: 2,
       },
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
   ],
 };

  return (
    <>
      <div className=" flex items-center flex-col rounded-md h-[650px] ">
        <div className="">
          <Carousel
            slide={false}
            className="w-[350px] h-[650px] "
            indicators={true}
            leftControl={"."}
          >
            <Card />
            <Card />
          </Carousel>
        </div>
        <div></div>
        <div className="mt-6 ">
          <Buttons />
        </div>
      </div>
      <div>
       
      </div>
    </>
  );
}

export default Slider
