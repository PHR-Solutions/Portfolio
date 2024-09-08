import React from "react";
import Card from "react-bootstrap/Card";

function ServicesCards(props) {
  return (
    <Card className="services-card-view">
      <a href={props.detailedLink} target="_blank" rel="noopener noreferrer">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      </a>
      <Card.Body>
        <Card.Title style={{ color: 'purple', textAlign: "left" }}><h2>{props.title}</h2></Card.Title>
        {props.subtitle && (
          <h4 style={{ textAlign: 'left' }}>{props.subtitle}</h4>
        )}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ServicesCards;
