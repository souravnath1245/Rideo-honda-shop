import { Box } from "@mui/system";
import React from "react";
import { Container, Nav, Navbar,Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../hooks/useAuth";

const Navlink = () => {
  const { user, userLogOut } = useAuth();
  const handleLogOut = () => {
    userLogOut();
  };

  return (
    <>
      <Navbar fixed="top" expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand as={HashLink} to="/">
            Reido-Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav.Link as={HashLink} to="/home#banner">
              Home
            </Nav.Link>

            <Nav.Link as={HashLink} to="/home#products">
              Products
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#extra">
              Speciality
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#reviews">
              Reviews
            </Nav.Link>

            {user.email ? (
              <Box >
                <Nav.Link as={HashLink} to="/dashboard">
                  DashBoard
                </Nav.Link>
               
                  <Nav.Link
                    onClick={handleLogOut}
                    className="btn btn-outline-primary text-white mx-2"
                  >
                    LogOut
                  </Nav.Link>
                
              </Box>
            ) : (
              <Nav.Link as={HashLink} to="/login">
                Login
              </Nav.Link>
            )}
            {user?.email ? (
              <Navbar.Text>
                Signed in as: <a href="#login">{user?.displayName}</a>
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
