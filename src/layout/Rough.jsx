import React, {useState} from "react";
import { FaStar } from "react-icons/fa";

function Rough() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={` absolute top-30 left-0 z-40 w-52 h-screen transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
             <button onClick={()=>{
               setIsOpen(!isOpen)
             }}
             
                className="flex items-center p-2 text-blue-700 rounded-lg hover:text-red-700 hover:underline group"
              >
                 <FaStar className="" />
                <span className="ms-3">Home</span>
              </button>
            </li>
            <li>
             <button onClick={()=>{
               setIsOpen(!isOpen)
             }}
             
                className="flex items-center p-2 text-blue-700 rounded-lg hover:text-red-700 hover:underline group"
              >
                 <FaStar className="" />
                <span className="ms-3">Account</span>
              </button>
            </li>
            <li>
             <button onClick={()=>{
               setIsOpen(!isOpen)
             }}
             
                className="flex items-center p-2 text-blue-700 rounded-lg hover:text-red-700 hover:underline group"
              >
                 <FaStar className="" />
                <span className="ms-3">My Inbox</span>
              </button>
            </li>
            <li>
             <button onClick={()=>{
               setIsOpen(!isOpen)
             }}
             
                className="flex items-center p-2 text-blue-700 rounded-lg hover:text-red-700 hover:underline group"
              >
                 <FaStar className="" />
                <span className="ms-3"> My Assessments</span>
              </button>
            </li>
            <li>
             <button onClick={()=>{
               setIsOpen(!isOpen)
             }}
             
                className="flex items-center p-2 text-blue-700 rounded-lg hover:text-red-700 hover:underline group"
              >
                 <FaStar className="" />
                <span className="ms-3">CCM Responses</span>
              </button>
            </li>
            <li>
             <button onClick={()=>{
               setIsOpen(!isOpen)
             }}
             
                className="flex items-center p-2 text-blue-700 rounded-lg hover:text-red-700 hover:underline group"
              >
                 <FaStar className="" />
                <span className="ms-3"> Change Password</span>
              </button>
            </li>
            <li>
             <button onClick={()=>{
               setIsOpen(!isOpen)
             }}
             
                className="flex items-center p-2 text-blue-700 rounded-lg hover:text-red-700 hover:underline group"
              >
                 <FaStar className="" />
                <span className="ms-3">Logout</span>
              </button>
            </li>
            
          
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Rough;
