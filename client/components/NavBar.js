import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar(props) {
  const { user, logout } = props;

  return (
    <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Boilerplate Builder</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/#build">Build!</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="/#about">About</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        {!user.user ? (
          <Nav.Link href="/#signin">Sign In/Create Account</Nav.Link>
        ) : (
          <Nav.Link
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
}

export default NavBar;
