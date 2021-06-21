import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';
import { useHistory } from "react-router-dom";

function NavBar(props) {
  const { user, logout } = props;
  let history = useHistory();

  function logoutUser(){
    logout();
    history.push("/")
  }

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
        <Nav.Link href="/#forum">Forum</Nav.Link>
      </Nav>
      {!user.user ? (
        <Nav className="ml-auto">  
          <Nav.Link href="/#signin">Sign In/Create Account</Nav.Link>
        </Nav>
      ) : (
        <Nav className="ml-auto">
          <Nav.Link href="/#dashboard">
            {!user.user.github ? <Avatar src={user.user.icon} /> : <Avatar src={user.user.github.avatar_url}/>}
          </Nav.Link>
          <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
        </Nav>
      )}
    </Navbar>
  );
}

export default NavBar;