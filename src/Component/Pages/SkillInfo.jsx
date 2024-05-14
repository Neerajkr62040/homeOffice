import React from "react";
import { FaDownload, FaPrint } from "react-icons/fa";

// const authors = [
//   { name: "Willaims (Job title)", title: "AO" },
//   { name: "Noah (Job title)", title: "KC" },
//   { name: "Alexander (Job title)", title: "L1" },
//   {
//     name: "David (Job title) Richard (Job title) Christopher (Job title)",
//     title: "CCE",
//   },
//   { name: "Tina", title: "HR" },
//   { name: "Virat Shah Manpreet", title: "Employee" },
// ];


function SkillInfo({data}) {
  
    if (!data) {
      return <div>No data found for the provided TSSR reference.</div>;
    }

  return (
    <div className="flex flex-col text-xs">
      <div className="my-2 overflow-x-auto mx-1">
        <div className="py-2 align-middle inline-block min-w-full px-2">
          <div className="shadow overflow-hidden border-b border-gray-200 ">
            <div className="py-3 border-b w-full border-white text-center text-xs bg-gray-800 font-medium text-white ">
              Mandate Skills
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-500 ">
                <tr>
                  <th
                    scope="col"
                    className="border-2 border-white  px-2  py-2 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Subject/Expertise
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white  px-2  py-2 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Exp required/Claimed
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white  px-2  py-2 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    AI Score
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white  px-2  py-2 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    CCE Notes
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white  px-2  py-2 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Remarks - AO/KC/L
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-gray-200 divide-y divide-gray-200">
                {data.mandateSkills.map((row) => (
                  <tr key={row.subject}>
                    <td className="px-2 border-2 border-white w-1/5 py-4 ">
                      <div className="text-xs   text-gray-900">
                        {row.subject}
                      </div>
                    </td>
                    <td className="px-2 border-2 border-white text-bold py-4 whitespace-nowrap">
                      <div className="text-xs   text-black">
                        {row.expRequired}
                      </div>
                    </td>
                    <td className="px-2 border-2 border-white text-bold py-4 whitespace-nowrap">
                      <div className="text-xs   text-black">
                        {row.aiScore}
                      </div>
                    </td>
                    <td className="px-2 border-2 border-white   py-4 w-1/3 whitespace-nowrap text-xs text-black">
                      <div className="relative whitespace-pre-wrap">
                        {row.cceNotes}
                        <button className=" right-0 top-0 absolute text-xs bg-blue-400 text-white p-1 rounded-lg ">
                          {" "}
                          video
                        </button>
                      </div>
                    </td>
                    <td className="px-2 border-2 border-white font-bold py-4 w-1/5 whitespace-nowrap text-xs">
                      {row.remarks=== 'Accepted'||row.remarks=== 'accepted' || row.remarks === "Meets requirements" ? (
                        <span className="text-green-600">{row.remarks}</span>
                      ) : (
                        <span className="text-red-500">{row.remarks}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="my-2 overflow-x-auto mx-1">
        <div className="mt-10 py-2 align-middle inline-block min-w-full px-2">
          <div className=" border-b border-gray-200 ">
            <div className="py-3 border-b w-full border-white text-center text-xs bg-gray-800 font-medium text-white ">
              Educational Qulification
            </div>
            <table className="table-auto w-full divide-y divide-gray-200">
              <thead className="bg-gray-500 ">
                <tr>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Qualification Demanded
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Qualification Claimed
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Attachment
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    HR Notes
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Remarks - AO/KC/L1
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-gray-200 divide-y divide-gray-200">
                {data?.educationalQualifications?.map((row, index) => (
                  <tr key={index}>
                    <td className="border-2 border-white px-2  py-4 ">
                      <div className="text-xs font-bold text-gray-900">
                        {row.qualificationDemanded}
                      </div>
                    </td>
                    <td className="px-2 border-2 border-white text-bold py-4 ">
                      <div className="text-xs font-bold text-black">
                        {row.qualificationClaimed}
                      </div>
                    </td>
                    <td className="px-2 border-2 border-white text-bold py-4 ">
                      <button className="text-xs  text-center bg-blue-400 text-white px-2 py-1 rounded-lg ">
                        {" "}
                        view
                      </button>
                    </td>
                    <td className="px-2 border-2 border-white  border-whitefont-bold py-4 text-xs text-black">
                      <div className="">
                      <strong>{row.hrNotes.hrName}</strong>
                        <p className="text-xs font-normal">
                          {row.hrNotes.notes}
                        </p>
                      </div>
                    </td>
                    <td className="px-2 border-2 border-white font-bold py-4   text-xs ">
                      {row.remarks==='Accepted' || row.remarks === 'accepted' || row.remarks === "Meets requirements" ? (
                        <span className="text-green-600">{row.remarks}</span>
                      ) : (
                        <span className="text-red-500">{row.remarks}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      <div className="my-2 overflow-x-auto mx-1">
        <div className="mt-10 py-2 align-middle inline-block min-w-full px-2">
          <div className=" border-b border-gray-200 ">
            <div className="py-3 border-b border-white text-center text-xs bg-gray-800 font-medium text-white ">
              Professional Qualifications/Certifications
            </div>
            <table className="table-auto w-full divide-y divide-gray-200">
              <thead className="bg-gray-500 ">
                <tr>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Qualification Demanded
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Qualification Claimed
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Attachment
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    HR Notes
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Remarks - AO/KC/L1
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-gray-200 divide-y divide-gray-200">
                {data.professionalQualifications.map((row, index) => (
                  <tr key={index}>
                    <td className="border-2 border-white px-2  py-4 ">
                      <div className="text-xs font-bold text-gray-900">
                        {row.qualificationDemanded}
                      </div>
                    </td>
                    <td className="px-2 border-2 border-white text-bold py-4 ">
                      <div className="text-xs font-bold text-black">
                        {row.qualificationClaimed}
                      </div>
                    </td>
                    <td className="px-2 border-2 border-white text-bold py-4 ">
                      <button className="text-xs  text-center bg-blue-400 text-white px-2 py-1 rounded-lg ">
                        {" "}
                        view
                      </button>
                    </td>
                    <td className="px-2 border-2 border-white  border-whitefont-bold py-4 text-xs text-black">
                      <div className="">
                      <strong>{row.hrNotes.hrName}</strong>
                        <p className="text-xs font-normal">
                          {row.hrNotes.notes}
                        </p>
                      </div>
                    </td>

                    <td className="px-2 border-2 border-white font-bold py-4   text-xs ">
                      {row.remarks=== 'Accepted'|| row.remarks === 'accepted' || row.remarks === "Meets requirements" ? (
                        <span className="text-green-600">{row.remarks}</span>
                      ) : (
                        <span className="text-red-500">{row.remarks}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      <div className="my-2 overflow-x-auto mx-1">
        <div className="mt-10 py-2 align-middle inline-block min-w-full px-2">
          <div className=" border-b border-gray-200 ">
            <div className="py-3 border-b border-white text-center text-xs bg-gray-800 font-medium text-white ">
              Professional Tools Experience
            </div>
            <table className="table-auto w-full divide-y divide-gray-200">
              <thead className="bg-gray-500 ">
                <tr>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    tools Demanded
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Experience Claimed
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Attachment
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    {" "}
                    Notes
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Remarks - AO/KC/L1
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-gray-200 divide-y divide-gray-200">
                {data.professionalToolsExperience.map((row, index) => (
                  <tr key={index}>
                    <td className="border-2 border-white px-2  py-4 ">
                      <div className="text-xs font-bold text-gray-900">
                        {row.toolsDemanded}
                      </div>
                    </td>
                    <td className="px-2 border-2 border-white text-bold py-4 ">
                      <div className="text-xs font-bold text-black">
                        {row.experienceClaimed}
                      </div>
                    </td>
                    <td className="px-2 border-2 border-white text-bold py-4 ">
                    <button className="text-xs  text-center bg-blue-400 text-white px-2 py-1 rounded-lg ">
                        view
                      </button>
                    </td>
                    <td className="px-2 border-2 border-white  border-whitefont-bold py-4 text-xs text-black">
                      <div className="">
                        <strong>{row.cceNotes.cceName}</strong>
                        <p className="text-xs font-normal">
                          {row.cceNotes.notes}
                        </p>
                      </div>
                    </td>

                    <td className="px-2 border-2 border-white font-bold py-4   text-xs ">
                      {row.remarks=== 'Accepted' || row.remarks==="accepted" || row.remarks === "Meets requirements" ? (
                        <span className="text-green-600">{row.remarks}</span>
                      ) : (
                        <span className="text-red-500">{row.remarks}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      <div className="my-2 overflow-x-auto mx-1">
        <div className="mt-10 text-xs py-2 align-middle inline-block min-w-full px-2">
          <table className="table-auto w-full">
            <tbody>
              <tr className="border border-black">
                <td className="border border-black w-1/4 px-2 py-2 font-bold">
                  Other paper work required, if any!
                </td>
                <td className="px-2 py-2">
                  <p className="text-xs font-normal">{data.otherPaperwork.hrName}</p>
                  <p className="text-xs font-normal">
                    {data.otherPaperwork.notes}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      <div className="my-2 overflow-x-auto mx-1">
        <div className="mt-10 text-xs py-2 align-middle inline-block min-w-full px-2">
          <h2 className="text-xl font-bold">Authors:</h2>
          <table className="table-auto w-full">
            <tbody>
              {data?.authors.map((author) => (
                <tr key={author.name} className="border border-black">
                  <td className="border border-black w-1/4 px-2 py-2 font-bold" >
                    {author.title?.replace(/\\n/g, "\n")
                    .replace(/\\t/g, "  ")}
                  </td>

                  <td className="px-2 py-2 whitespace-pre-wrap">{author.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-10 flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold"></h2>
        <div className="flex justify-center flex-col item-center">
          <div className="flex justify-center flex-col item-center  m-auto p-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-2 rounded-l-full rounded-r-full">
              Approve
            </button>
            <p className="mt-2 text-xs italic">
              Approve OR Assign CCM OR Print OR Save
            </p>
          </div>
          <div className="flex items-center flex-row gap-10">
            <button className="mr-2 text-blue-700 flex items-center flex-col">
              <FaDownload /> Download
            </button>
            <button className="mr-2 text-blue-700 flex items-center flex-col">
              <FaPrint /> Print
            </button>
          </div>
        </div>
      </div> */}

      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="mt-10 py-2 align-middle inline-block w-full px-2">
          <div className=" border-b border-gray-200 ">
            <div className="py-3 border-b border-white text-center text-xs bg-gray-800 font-medium text-white ">
              RIMT Information
            </div>
            <table className="table-auto w-full divide-y divide-gray-200">
              <thead className="bg-gray-500 ">
                <tr>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Medium Name
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Density
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Start date
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    End date
                  </th>
                  <th
                    scope="col"
                    className="border-2 border-white px-2 py-3 text-black text-left text-xs font-bold    tracking-wider"
                  >
                    Total CVs
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-gray-200 divide-y divide-gray-200">
                {data.rimtInformation.map((row, index) => (
                  <tr key={index}>
                    <td className="border-2 border-white px-2  py-4 ">
                      {row.mediumName}
                    </td>
                    <td className="px-2 border-2 border-white py-4 ">
                      {row.density}
                    </td>
                    <td className="px-2 border-2 border-white  py-4 ">
                      <div className="text-xs  ">{row.startDate}</div>
                    </td>
                    <td className="px-2 border-2 border-white  py-4 ">
                      {row.endDate}
                    </td>

                    <td className="px-2 border-2 border-white  py-4 ">
                      {row.totalCVs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillInfo;
