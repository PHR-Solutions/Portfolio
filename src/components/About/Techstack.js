import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiReact, DiHtml5, DiCss3, DiJavascript1, DiNodejs, DiMongodb } from "react-icons/di";

import { SiAngular, SiWordpress, SiFlutter, SiMysql, SiPostgresql, SiFirebase, SiAmazonaws, SiUnrealengine } from "react-icons/si";


function Techstack() {
  return (
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={4} md={2} className="tech-icons">
    <DiReact />
    <p>React</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiAngular />
    <p>Angular</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiWordpress />
    <p>WordPress</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiFlutter />
    <p>Flutter</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiNodejs />
    <p>Node.js</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiMysql />
    <p>MySQL</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiPostgresql />
    <p>PostgreSQL</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiHtml5 />
    <p>HTML5</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiCss3 />
    <p>CSS3</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiJavascript1 />
    <p>JavaScript</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiMongodb />
    <p>MongoDB</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiFirebase />
    <p>Firebase</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiAmazonaws />
    <p>AWS</p>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiUnrealengine />
    <p>Unreal Engine</p>
  </Col>
</Row>
  );
}

export default Techstack;
