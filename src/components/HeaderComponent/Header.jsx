import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { FaPowerOff } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="custom-navbar" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="d-flex justify-content-center align-items-center">
            <GiHamburgerMenu className="me-2" />
            Menu
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="mr-auto ">
              <Nav.Link className="d-flex justify-content-center align-items-center text-light me-2">
                <GoHome className="me-2" size={30} />
                Straight2Bank
              </Nav.Link>
              <Nav.Link className="d-flex justify-content-center align-items-center text-light me-2">
                <div className="profile-name-icon me-2">R</div>
                Welcome Rahul
              </Nav.Link>
              <NavDropdown
                title="Group ID: RAHUL"
                id="basic-nav-dropdown"
                className="d-flex justify-content-center align-items-center text-light"
              ></NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="position-relative me-5">
                <span className="notification-count-area"> 4</span>
                <FaRegBell size={20} />
              </div>
              <FaPowerOff size={20} className="me-2" />
              <p className="m-0">Logout</p>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
