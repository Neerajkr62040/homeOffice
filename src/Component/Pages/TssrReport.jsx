import React, { useEffect } from "react";
import ReactDOM from 'react-dom'
import { useState } from "react";
import {
  FaDownload,
  FaPrint,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Overview from "./Overview";
import MigrantDetails from "./MigrantDetails";
import SkillInfo from "./SkillInfo";
import OverviewPDF from "../OverviewPDF";
import { useParams } from "react-router-dom";
import jsonData from "../../newData.json";

import pdfFile from '../../assets/TSSR-2024-04-25-001.pdf'

function TssrReport() {
  const [openSections, setOpenSections] = useState([]);

  const { tssrId } = useParams();
  const tssrData = jsonData?.find((el) => el.tssrReference === tssrId);

  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.includes(section)
        ? prevOpenSections.filter((openSection) => openSection !== section)
        : [...prevOpenSections, section]
    );
  };

  const handlePrint = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.target = "_blank"
    // link.download = 'TSSR-2024-04-25-001.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'TSSR-2024-04-25-001.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // const document = <OverviewPDF data={tssrData} />;

  return (
    <div className="w-11/12 sm:w-auto m-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-around sm:flex-row  flex-col sm:items-center items-start"> 
        <h2 className="sm:text-sm text-xs  font-bold">TSSR Reference:</h2>
          <p className="text-xs font-bold italic text-blue-900"> {tssrId}</p>

        </div>
        <div className="flex items-center flex-row gap-2">
          {/* <PDFDownloadLink document={document} fileName={`${tssrId}.pdf`}>
            {({ loading }) => (
              <div className="flex flex-col items-center text-blue-700 cursor-pointer">
                <FaDownload /> {loading ? "Loading document..." : "Download"}
              </div>
            )}
          </PDFDownloadLink> */}

          <button
            onClick={handleDownload}
            className="mr-2 text-blue-700 flex items-center flex-col"
          >
            <FaDownload /> Download
          </button>

          <button
            onClick={handlePrint}
            className="mr-2 text-blue-700 flex items-center flex-col"
          >
            <FaPrint /> Print
          </button>
        </div>
      </div>
      <div className=" ">
        <div
          onClick={() => toggleSection("overview")}
          className="bg-gray-100 rounded p-4 mb-2 cursor-pointer flex justify-between"
        >
          <h3 className="font-semibold ">Overview</h3>
          {openSections.includes("overview") ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSections.includes("overview") && <Overview data={tssrData} />}
      </div>
      <div className="">
        <div
          onClick={() => toggleSection("migrantDetails")}
          className="bg-gray-100 rounded p-4 mb-2 cursor-pointer flex justify-between"
        >
          <h3 className="font-semibold">Migrant Details</h3>
          {openSections.includes("migrantDetails") ? (
            <FaChevronUp />
          ) : (
            <FaChevronDown />
          )}
        </div>
        {openSections.includes("migrantDetails") && (
          <MigrantDetails data={tssrData} />
        )}
      </div>
      <div className=" sm:mb-10">
        <div
          onClick={() => toggleSection("skillsMatch")}
          className="bg-gray-100 rounded p-4 mb-2 cursor-pointer flex justify-between"
        >
          <h3 className="font-semibold">Skills match information</h3>
          {openSections.includes("skillsMatch") ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <div className="w-full">
        {openSections.includes("skillsMatch") && <SkillInfo data={tssrData} />}
        </div>
      </div>
    </div>
  );
}

export default TssrReport;
