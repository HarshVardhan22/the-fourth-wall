import React from "react";
import "../../App.css";
import Items from "./Items";
import Card from "./Card";

import { Row, Col } from "react-bootstrap";
const SecondPage = () =>{
    return (
      <div className="bg2">
        <div className="item">
          <Items />
        </div>

        <div className="container">
          <Row>
            <Col xs={8} md={4}>
              <Card />
            </Col>
            <Col xs={8} md={4}>
              <Card />
            </Col>
            <Col xs={8} md={4}>
              <Card />
            </Col>
          </Row>
        </div>
      </div>
    );
}

export default SecondPage;