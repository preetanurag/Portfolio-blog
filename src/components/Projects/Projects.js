import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import axios from "axios";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChangingProgressProvider from "../Blog/ChangingProgressProvider";
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';

function Projects() {

  const [Project, setProject] = React.useState([]);
  const [t,sett]=React.useState(false)

  const get = () =>{
    axios.get("https://preet-portfolio-api.herokuapp.com/projects/")
    .then(response =>{
         console.log(response.data);
        setProject(response.data)
        sett(true)
    })

} 
React.useEffect(() => {
    get(); 
},[]) 


  return (
    <Container fluid className="project-section">
      <Particle/>
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Visit my some of the projects
        </p>
        {t ?
        
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
       :(
        <div style={{ width: 150, height: 150, padding:20, marginLeft :"480px"}}>
        <ChangingProgressProvider values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}>
    {percentage => (
      <CircularProgressbar value={percentage}  styles={buildStyles({
        pathColor: "rgb(23, 23, 23)",
        trailColor: "orange"
      })}/>
    )}
  </ChangingProgressProvider>
        </div>
       )

    }
      </Container>
    </Container>
  );
}

export default Projects;
