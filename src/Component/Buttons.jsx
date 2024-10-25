import React from 'react'
import { Button, Checkbox, Label, Modal, Textarea, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

function Buttons() {
    const [openModal, setOpenModal] = useState(true);
    const emailInputRef = useRef()
  return (
    <div>
      <div className="flex justify-center gap-1 ">
        <button
          className="bg-[#026cdf]  h-11 w-[160px] rounded-md text-white"
          onClick={() => setOpenModal(true)}
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

      <Modal
        show={openModal}
        size="7xl"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={emailInputRef}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              SELECT TICKETS TO TRANSFER
            </h3>
            <div>
              <h1 className='text-sm text-red-600'>
                Only transfer tickets to people you know and trust to ensure
                everyone stays safe and socially distanced.
              </h1>
            </div>
            <h1>Sec A3, Row 12</h1>
            <div className="flex justify-start">
              <div className=" flex gap-2 border h-10 w-full items-center">
                <Checkbox id="transfer1" />
                <Label className="text-black" htmlFor="transfer1">
                  Seat 7
                </Label>
                <Checkbox id="transfer1" />
                <Label className="text-black" htmlFor="transfer1">
                  Seat 8{" "}
                </Label>
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="First Name" />
              </div>
              <TextInput
                id="email"
                ref={emailInputRef}
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Last Name" />
              </div>
              <TextInput
                id="email"
                ref={emailInputRef}
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email or Phone Number" />
              </div>
              <TextInput
                id="email"
                ref={emailInputRef}
                placeholder="Email Or Phone Number"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Note" />
              </div>
              <Textarea
                id="email"
                ref={emailInputRef}
                placeholder="note"
                required
              />
            </div>
           
           
            <div className="w-full flex gap-2">
              <Button className='bg-red-600'>Cancel</Button>
              <Button  className='bg-[#026cdf]'>Transfer To</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Buttons
