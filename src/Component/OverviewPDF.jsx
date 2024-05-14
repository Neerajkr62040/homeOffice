import React from "react";
import {
  Document,
  Page,
  View,
  Image,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import jsonData from "../newData.json";
import { Font } from "@react-pdf/renderer";
// import myCustomFont from "./font/Arimo-Regular.ttf";
import logo from "../assets/logonew.png";

// Font.register(
//   {
//     family: "MyCustomFont", // Name for referencing the font
//     src: myCustomFont,
//     fontStyle: "normal", // Optional if your font has styles
//     // Optional if your font has weights
//   },
//   {
//     family: "MyCustomFont", // Name for referencing the font
//     src: myCustomFont,
//     fontWeight: "bold", // Optional if your font has styles
//     // Optional if your font has weights
//   }
// );

const styles = StyleSheet.create({
  page: {
    // fontFamily: "MyCustomFont",
    flexDirection: "column",
    padding: 20,
    paddingBottom: "10px",
    // margin:10 ,
    // marginRight:"100px",
  },
  section: {
    margin: 2,
    padding: 5,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  table: {
    display: "table",
    width: "auto",
    fontWeight: "bold",
    borderStyle: "solid",

    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    fontSize: "8px",
    margin: "auto",
    flexDirection: "row",
  },
  tableColHeader: {
    fontSize: "8px",
    width: "30%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  meeting: {
    padding: 10,
    fontSize: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
  },
  meetingdetails: {
    padding: 8,
    fontSize: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tableCol: {
    fontSize: "8px",
    width: "70%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  rtable: {
    display: "table",
    width: "auto",
    textAlign: "justify",
  },
  rtableRow: {
    textAlign: "justify",
    fontSize: 12,
    margin: "auto",
    padding: 5,
    flexDirection: "row",
  },
  rtableColHeader: {
    textAlign: "justify",
    fontSize: 12,
    width: "30%",
  },
  rtableCol: {
    textAlign: "justify",
    fontSize: 10,
    width: "70%",
  },
  bold: {
    fontWeight: 800,
  },
  page3: {
    flexDirection: "column",
    padding: 20,
  },
  section3: {
    marginBottom: 10,
  },

  tableRow_page3: {
    fontSize: "8px",
    margin: "auto",
    flexDirection: "row",
    backgroundColor: "#E2E8F0",
  },
  additionalSkill: {},
  tableCol_page3: {
    padding: 2,
    fontSize: "8px",
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  greenText: {
    color: "green",
  },
  redText: {
    color: "red",
  },
});
const OverviewPDF = () => {
  const tssrReferenceParam = "TSSR-2024-04-25-003";
  // Find the object in the array that matches the tssrReferenceParam
  const data = jsonData.find(
    (item) => item.tssrReference === tssrReferenceParam
  );

  // If no matching object is found, display a message
  if (!data) {
    return <Text>No data found for the provided TSSR reference.</Text>;
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={styles.header}
        >
          <Text>
            <Text style={{ fontSize: "8px" }}>Downloaded Version of </Text>
            HomeOffice TSSR
          </Text>
          <Text style={{ fontSize: "10px" }}>Page:1</Text>
        </View>
        <View
          style={{
            padding: 30,
            height: "95%",
            boxSizing: "border-box",
            border: "2px solid black",
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              padding: 10,
              width: "75px",
              height: "60px",
            }}
            src={logo}
          />

          <View style={styles.section}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              TSSR Reference:{" "}
              <Text style={{ color: "blue" }}>{data.tssrReference}</Text>
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "bold",
                textDecoration: "underline",
                paddingBottom: "20px",
              }}
            >
              Overview
            </Text>
            <View style={styles.section}>
              <View style={[styles.table, { marginBottom: "20px" }]}>
                <View style={styles.tableRow}>
                  <Text style={styles.tableColHeader}>TSSR Reference</Text>
                  <Text style={styles.tableCol}>
                    {data.jobDetails.tssrReference}
                  </Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableColHeader}>
                    Overall, Talent match score
                  </Text>
                  <Text style={styles.tableCol}>
                    {data.jobDetails.talentMatchScore}
                  </Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableColHeader}>Business Name</Text>
                  <Text style={styles.tableCol}>
                    {data.jobDetails.businessName}
                  </Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableColHeader}>
                    Sponsorship License Number
                  </Text>
                  <Text style={styles.tableCol}>
                    {data.jobDetails.sponsorshipLicenseNumber}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <Text style={styles.tableColHeader}>Job Owner</Text>
                  <Text style={styles.tableCol}>
                    {data.jobDetails.jobOwner}
                  </Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableColHeader}>SoC Code</Text>
                  <Text style={styles.tableCol}>{data.jobDetails.socCode}</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableColHeader}>Job Title</Text>
                  <Text style={styles.tableCol}>
                    {data.jobDetails.jobTitle}
                  </Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableColHeader}>Job Category</Text>
                  <Text style={styles.tableCol}>
                    {data.jobDetails.jobCategory}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.section, { fontSize: "8px" }]}>
            <View style={styles.rtable}>
              <View style={styles.rtableRow}>
                <Text style={[styles.rtableColHeader, { fontSize: "8px" }]}>
                  Job Description
                </Text>
                <Text
                  style={[
                    styles.rtableCol,
                    { whiteSpace: "pre-wrap", fontSize: "8px" },
                  ]}
                >
                  {data.jobDetails.jobDescription
                    .replace(/\\n/g, "\n")
                    .replace(/\\t/g, "  ")}
                </Text>
              </View>
              {/* <View style={styles.rtableRow}>
              <Text style={styles.rtableColHeader}></Text>
              <Text style={styles.rtableCol}><Text style={styles.bold}>Responsibilities: </Text>{data.jobDetails.responsibilities}</Text>
            </View>
            <View style={styles.rtableRow}>
              <Text style={styles.rtableColHeader}></Text>
              <Text style={styles.rtableCol}><Text style={styles.bold}>Requirements: </Text>{data.jobDetails.requirements}</Text>
            </View> */}
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableColHeader}>Job Requirement ID</Text>
                <Text style={styles.tableCol}>
                  {data.jobDetails.jobRequirementId}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableColHeader}>Number of Positions</Text>
                <Text style={styles.tableCol}>
                  {data.jobDetails.numberOfPositions}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableColHeader}>Candidate Sourced by</Text>
                <Text style={styles.tableCol}>
                  {data.jobDetails.candidateSourcedBy}
                </Text>
              </View>
              {/* Add the rest of the fields in a similar manner */}
            </View>
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View
          style={styles.header}
        >
          <Text>
            <Text style={{ fontSize: "8px" }}>Downloaded Version of </Text>
            HomeOffice TSSR
          </Text>
          <Text style={{ fontSize: "10px" }}>Page:2</Text>
        </View>
        <View
          style={[
            styles.section,
            {
              padding: 30,
              height: "90%",
              boxSizing: "border-box",
              border: "2px solid black",
            },
          ]}
        >
          <Image
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              padding: 10,
              width: "75px",
              height: "60px",
            }}
            src={logo}
          />

          <Text
            style={{
              fontSize: "8px",
              fontWeight: "bold",
              textDecoration: "underline",
              paddingBottom: "10px",
            }}
          >
            Migrant Details
          </Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Candidate First Name</Text>
              <Text style={styles.tableCol}>
                {data.candidateInfo.candidateFirstName}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Candidate Middle Name</Text>
              <Text style={styles.tableCol}>
                {data.candidateInfo.candidateMiddleName}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Candidate Family Name</Text>
              <Text style={styles.tableCol}>
                {data.candidateInfo.candidateFamilyName}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Nationality</Text>
              <Text style={styles.tableCol}>
                {data.candidateInfo.nationality}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Passport Number</Text>
              <Text style={styles.tableCol}>
                {data.candidateInfo.passportNumber}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>
                Passport Issuing Authority
              </Text>
              <Text style={styles.tableCol}>
                {data.candidateInfo.passportIssuingAuthority}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Passport Issuing Date</Text>
              <Text style={styles.tableCol}>
                {data.candidateInfo.passportIssuingDate}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Passport Expiry Date</Text>
              <Text style={styles.tableCol}>
                {data.candidateInfo.passportExpiryDate}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Current Address</Text>
              <Text style={styles.tableCol}>
                {data.candidateInfo.currentAddress}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Date of Birth</Text>
              <Text style={styles.tableCol}>
                {data.candidateInfo.dateOfBirth}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Sex</Text>
              <Text style={styles.tableCol}>{data.candidateInfo.sex}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Publish Salary</Text>
              <Text style={styles.tableCol}>
                {data.jobDetails.publishSalary}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Salary Offered</Text>
              <Text style={styles.tableCol}>
                {data.jobDetails.salaryOffered}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Agreed Start Date</Text>
              <Text style={styles.tableCol}>
                {data.jobDetails.agreedStartDate}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Work Pattern Agreed</Text>
              <Text style={styles.tableCol}>
                {data.jobDetails.workPatternAgreed}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Work Location Agreed</Text>
              <Text style={styles.tableCol}>
                {data.jobDetails.workLocationAgreed}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>
                Total Working Hours Per Week
              </Text>
              <Text style={styles.tableCol}>
                {data.jobDetails.totalWorkingHoursPerWeek}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>
                Entry Clearance/Visa related notes (By HR)
              </Text>
              <Text style={styles.tableCol}>
                {data.jobDetails.entryClearanceVisaRelatedNotes}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>
                Other Notes (if any by HR)
              </Text>
              <Text style={styles.tableCol}>
                {data.jobDetails.otherNotesByHR}
              </Text>
            </View>
            {/* Add the rest of the fields in a similar manner */}
          </View>
        </View>
      </Page>
      <Page
        size="A4"
        style={[
          styles.page3,
          {
            padding: 30,
            height: "100%",
            boxSizing: "border-box",
            border: "2px solid black",
          },
        ]}
      >
        <View
          style={styles.header}
        >
          <Text>
            <Text style={{ fontSize: "8px" }}>Downloaded Version of </Text>
            HomeOffice TSSR
          </Text>
          <Text style={{ fontSize: "10px" }}>Page:2</Text>
        </View>
        <View style={[styles.section3]}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              textDecoration: "underline",
              paddingBottom: "10px",
            }}
          >
            Skill Match Information
          </Text>
          <Text
            style={{
              textAlign: "center",
              padding: 5,
              marginBottom: 2,
              fontSize: 12,
              backgroundColor: "#525659",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Mandate Skills
          </Text>
          <>
            {data.mandateSkills.map((row, index) => (
              <View
                style={[
                  styles.section,
                  {
                    marginBottom: "30px",
                    padding: 10,
                    height: "100%",
                    boxSizing: "border-box",
                    border: "1px solid black",
                  },
                ]}
              >
                <View style={[styles.table, { marginBottom: "15px" }]}>
                  <View style={[styles.tableRow_page3, { fontSize: "12px" }]}>
                    <View style={[styles.tableCol_page3, { fontSize: "11px" }]}>
                      <Text>Subject/Expertise</Text>
                    </View>
                    <View style={[styles.tableCol_page3, { fontSize: "11px" }]}>
                      <Text>Exp required/Claimed</Text>
                    </View>
                    <View style={[styles.tableCol_page3, { fontSize: "11px" }]}>
                      <Text>AI Score</Text>
                    </View>
                    <View style={[styles.tableCol_page3, { fontSize: "11px" }]}>
                      <Text>CCE Notes</Text>
                    </View>
                    <View style={[styles.tableCol_page3, { fontSize: "11px" }]}>
                      <Text>Remarks - AO/KC/L</Text>
                    </View>
                  </View>
                  <View key={row.subject} style={styles.tableRow_page3}>
                    <View
                      style={[
                        styles.tableCol_page3,
                        { fontSize: "12px", color: "red", fontWeight: "800" },
                      ]}
                    >
                      <Text>{row.subject}</Text>
                    </View>
                    <View style={[styles.tableCol_page3, { fontSize: "10px" }]}>
                      <Text>{row.expRequired}</Text>
                    </View>
                    <View style={[styles.tableCol_page3, { fontSize: "10px" }]}>
                      <Text>{row.aiScore}</Text>
                    </View>
                    <View style={[styles.tableCol_page3, { fontSize: "10px" }]}>
                      <Text>{row.cceNotes}</Text>
                    </View>
                    <View style={[styles.tableCol_page3, { fontSize: "10px" }]}>
                      <Text
                        style={
                          row.remarks === "Accepted" ||
                          row.remarks === "accepted"
                            ? styles.greenText
                            : styles.redText
                        }
                      >
                        {row.remarks}
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View
                    key={row.subject}
                    style={[
                      styles.tableRow_page3,
                      {
                        marginTop: "5px",
                        margin: 2,
                        backgroundColor: "#e5e5e5",
                        border: "none",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.tableCol_page3,
                        {
                          width: "75%",
                          fontSize: "10px",
                          fontWeight: "extrabold",
                        },
                      ]}
                    >
                      <Text>{row.subject} AI Question</Text>
                    </View>
                    <View
                      style={[
                        styles.tableCol_page3,
                        { width: "25%", fontSize: "10px" },
                      ]}
                    >
                      <Text>Result</Text>
                    </View>
                  </View>
                  <View style={{ marginBottom: "20px" }}>
                    {row.questions.map((row, index) => (
                      <>
                        <View
                          key={row.subject}
                          style={[
                            styles.tableRow_page3,
                            {
                              margin: "10px",
                              backgroundColor: "#fff",
                              border: "none",
                              marginBottom: "10px",
                            },
                          ]}
                        >
                          <View
                            style={[
                              styles.tableCol_page3,
                              {
                                width: "80%",
                                border: "none",
                                fontSize: "10px",
                              },
                            ]}
                          >
                            <Text>
                              {index + 1}. {row.questionText}
                            </Text>
                            <View
                              style={{
                                width: "100%",
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                                fontSize: "8px",
                              }}
                            >
                              {row.options.map((option, index) => (
                                <View>
                                  <Text key={index}>
                                    {" "}
                                    {option === row.chosenOption &&
                                    row.chosenOption === row.correctOption ? (
                                      <Text
                                        key={index}
                                        style={{ color: "green" }}
                                      >
                                        {option}
                                      </Text>
                                    ) : option === row.chosenOption &&
                                      row.chosenOption != row.correctOption ? (
                                      <Text
                                        key={index}
                                        style={{ color: "red" }}
                                      >
                                        {option}
                                      </Text>
                                    ) : (
                                      <Text key={index}>{option}</Text>
                                    )}
                                  </Text>
                                  {/* <Text key={index}> {option}</Text> */}
                                </View>
                              ))}
                            </View>
                          </View>
                          <View
                            style={[
                              styles.tableCol_page3,
                              {
                                width: "20%",
                                fontSize: "10px",
                                border: "none",
                                paddingLeft: "10px",
                              },
                            ]}
                          >
                            {row.chosenOption === row.correctOption ? (
                              <Text style={{ color: "green" }}>Correct </Text>
                            ) : (
                              <Text style={{ color: "red" }}>Incorrect</Text>
                            )}
                          </View>
                        </View>
                      </>
                    ))}
                  </View>
                </View>
                <View>
                  <View
                    key={row.subject}
                    style={[
                      styles.tableRow_page3,
                      {
                        marginTop: "5px",
                        margin: 2,
                        backgroundColor: "#f4f5f8",
                        border: "none",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.tableCol_page3,
                        {
                          width: "75%",
                          fontSize: "10px",
                          fontWeight: "extrabold",
                          backgroundColor: "#f4f5f8",
                          border: "none",
                        },
                      ]}
                    >
                      <Text>{row.subject} Theory/Codding Question</Text>
                    </View>
                    <View
                      style={[
                        styles.tableCol_page3,
                        {
                          width: "25%",
                          fontSize: "10px",
                          backgroundColor: "#f4f5f8",
                          border: "none",
                        },
                      ]}
                    >
                      <Text>Result</Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={[
                        styles.tableRow_page3,
                        {
                          margin: 2,
                          // backgroundColor: "#fff",
                          backgroundColor: "#f4f5f8",
                          border: "none",
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.tableCol_page3,
                          { width: "75%", border: "none", fontSize: "10px" },
                        ]}
                      >
                        <Text
                          style={{
                            // fontFamily: "MyCustomFont",
                            fontWeight: "bold",
                          }}
                        >
                          {row.theoryQuestion.questionText}
                        </Text>

                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            fontSize: "10px",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "Courier",
                              fontSize: 10,
                              lineHeight: 1.2,
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            {row.theoryQuestion.answer
                              .replace(/\\n/g, "\n")
                              .replace(/\\t/g, "  ")}{" "}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={[
                          styles.tableCol_page3,
                          {
                            width: "25%",
                            fontSize: "10px",
                            border: "none",
                            paddingLeft: "10px",
                          },
                        ]}
                      >
                        {row.theoryQuestion.remarks === "correct" ||
                        row.theoryQuestion.remarks === "Correct" ? (
                          <Text style={{ color: "green" }}>Correct </Text>
                        ) : (
                          <Text style={{ color: "red" }}>Incorrect</Text>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </>
        </View>
      </Page>
      <Page size="A4" style={styles.page3}>
      <View
          style={styles.header}
        >
          <Text>
            <Text style={{ fontSize: "8px" }}>Downloaded Version of </Text>
            HomeOffice TSSR
          </Text>
          <Text style={{ fontSize: "10px" }}>Page:4</Text>
        </View>
        <View
          style={[
            styles.section,
            {
              paddingTop: "50px",
              padding: 30,
              height: "95%",
              boxSizing: "border-box",
              border: "2px solid black",
            },
          ]}
        >
          <Image
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              padding: 10,
              width: "75px",
              height: "60px",
            }}
            src={logo}
          />
          <View style={styles.section3}>
            <Text
              style={{
                textAlign: "center",
                padding: 5,
                marginBottom: 2,
                fontSize: "8px",
                backgroundColor: "#525659",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Educational Qulification
            </Text>
            <View style={styles.table}>
              {/* Table Header */}
              <View style={styles.tableRow_page3}>
                <View style={styles.tableCol_page3}>
                  <Text>Qualification Demanded</Text>
                </View>
                <View style={styles.tableCol_page3}>
                  <Text>Qualification Claimed</Text>
                </View>
                <View
                  style={[
                    styles.tableCol_page3,
                    { width: "10%", fontSize: "8px" },
                  ]}
                >
                  <Text>Attachment</Text>
                </View>
                <View style={[styles.tableCol_page3, { width: "30%" }]}>
                  <Text>HR Notes</Text>
                </View>
                <View style={styles.tableCol_page3}>
                  <Text>Remarks - AO/KC/L</Text>
                </View>
              </View>
              {/* Render the rows dynamically based on jsondata.mandateSkills */}
              {data.educationalQualifications.map((row, index) => (
                <View key={index} style={styles.tableRow_page3}>
                  <View style={styles.tableCol_page3}>
                    <Text>{row.qualificationDemanded}</Text>
                  </View>
                  <View style={styles.tableCol_page3}>
                    <Text>{row.qualificationClaimed}</Text>
                  </View>
                  <View
                    style={[
                      styles.tableCol_page3,
                      { width: "10%", fontSize: "8px" },
                    ]}
                  >
                    <Text>View </Text>
                  </View>
                  <View style={[styles.tableCol_page3, { width: "30%" }]}>
                    <Text style={{ fontSize: "8px" }}>
                      {row.hrNotes.hrName}
                    </Text>
                    <Text style={{ fontSize: "7px" }}>{row.hrNotes.notes}</Text>
                  </View>
                  <View style={styles.tableCol_page3}>
                    <Text
                      style={
                        row.remarks === "Accepted" || row.remarks === "accepted"
                          ? styles.greenText
                          : styles.redText
                      }
                    >
                      {row.remarks}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.section3}>
            <Text
              style={{
                textAlign: "center",
                padding: 5,
                marginBottom: 2,
                fontSize: "8px",
                backgroundColor: "#525659",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Professional Qualifications/Certifications
            </Text>
            {/* Mandate Skills Table */}
            <View style={styles.table}>
              {/* Table Header */}
              <View style={styles.tableRow_page3}>
                <View style={styles.tableCol_page3}>
                  <Text>Qualification Demanded</Text>
                </View>
                <View style={styles.tableCol_page3}>
                  <Text>Qualification Claimed</Text>
                </View>
                <View
                  style={[
                    styles.tableCol_page3,
                    { width: "10%", fontSize: "8px" },
                  ]}
                >
                  <Text>Attachment</Text>
                </View>
                <View style={[styles.tableCol_page3, { width: "30%" }]}>
                  <Text>HR Notes</Text>
                </View>
                <View style={styles.tableCol_page3}>
                  <Text>Remarks - AO/KC/L</Text>
                </View>
              </View>
              {/* Render the rows dynamically based on jsondata.mandateSkills */}
              {data.professionalQualifications.map((row, index) => (
                <View
                  key={index}
                  style={[styles.tableRow_page3, { fontSize: "6px" }]}
                >
                  <View style={styles.tableCol_page3}>
                    <Text>{row.qualificationDemanded}</Text>
                  </View>
                  <View style={styles.tableCol_page3}>
                    <Text>{row.qualificationClaimed}</Text>
                  </View>
                  <View
                    style={[
                      styles.tableCol_page3,
                      { width: "10%", fontSize: "8px" },
                    ]}
                  >
                    <Text>View </Text>
                  </View>
                  <View style={[styles.tableCol_page3, { width: "30%" }]}>
                    <Text style={{ fontSize: "8px" }}>
                      {row.hrNotes.hrName}
                    </Text>
                    <Text style={{ fontSize: "7px" }}>{row.hrNotes.notes}</Text>
                  </View>
                  <View style={styles.tableCol_page3}>
                    <Text
                      style={
                        row.remarks === "Accepted" || row.remarks === "accepted"
                          ? styles.greenText
                          : styles.redText
                      }
                    >
                      {row.remarks}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.section3}>
            <Text
              style={{
                textAlign: "center",
                padding: 5,
                marginBottom: 2,
                fontSize: "8px",
                backgroundColor: "#525659",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Professional Tools Experience
            </Text>
            {/* Mandate Skills Table */}
            <View style={styles.table}>
              {/* Table Header */}
              <View style={styles.tableRow_page3}>
                <View style={styles.tableCol_page3}>
                  <Text>Tools Demanded</Text>
                </View>
                <View style={styles.tableCol_page3}>
                  <Text>Experience Claimed</Text>
                </View>
                <View
                  style={[
                    styles.tableCol_page3,
                    { width: "10%", fontSize: "6px" },
                  ]}
                >
                  <Text>AI Score</Text>
                </View>
                <View style={[styles.tableCol_page3, { width: "30%" }]}>
                  <Text>Notes</Text>
                </View>
                <View style={styles.tableCol_page3}>
                  <Text>Remarks - AO/KC/L</Text>
                </View>
              </View>
              {/* Render the rows dynamically based on jsondata.mandateSkills */}
              {data.professionalToolsExperience.map((row, index) => (
                <View
                  key={index}
                  style={[styles.tableRow_page3, { fontSize: "6px" }]}
                >
                  <View style={styles.tableCol_page3}>
                    <Text>{row.toolsDemanded}</Text>
                  </View>
                  <View style={styles.tableCol_page3}>
                    <Text>{row.experienceClaimed}</Text>
                  </View>
                  <View
                    style={[
                      styles.tableCol_page3,
                      { width: "10%", fontSize: "8px" },
                    ]}
                  >
                    <Text>{row.aiScore}</Text>
                  </View>
                  <View style={[styles.tableCol_page3, { width: "30%" }]}>
                    <Text style={{ fontSize: "8px" }}>
                      {row.cceNotes.cceName}
                    </Text>
                    <Text style={{ fontSize: "7px" }}>
                      {row.cceNotes.notes}
                    </Text>
                  </View>
                  <View style={styles.tableCol_page3}>
                    <Text
                      style={
                        row.remarks === "Accepted" || row.remarks === "accepted"
                          ? styles.greenText
                          : styles.redText
                      }
                    >
                      {row.remarks}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>
                {" "}
                Other paper work required, if any!
              </Text>
              <View style={styles.tableCol}>
                <Text style={{ fontStyle: "italic", fontSize: "8px" }}>
                  {data.otherPaperwork.hrName}
                </Text>
                <Text style={{ fontStyle: "italic", fontSize: "7px" }}>
                  {data.otherPaperwork.notes}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.section, { marginTop: "10px" }]}>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", paddingBottom: "7px" }}
            >
              Meeting History
            </Text>
            <View>
              <View style={styles.meeting}>
                <Text>Meeting Name </Text>
                <Text>Held on </Text>
                <Text>Organised by</Text>
              </View>
              <View>
                {data.meetingHistory.map((row, index) => (
                  <View key={index} style={styles.meetingdetails}>
                    <View>
                      <Text>{row.meeting_name}</Text>
                    </View>
                    <View>
                      <Text>{row.date}</Text>
                    </View>
                    <View>
                      <Text>{row.organizer} </Text>
                    </View>
                  </View>
                ))}
              </View>

              {/* Add the rest of the fields in a similar manner */}
            </View>
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
      <View
          style={styles.header}
        >
          <Text>
            <Text style={{ fontSize: "8px" }}>Downloaded Version of </Text>
            HomeOffice TSSR
          </Text>
          <Text style={{ fontSize: "10px" }}>Page:5</Text>
        </View>
        <View
          style={[
            styles.section,
            {
              padding: 30,
              height: "100%",
              boxSizing: "border-box",
              border: "2px solid black",
            },
          ]}
        >
          <Image
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              padding: 10,
              width: "75px",
              height: "60px",
            }}
            src={logo}
          />
          <View style={styles.section}>
            <Text
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              Authors:
            </Text>
            <View style={styles.table}>
              {data.authors.map((row, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text style={styles.tableColHeader}>{row.title}</Text>
                  <Text style={styles.tableCol}>{row.name}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.section}>
            <Text
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              Additional Skill for Candidate
            </Text>
            <View style={[styles.table, { border: "none" }]}>
              {data.additionalSkill.map((row, index) => (
                <View key={index} style={[styles.tableRow, { margin: "10px" }]}>
                  <Text
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      width: "30%",
                    }}
                  >
                    {row.skill}
                  </Text>
                  <Text
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      width: "70%",
                    }}
                  >
                    {row.exp}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default OverviewPDF;
