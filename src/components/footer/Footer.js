import React from "react";

import { Row, Col } from "react-bootstrap";

import ios from "./ios.jpg";

import playStore from "./playStore.png"

import "./footer.css";

const Footer = () => {


  return (
    <div className="footer">
      <div className="part1">
        <Row>
          <Col xs={6} md={3} className = "col">
            <h3>Quick Links </h3>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Home</a>
            </p>
          </Col>
          <Col xs={6} md={3} className = "col">
            <h3>Quick Links</h3>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Home</a>
            </p>
          </Col>
          <Col xs={6} md={3} className = "col">
            <h3>Quick Links</h3>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Home</a>
            </p>
          </Col>
          <Col xs={6} md={3} className = "col">
            <h3>Quick Links</h3>
            <p>
              <a href="/"><img src={ios} alt="" height = "45vh" ></img></a>
            </p>
            <p>
              <a href="/"><img src={playStore} alt="" height = "60vh"/></a>
            </p>
          </Col>
        </Row>
      </div>
      <div className="divider"></div>
      <div className="part2">
        <p className="copyRight">Copyright © 2020 The Fourth Wall</p>
        <p className="brand">Powered by The Fourth Wall</p>
      </div>
    </div>
  );
};
export default Footer;
