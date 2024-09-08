import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServicesCards from "./ServicesCard";
import Particle from "../Particle";
import programmingLanguages from "../../Assets/Services/programminglanguages.jpg";
import mobileDesign from "../../Assets/Services/mobiledesign.png";
import socialMedia from "../../Assets/Services/social-media.png";
import SEO from "../../Assets/Services/SEO.jpg";
import graphicsDesigning from "../../Assets/Services/gdesign.jpg";
import websiteManagement from "../../Assets/Services/websiteManagement.webp";

function Services() {
  return (
    <Container fluid className="services-section">
      <Particle />
      <Container>
        <h1 className="services-heading">
          Our <strong className="purple">Services </strong>
        </h1>
        <p style={{ color: "white" }}>
          We provide a variety of services!.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="services-card">
            <ServicesCards
              imgPath={programmingLanguages}
              title="Technology Solutions"
              subtitle="Website & Web Application Development"
              description={
                <>
                  <ul>
                    <li>Custom Web Development</li>
                    <li>Application Development</li>
                    <li>Enterprise Portal Development</li>
                    <li>Ecommerce Solutions – B2C / B2B</li>
                    <li>Facebook Apps & Social Media</li>
                    <li>eCommerce Websites</li>
                  </ul>
                </>
              }
            />
          </Col>


          <Col md={4} className="services-card">
            <ServicesCards
              imgPath={mobileDesign}
              title="Mobile App Design"
              subtitle="(Android / iOS / Windows)"
              description={
                <>
                  <ul>
                    <li>Android / iOS / Windows</li>
                    <li>Mobile Apps Development</li>
                    <li>iOS/iPad/iPhone Apps Development</li>
                    <li>Android Apps Development</li>
                    <li>Mobile Websites Development</li>
                    <li>Android Tablet Apps</li>
                    <li>Mobile Websites</li>
                  </ul>
                </>
              }
            />
          </Col>


          <Col md={4} className="services-card">
            <ServicesCards
              imgPath={socialMedia}
              title="Social Media Marketing"
              subtitle="Facebook, Instagram, Twitter & Whatsapp"
              description={
                <>
                  <ul>
                    <li>Get social recognition for your products and services with our customized social promotion activities for your business.</li>
                    <li>We create, post, and connect with your customers.</li>
                    <li>We work on goals to achieve likes, shares, and comments for each post.</li>
                    <li>Having more followers adds to the brand value.</li>
                    <li>We aim to get maximum followers for your business on any given social website.</li>
                  </ul>
                </>
              }
            />
          </Col>


          <Col md={4} className="services-card">
            <ServicesCards
              imgPath={SEO}
              title="Search Engine Optimization"
              subtitle="(Rankings in Search Engines like Google.)"
              description={
                <>
                  <ul>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Pay Per Click Services (PPC)</li>
                    <li>Social Media Optimization (SMO)</li>
                    <li>Reputation & Brand Management</li>
                    <li>Internet Marketing</li>
                    <li>Lead Generation</li>
                  </ul>
                </>
              }
            />
          </Col>


          <Col md={4} className="services-card">
  <ServicesCards
    imgPath={graphicsDesigning}
    title="Graphics Design"
    subtitle="Creative Design Services"
    description={
      <>
        <ul>
          <li>Logo Design</li>
          <li>Brand Identity Creation</li>
          <li>Marketing Materials (Brochures, Flyers, etc.)</li>
          <li>Web and Mobile App Design</li>
          <li>Social Media Graphics</li>
          <li>Custom Illustrations</li>
        </ul>
      </>
    }
  />
</Col>


<Col md={4} className="services-card">
  <ServicesCards
    imgPath={websiteManagement} // Replace with your actual image path
    title="Website Management"
    subtitle="Comprehensive Website Solutions"
    description={
      <>
        <ul>
          <li>Website Maintenance and Updates</li>
          <li>Content Management</li>
          <li>Performance Optimization</li>
          <li>Security Monitoring and Updates</li>
          <li>Backup and Recovery Services</li>
          <li>Analytics and Reporting</li>
        </ul>
      </>
    }
  />
</Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Services;
