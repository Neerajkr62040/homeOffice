import React from 'react';

function MigrantDetails({ data }) {

  if (!data) {
    return <div>No data found for the provided TSSR reference.</div>;
  }

  return (
    <div className="p-6 text-sm">
      <table className="table-auto w-full">
        <tbody>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Candidate First Name</td>
            <td className="px-4 py-2">{data.candidateInfo.candidateFirstName}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Candidate Middle Name</td>
            <td className="px-4 py-2">{data.candidateInfo.candidateMiddleName}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Candidate Family Name</td>
            <td className="px-4 py-2">{data.candidateInfo.candidateFamilyName}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Nationality</td>
            <td className="px-4 py-2">{data.candidateInfo.nationality}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Passport Number</td>
            <td className="px-4 py-2">{data.candidateInfo.passportNumber}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Passport Issuing Authority</td>
            <td className="px-4 py-2">{data.candidateInfo.passportIssuingAuthority}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Passport Issuing Date</td>
            <td className="px-4 py-2">{data.candidateInfo.passportIssuingDate}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Passport Expiry Date</td>
            <td className="px-4 py-2">{data.candidateInfo.passportExpiryDate}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Current Address</td>
            <td className="px-4 py-2">{data.candidateInfo.currentAddress}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Date of Birth</td>
            <td className="px-4 py-2">{data.candidateInfo.dateOfBirth}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Sex</td>
            <td className="px-4 py-2">{data.candidateInfo.sex}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Publish Salary</td>
            <td className="px-4 py-2">{data.jobDetails.publishedSalary}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Salary Offered</td>
            <td className="px-4 py-2">{data.jobDetails.salaryOffered}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Agreed Start Date</td>
            <td className="px-4 py-2">{data.jobDetails.agreedStartDate}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Work Pattern Agreed</td>
            <td className="px-4 py-2">{data.jobDetails.workPatternAgreed}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Work Location Agreed</td>
            <td className="px-4 py-2">{data.jobDetails.workLocationAgreed}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Total Working Hours Per Week</td>
            <td className="px-4 py-2">{data.jobDetails.totalWorkingHoursPerWeek}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Entry Clearance/Visa related notes (By HR)</td>
            <td className="px-4 py-2">{data.jobDetails.entryClearanceVisaRelatedNotes}</td>
          </tr>
          <tr className="border border-black">
            <td className="border border-black w-1/3 px-4 py-2 font-bold">Other Notes (if any by HR)</td>
            <td className="px-4 py-2">{data.jobDetails.otherNotesByHR}</td>
          </tr>
          {/* Add the rest of the fields in a similar manner */}
        </tbody>
      </table>
    </div>
  );
}

export default MigrantDetails;
