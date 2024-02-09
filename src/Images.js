import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";

const productsArr = [
  {
    heading:"Album 1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
  },
  {
    heading:"Album 2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
  },
  {
    heading:"Album 3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
  },
  {
    heading:"Album 4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
  }
];

function ShapeExample() {
  return (
    <Container>
      <Row>
        {productsArr.map((product) => (
          <Col xs={6} md={6} lg={6}>
            <h2>{product.heading}</h2>
            <Image src={product.imageUrl} thumbnail />
            <h5>{product.title}</h5>
            <p>${product.price}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ShapeExample;
