import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Make sure to import your custom CSS

function AppNavbar() {
    const navbarStyle = {
        backgroundColor: '#91d7d3',
        height:"90px"
    };
    
    return (
        <Navbar style={navbarStyle}  expand="lg" className="d-flex justify-content-around custom-navbar-height">
            <Navbar.Brand href="#home" className="ms-5">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-between'>
                <Nav className="me-auto">
                    <Nav.Link href="#home" className="ms-2">Medicine</Nav.Link>
                    <Nav.Link href="#link" className="ms-2">LabTests</Nav.Link>
                    <Nav.Link href="#link" className="ms-2">HealthCare</Nav.Link>
                    <Nav.Link href="#link" className="ms-2">Surgeries</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Form className="d-flex me-3" style={{ height: '40px', width: '400px' }}>
                    <FormControl type="text" placeholder="What Are U Looking For ?" className="me-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="ms-5 me-3">
                    <Nav.Link href="#home" className="ms-2">More</Nav.Link>
                    <Nav.Link href="#link" className="ms-2">Favourite</Nav.Link>
                    <Nav.Link href="#link" className="ms-2">Cart</Nav.Link>
                    <Nav.Link href="#link" className="ms-2">Login</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AppNavbar;
