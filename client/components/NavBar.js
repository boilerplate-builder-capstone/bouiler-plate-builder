import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';

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
      {!user ? (
        <Nav className="ml-auto">  
          <Nav.Link href="/#signin">Sign In/Create Account</Nav.Link>
        </Nav>
      ) : (
        <Nav className="ml-auto">
          <Nav.Link href="/#dashboard"><Avatar src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png" /></Nav.Link>
          <Nav.Link onClick={() => {logout();}}>Logout</Nav.Link>
        </Nav>
      )}
    </Navbar>
  );
}

export default NavBar;