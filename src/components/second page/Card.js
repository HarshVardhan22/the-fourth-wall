import React from "react";



import "./Card.css";

import {Row, Col} from "react-bootstrap";

const Card = ({
  img = "https://external-preview.redd.it/Mf1p5E_K0VHvz428ogARhLaXCnbpDogey1WbYAKVEoQ.png?auto=webp&s=fedb4ae76fd5e8c42dde4c21b38b31d968e104da",
  heading = "Heading",
  details = "Sub-heading containing detailed info about the card",
  btnName = "Button",
  button = "Link",
}) => {
  return (
    <div>
      <Row>
        <Col>
          <div
            className="card"
            style={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "450px",
              backgroundPosition: "center",
            }}
          >
            <h3 className="cardHeading"> {heading} </h3>
            <p className="cardText"> {details} </p>
            <button className="cardBtn" href={button}>
              {btnName}
            </button>
          </div>
        </Col>
        {/* <Col xs = {12} md = {4}>2 of 3</Col>
          <Col xs = {12} md = {4}>3 of 3</Col> */}
      </Row>
    </div>
  );
};

export default Card;