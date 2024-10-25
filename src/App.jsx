import React from 'react'
import NavBar from './Component/NavBar';
import Slider from "./Component/Slider";
import { Route, Routes } from "react-router-dom";

import TransferForm from "./Pages/TransferForm";

function App() {
  return (
    <>
      <div className=" ">
        <NavBar />
        {/* <div className="mx-auto container">
          <Slider />
         
        </div> */}

        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/transfer-form" element={<TransferForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App
