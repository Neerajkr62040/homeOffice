import React from "react";
import Sidebar from "./SideBar";
import InfoPopup from "./InfoPopup";
import LoginForm from "./LoginForm";
import Desc from "./Desc";

function DescPage({ children }) {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className=" text-justify flex m-auto sm:ml-56 md:flex-nowrap flex-wrap md:flex-row flex-col gap-11">
        <div className=" flex flex-col">
        <Desc/>
      <div className="sm:mt-20 mt-10 sm:w-full w-9/12 m-auto">{children}</div>
        </div>
        <div className="sm:m-4 m-auto" >
          <InfoPopup />
        </div>
      </div>
    </div>
  );
}

export default DescPage;
