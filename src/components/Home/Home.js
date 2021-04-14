import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "../Particle";
import Type from "./Type";
import { BrowserRouter as Router, Route,Link, Switch,useParams } from "react-router-dom";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">

             
              <h1 className="heading-name">
                Hello there I'M
                <strong className="main-name"> PREET ANURAG</strong>
              </h1>
              

              <div className="container-fluid d-flex justify-content-center" style={{ paddingTop: 50 }}>
                <Type />
              </div>
            </Col>

          </Row>
        </Container>
        
      </Container>
      <Link to="/about">
      
      <button className="btn btn-primary" style={{marginBottom:"80px"}}><i className="cil-external-link">&nbsp;</i>More About Me</button>
      </Link>
      
    </section>
  );
}

export default Home;
