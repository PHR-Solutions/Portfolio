import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, we are <span className="purple">PHR Solutions</span> from <span className="purple">Karnataka, India</span>.<br />
            We are a creative team of developers, designers and SEO's..<br />
            Additionally, we are a software developer group full of creative minds<br />
            <br />
            Services that we provide:
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
