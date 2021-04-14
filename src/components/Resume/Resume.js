import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Preet_Anurag_Resume.pdf";

function Resume() {
  // const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  // const [spojRank, upadteSpojRank] = useState(0);
  // const [hackerrank, upadteHackerank] = useState(0);
  // const [sem, upadateSem] = useState(0);
  // const [cgpa, upadteCgpa] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(uri)
  //     .then((res) => {
  //       upadteSpojRank(res.data.message[0].spojRank);
  //       upadteHackerank(res.data.message[1].hackerrank);
  //       upadteCgpa(res.data.message[2].cgpa);
  //       upadateSem(res.data.message[3].sem);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Container fluid className="resume-section">
      <Particle/>
      <Container>
        
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px",fontFamily:"Georgia, 'Times New Roman', Times, serif" }}>
               My <strong className="purple">Resume</strong> 
            </h1>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Android Developer Intern at IOT Lab KIIT"
              date="August 2020 - October 2020"
              content={[
                "Worked with teams of 3 members and developed a document scanning app BitScan.",
              ]}
            />

             <Resumecontent
              title="Summer Intern at HighRadius"
              date="Janurary 2021 - March 2021"
              content={[
                "Developed a full stack Sales Order Management System application.",
                "Used Java and React Js for this project"
               
              ]}
            />

            <h3 className="resume-title">Hobbies and Intrests</h3>
            <Resumecontent
              title=""
              content={[
                "Loves Writing Hindi Poetry.",
              ]}
            />
            <h3 className="resume-title">Volunteering</h3>
            <Resumecontent
              title="Member"
              content={[
                "IOT Lab KIIT"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech | KIIT University Bhubaneswar"
              date="2018 - Present"
              content={[`CGPA: 9.35 (Till 5th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD | S.D. DAV Public School Jamtara"
              date="2016 - 2018"
              content={["Precentage: 87%"]}
            />
            <Resumecontent
              title="10TH BOARD | S.D. DAV Public School Jamtara "
              date="2016"
              content={["CGPA: 10"]}
            />
            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Student of the Year at School for session 2017-18",
                "Represented my district at State Level Quiz Competition organized by ECI"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
