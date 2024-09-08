import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import FloatingAlert from "./FloatingAlert";
import { AiOutlineWhatsApp } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
const SITE_KEY = "6LeQ7TkqAAAAAPXBkOEpc8hIPSTdMkVnoCeS70XA"; 

function ContactUs() {
  const [alert, setAlert] = useState({ message: "", type: "", show: false });
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      setAlert({ message: "Please complete the reCAPTCHA", type: "error", show: true });
      return;
    }
    emailjs.sendForm('service_cvnl8ur', 'template_dyf4ify', e.target, 'xYyIUoO_aUAHolSI1')
      .then((result) => {
        console.log(result.text);
        setAlert({ message: "Message Sent Successfully!", type: "success", show: true });
        e.target.reset(); // Reset form fields
        setTimeout(() => setAlert({ ...alert, show: false }), 3000);
      }, (error) => {
        console.log(error.text);
        setAlert({ message: "Message failed to send. Please try again.", type: "error", show: true });
        setTimeout(() => setAlert({ ...alert, show: false }), 3000);
      });
  };
  

  return (
    <Container fluid className="contact-us-section">
      <Container>
        <h1 className="contact-heading">
          <strong className="purple">Contact Us</strong>
        </h1>
        <Row>
          <Col md={6} className="contact-info">
            <h3 className="purple">Get in Touch</h3>
            <p>
              If you have any questions or just want to get in touch, feel free to reach out to us using the form below.
            </p>
            <Form onSubmit={sendEmail}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Your Email" required />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={4} placeholder="Your Message" required />
              </Form.Group>
              <ReCAPTCHA
                sitekey={SITE_KEY}
                onChange={(value) => setRecaptchaValue(value)}
              />
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
          <Col md={6} className="contact-details">
          <h3>Our Contact</h3>
<p>
  <strong>Phone:</strong> 
  <a href="tel:+919353853381">+91 9353853381</a> / 
  <a href="tel:+918296553074">+91 8296553074</a><br />
  <strong>Email:</strong> 
  <a href="mailto:phrsolutions.business@example.com">phrsolutions.business@example.com</a>
</p>
<Button
  variant="success"
  href="https://wa.me/+919353853381"
  target="_blank"
  className="whatsapp-button"
>
  <AiOutlineWhatsApp style={{ fontSize: "1.5em", color: "white" }} />
  <span style={{ marginLeft: "8px", color: "white" }}>Chat with us</span>
</Button>

          </Col>
        </Row>
      </Container>

      <FloatingAlert message={alert.message} type={alert.type} show={alert.show} />
    </Container>
  );
}

export default ContactUs;
