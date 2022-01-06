import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h4>Łódzkie Zoo</h4>
          </Col>
          <Col>
            Aplikacja gr VI przedmiotu Wykorzystanaie wzorców technologiach
            internetowych
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;