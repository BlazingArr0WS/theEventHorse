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
// import Logo from "../../assets/logos/LogoHorse.svg";
import HamburgerIcon from "../../assets/icons/hamburger.svg";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <Navbar>
      <NavbarBrand href="/" className="mr-auto gMkfmzcfx2">
        {/* <img src={Logo} alt="navBrandLogo" href="/" height="50" /> */}
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
        <Nav navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default NavBar;
