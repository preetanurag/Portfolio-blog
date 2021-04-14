import React from "react";
import { Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Techstack(prop) {
  return (
    <div>
      <Col xs={1} md={1} className="tech-icons">
        <i className={`${prop.iconName} tech-icon-images`}></i>
      </Col>
    </div>
  );
}

export default Techstack;
