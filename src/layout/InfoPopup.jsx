import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import Modal from "../Component/Modal";

const InfoPopup = () => {
  const [showModal,setShowModal] = useState(false)

  const links = [
    "Who is 1st Star",
    "What is TSSR",
    "Who is CCM",
    "Personal Data privacy statement",
    "Cookies Policy",
    "Accessibility statement",
  ];

  return (
    <div className=" w-72 border-none bg-[#f3f3f3] rounded-b-lg">
      <div className=" bg-gradient-to-b from-[#D8D8D8] to-[#B4B4B4] font-bold drop-shadow-sm text-black p-2">
        For information
      </div>
      <div className="p-2 text-sm">
        {links.map((link, index) => (
          <div key={index} className="text-[#0068C8] mb-2 underline" onClick={() => setShowModal(true)}>
            <div className=" cursor-pointer flex gap-2 items-center">
              <BiSolidRightArrow className="inline-block text-[#0068C8]" />
              {link}
            </div>
          </div>
        ))}
      </div>

      { showModal && <Modal handleClose={() => setShowModal(false)} /> }
    </div>
  );
};

export default InfoPopup;
