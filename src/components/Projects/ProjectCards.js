import React from "react";
import Button from "react-bootstrap/Button";
import "./projectstyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <div className="card1 text-center shadow">
      <div className="overflow">
        <img src={props.imgPath} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.description}</p>
        <Button variant="primary" href={props.link} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </div>
    </div>
  );
}
export default ProjectCards;
