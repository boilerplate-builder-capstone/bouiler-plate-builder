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
      <Navbar.Brand href="/">
        <img
          src="logo.png"
          className="d-inline-block align-top"
          alt="Boilerplate Builder logo"
        />
      </Navbar.Brand>
        <Nav className="ml-auto" id="navgroup">
          <Nav.Link href="/#build">Build!</Nav.Link>
          <Nav.Link href="/#about">About</Nav.Link>
          <Nav.Link href="/#forum">Forum</Nav.Link>
        {!user.user ? (
            <Nav.Link href="/#signin">Sign In/Create Account</Nav.Link>
        ) : (
          <Nav >
            <Nav.Link href="/#dashboard">
              {!user.user.github ? <Avatar src={user.user.icon} /> : <Avatar src={user.user.github.avatar_url}/>}
            </Nav.Link>
            <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
          </Nav>
        )}
        </Nav>

    </Navbar>
  );
}

export default NavBar;