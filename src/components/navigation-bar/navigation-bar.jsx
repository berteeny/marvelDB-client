import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";


export const NavBar = ({ user, onLoggedOut, emptySearch, handleInputChange, searchItem }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold"
          style={{ color: "rgb(182, 45, 29)" }}
        >
          MarvelFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Log In
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/" onClick={emptySearch}>
                  Movies
                </Nav.Link>
                <Nav.Link as={Link} to="/users" onClick={emptySearch}>
                  My Profile
                </Nav.Link>
                <Nav.Link className="me-4" onClick={onLoggedOut}>
                  Log Out
                </Nav.Link>
                <Form className="me-auto">
                  <Form.Group controlId="searchBar">
                    <Form.Control
                      type="text"
                      value={searchItem}
                      onChange={handleInputChange}
                      placeholder="Search by title"
                    />
                  </Form.Group>
                </Form>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
