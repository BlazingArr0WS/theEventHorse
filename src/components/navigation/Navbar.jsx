import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./navigation.css";
import HamburgerIcon from "../../assets/icons/hamburger.svg";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <Navbar>
      <NavbarBrand href="/" className="mr-auto gMkfmzcfx2">
        The Event Horse
      </NavbarBrand>
      <img
        src={HamburgerIcon}
        onClick={toggleNavbar}
        className="navbar-toggler"
        height="40"
        alt="navbarToggler"
      />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar className="h2N1FIQlJu">
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/dakotaharmon/">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/BlazingArr0WS/theEventHorse">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default NavBar;
