import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiUbuntu } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiUbuntu,
  SiDocker,
  SiGithub,
  SiJira,
  SiFigma,
  SiTrello,
  SiHeroku,
  SiNetlify,
  SiGitlab,
  SiNotion,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={4} md={2} className="tech-icons">
    <SiUbuntu />
    <p>Ubuntu</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiVisualstudiocode />
    <p>VS Code</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiPostman />
    <p>Postman</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiSlack />
    <p>Slack</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiVercel />
    <p>Vercel</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiDocker />
    <p>Docker</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiGithub />
    <p>GitHub</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiJira />
    <p>Jira</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiFigma />
    <p>Figma</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiTrello />
    <p>Trello</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiHeroku />
    <p>Heroku</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiNetlify />
    <p>Netlify</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiGitlab />
    <p>GitLab</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiNotion />
    <p>Notion</p>
  </Col>
</Row>

  );
}

export default Toolstack;
