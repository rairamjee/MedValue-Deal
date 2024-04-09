import React from 'react';
import { Navbar, Nav,  Form, FormControl, Button } from 'react-bootstrap';
import "./Navbar.css";

function ResponsiveNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#91d7d3'}}  className='p-3'>
      <Navbar.Brand href="#home">MedValueDeal</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Medicine</Nav.Link>
          <Nav.Link href="#pricing">LabTest</Nav.Link>
          <Nav.Link href="#features">HealthCare</Nav.Link>
          <Nav.Link href="#pricing">Surgeries</Nav.Link>
        </Nav>
        <Form className="d-flex features">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="me-auto features">
          <Nav.Link href="#features">More</Nav.Link>
          <Nav.Link href="#pricing">Favourite</Nav.Link>
          <Nav.Link href="#features">Cart</Nav.Link>
          <Nav.Link href="#pricing">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ResponsiveNavbar;
