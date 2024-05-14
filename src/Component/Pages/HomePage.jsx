import React, { useState } from "react";

import jsonData from "../../newData.json";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [searchString, setSearchString] = useState("");
  const [notFound,setNotFound] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const arr = jsonData?.map((el) => el.tssrReference);
    const normalizedSearchString = searchString.replace(/-/g, "");

    const matchingStrings = arr.filter((item) => {
      const normalizedItem = item.replace(/-/g, "");
      return normalizedItem === normalizedSearchString;
    });

    if (matchingStrings?.length > 0) {
     navigate("/tssr/"+matchingStrings[0])
    } else {
    setNotFound(true)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="sm:min-w-96 min-w-9/12">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="tssrId"
            className="block mb-1 text-sm font-medium text-gray-900 "
          >
            TSSR Reference Number :
          </label>
          <input
            type="text"
            id="tssrId"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="TSSR reference number..."
            required
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />

          <button
            type="submit"
            className="mt-2 w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          >
            Find
          </button>
        </form>
      </div>

      { notFound && <Modal handleClose={() => setNotFound(false)} title="TSSR Not Found!" message="Please make sure that you have entered valid tssr reference number." /> }
    </div>
  );
};

export default HomePage;
