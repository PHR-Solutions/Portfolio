import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import idealTechElevators from "../../Assets/Projects/IdealTechElevators.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects we've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idealTechElevators}
              isBlog={false}
              title="Ideal Tech Elevators"
              description="Website for Ideal Tech Elevators - Banglore"
              demoLink="https://idealtechelevators.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
