import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            lg={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px",fontFamily:"Georgia, 'Times New Roman', Times, serif" }}>
              Know <strong className="purple">Me</strong> Better
            </h1>
            
          </Col>
          <Aboutcard />
          {/* <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col> */}
        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Skillsets </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-java-plain" />
          <Techstack iconName="devicon-materialui-plain " />
          <Techstack iconName="devicon-android-plain" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-html5-plain" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Techstack iconName="devicon-android-plain" />
          <Techstack iconName="devicon-visualstudio-plain" />
          <Techstack iconName="devicon-jupyter-plain" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="devicon-heroku-plain" />
          <Techstack iconName="devicon-github-original" />
        </Row>
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
