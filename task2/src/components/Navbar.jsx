import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './NavbarStyles.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="brand-logo d-flex align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSk_wt-PpqOKvAnXXMfMaFAdyvcezUuojIBk3yNMN6ydvT2PJg5VcYQ9jZk0gudp4Sgk&usqp=CAU"
              alt="Logo"
              className="navbar-logo"
            />
            <span className="ms-2 brand-text">TechSoft</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>

              <div className="auth-buttons d-flex ms-3">
                <Button variant="info" size="sm" className="me-2 login-btn">
                  Login
                </Button>
                <Button variant="info" size="sm" className="signup-btn">
                  Sign Up
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
