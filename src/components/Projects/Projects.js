import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import axios from "axios";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import eeg from "../../Assets/Projects/eeg.gif";
import suicide from "../../Assets/Projects/suicide.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {

  const [Project, setProject] = React.useState([]);

  const get = () =>{
    axios.get("https://preet-portfolio-api.herokuapp.com/projects/")
    .then(response =>{
         console.log(response.data);
        setProject(response.data)
    })

} 
React.useEffect(() => {
    get(); 
},[]) 


  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          {Project.map((item, index) =>{
                          
                          return(
            <ProjectCard
              imgPath={item.cover.url}
              isBlog={false}
              title={item.title}
              description={item.description}
              link={item.link}
            />
             )
                          })}
          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}

export default Projects;
