import React, { useState } from "react";
import { Form, Button,Card, CardBody } from "react-bootstrap";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic for submitting the form data
    console.log("Form submitted:", formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
    });
  };

  return (

    <div  style={{ display:'flex',justifyContent:'center',marginTop:'18px'}}>
 

<Card style={{ width: '36rem',backgroundColor:"whitesmoke" }}>
      <CardBody />
      <Card.Body>
        <Card.Title><h3>Contact Us</h3></Card.Title>
        <Card.Text>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Form.Group>
        </Form>
          .
        </Card.Text>

        
    <div  style={{ display:'flex',justifyContent:'center'}}>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Card.Body>
    </Card>
    </div>
     

        
     
   
  );
};

export default ContactUsForm;
