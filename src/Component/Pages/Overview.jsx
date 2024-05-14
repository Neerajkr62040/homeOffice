import React from 'react';

const Overview = ({data}) => {

  if (!data) {
    return <div>No data found for the provided TSSR reference.</div>;
  }
  return (
    <div className="p-6 text-sm">
      <div className="p-6">
      <table className="table-auto w-full">
        <tbody>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">TSSR Reference</td>
            <td className="px-4 py-2">{data.jobDetails.tssrReference}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Overall, Talent match score</td>
            <td className="px-4 py-2">{data.jobDetails.talentMatchScore}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Business Name</td>
            <td className="px-4 py-2">{data.jobDetails.businessName}</td>
          </tr>
          <tr className="border border-black">
       <td className="border border-black w-1/3 px-4 py-2 font-bold"> Sponsorship License Number:</td>
         <td className="px-4 py-2"> {data.jobDetails.sponsorshipLicenseNumber}  </td>
         </tr>
          <tr className="border border-black">
        <td className="border border-black w-1/3 px-4 py-2 font-bold">Job Owner</td>
          <td className="px-4 py-2">{data.jobDetails.jobOwner}</td>
          </tr>
          <tr className="border border-black">
        <td className="border border-black w-1/3 px-4 py-2 font-bold">SoC Code</td>
         <td className="px-4 py-2"> {data.jobDetails.socCode}</td>
         </tr>
          <tr className="border border-black">
        <td className="border border-black w-1/3 px-4 py-2 font-bold">Job Title</td>
         <td className="px-4 py-2"> {data.jobDetails.jobTitle}</td>
         </tr>
          <tr className="border border-black">
        <td className="border border-black w-1/3 px-4 py-2 font-bold">Job Category</td>
        <td className="px-4 py-2">{data.jobDetails.jobCategory}</td>
         </tr>
          {/* Add the rest of the fields in a similar manner */}
        </tbody>
      </table>
    </div>
        <div className="mb-4">
        <div className="p-6">
      <div className="mb-4">
      <table className="table-auto w-full">
        <tbody>
        <tr>
            <td className=" w-1/5 px-4 text-sm  text-black font-bold align-text-top">Job Description:</td>
            <td className="px-4 py-2 text-gray-500 text-xs text-justify">{data.jobDetails.jobDescription}</td>
          </tr>
        <tr>
            <td className=" w-1/5 px-4 text-sm  font-bold"></td>
            <td className="px-4 py-2 text-gray-500 text-xs">
                <h2 className="mt-4 text-sm text-black font-bold">Responsibilities:</h2>
            <p className=" text-gray-500 text-xs text-justify">
          {data.jobDetails.responsibilities}</p></td>
          </tr>
        {/* <tr>
            <td className=" w-1/5 px-4 text-sm  font-bold"></td>
            <td className="px-4 py-2 text-gray-500 text-xs">
                <h2 className="mt-4 text-sm text-black font-bold">Requirements:</h2>
            <p className=" text-gray-500 text-xs text-justify">
            {data.jobDetails.requirements}</p></td>
          </tr> */}
        </tbody>
        </table>
        


      </div>
    </div>
      </div>
      <div className="mb-4">
        <table className="table-auto w-full">
         
          <tbody>
          <tr className="border border-black">
        <td className="border border-black w-1/3 px-4 py-2 font-bold">Job Requirement ID</td>
          <td className="px-4 py-2">{data.jobDetails.jobRequirementId}</td>
          </tr>
          <tr className="border border-black">
        <td className="border border-black w-1/3 px-4 py-2 font-bold">Number of Positions</td>
          <td className="px-4 py-2">{data.jobDetails.numberOfPositions}</td>
          </tr>
          <tr className="border border-black">
        <td className="border border-black w-1/3 px-4 py-2 font-bold">Candidate Sourced by</td>
          <td className="px-4 py-2">{data.jobDetails.candidateSourcedBy}</td>
          </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Overview;
