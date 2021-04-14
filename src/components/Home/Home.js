import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/PreetAnurag.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { BrowserRouter as Router, Route,Link, Switch,useParams } from "react-router-dom";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                 <span className="wave">Welcome to My Portfolio Website</span>
              </h1> */}

              <h1 className="heading-name">
                Hello there I'M
                <strong className="main-name"> PREET ANURAG</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
              </div>
            </Col>

            {/* <Col md={3} style={{ paddingBottom: 10 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col> */}
          </Row>
        </Container>
        
      </Container>
      {/* <Home2 /> */}
      <Link to="/about">
      
      <button className="btn btn-primary" style={{marginBottom:"80px"}}><i className="cil-external-link">&nbsp;</i>More About Me</button>
      </Link>
      
    </section>
  );
}

export default Home;
