import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">Mi Aplicación</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">Inicio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about">Acerca de</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;