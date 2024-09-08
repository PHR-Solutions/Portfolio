import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import comingSoonImage from "../Assets/comingSoon.webp";

function ComingSoon() {
  return (
    <Container fluid className="coming-soon-section">
      <Particle />
      <Container>
        <h1 className="coming-soon-heading ">
          <strong className="purple">Coming Soon</strong>
        </h1>
        <p style={{ color: "white" }}>
          We're working hard to bring something exciting your way. Stay tuned!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="coming-soon-card">
            <img
              src={comingSoonImage}
              alt="Coming Soon"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ComingSoon;
