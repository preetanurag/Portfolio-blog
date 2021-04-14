import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
import { BrowserRouter as Router, Route,Link, Switch,useParams } from "react-router-dom";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <Link to="/about">
      <button className="btn btn-primary" style={{marginTop:"80px"}}>More About Me</button>
      </Link>
      </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
