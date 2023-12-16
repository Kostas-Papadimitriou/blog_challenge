import React from "react";
import { Card, Col, Container, Navbar } from "react-bootstrap";

const Footer = () => {
  let fullYear = new Date().getFullYear();
  return (
    <Navbar fixed="bottom" bg="blue" variant="dark">
      <Container>
        <Col lg={12} className="text-center text-muted">
          <div>{fullYear} All Rights reserved by K.Papadimitirou</div>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Footer;
