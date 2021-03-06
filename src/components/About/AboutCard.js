import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/my_img.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route,Link, Switch,useParams } from "react-router-dom";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        
          <p style={{ textAlign: "center",marginLeft:"10px" }}>
            Hello there, I am <span className="purple">Preet Anurag </span>
            a 3rd year  <span className="purple"> B.Tech Student</span>
            <div className="container-fluid d-flex justify-content-center"> 
            <Col md={6} style={{ padding: 10 ,justifyContent:"center"}}>
          <img src={homeLogo} alt="home pic" className="img-fluid" />
          </Col>
          </div>
            <br />I am currently pursuing my B.Tech from KIIT University Bhubaneswar in Computer Engineering
            <br />
            <br />
            I am very much intrested in development works.
            <br/>
            <br/>
            Besides that I'm also a writer.

            <br/>
            <br/>
            You can read my poetries here
            <br/>
            <br/>
            <a href="https://www.yourquote.in/preet-anurag-3p1a/quotes" class="btn btn-primary" target="blank"><i className="cil-external-link">&nbsp;</i>Click to Read</a>
            <br/>
            <br/>
            To know more about me visit my resume.
            <br/>
            <br/>
            <Link to="/resume">
      <button className="btn btn-primary" ><i className="cil-external-link">&nbsp;</i>My Resume</button>
      </Link>

        
            
          </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
