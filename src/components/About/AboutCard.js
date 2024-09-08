import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
  Hello everyone! We are <span className="purple">PHR Solutions</span>, based in <span className="purple">Karnataka, India</span>.
  <br />
  Our team is made up of talented developers, designers, and SEO experts, dedicated to bringing creativity to everything we do.
  <br />
  As a dynamic software development group, we pride ourselves on our innovative thinking and technical expertise.
  <br />
  <br />
  Here are the services we offer:
</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Website Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Marketing and SEO
            </li>
            <li className="about-activity">
              <ImPointRight /> App Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Logo Creation
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "YOLO!"{" "}
          </p>
          <footer className="blockquote-footer">PHR Solutions</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
