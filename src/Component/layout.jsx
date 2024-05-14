import React from 'react';
import Navbar from './Navbar';
import Sidebar from '../layout/SideBar';
import InfoPopup from '../layout/InfoPopup';
import Footer from '../layout/Footer';

const RootLayout = ({ children}) => {
  let user = sessionStorage.getItem("user");
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="text-justify flex sm:m-auto sm:ml-56 sm:flex-nowrap flex-wrap md:flex-row flex-col gap-11 ">
        <div className='sm:w-full w-screen sm:mt-5 mt-2 m-auto sm:mb-10 text-sm'>
        {children}
        </div>
        <div  className="sm:m-4 m-auto">
          <InfoPopup />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
