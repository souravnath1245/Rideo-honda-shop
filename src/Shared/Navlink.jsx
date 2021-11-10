import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useFirebase from "../hooks/useFirebase";

const Navlink = () => {
  const { user, userLogOut } = useFirebase();
  const handleLogOut = () => {
    userLogOut();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home">
              Home
            </Nav.Link>
            {user.email ? (
              <button
              onClick={handleLogOut}
                className="btn btn-outline-primary text-white mx-2"
              >
                LogOut
              </button>
            ) : (
              <Nav.Link as={HashLink} to="/login">
                Login
              </Nav.Link>
            )}
            {user?.email ? (
              <Navbar.Text>
                Signed in as: <a href="#login">{user?.displayName }</a>
              </Navbar.Text>
            ) : (
              <p></p>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navlink;
