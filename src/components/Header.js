import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './App.css';
import { FaRegUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <Navbar bg="white" expand="lg" className="border border-bottom-3">
      <Container className="p-3 bg-white">
        <NavLink to="/" className="h2 text-decoration-none text-primary me-5">BookStore CMS</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto m-2 my-lg-0"
            navbarScroll
          >
            <NavLink to="/" className="h5 me-4 link" activeClassName="link-active">Books</NavLink>
            <NavLink to="categories" className="h5 me-4 link" activeClassName="link-active">Categories</NavLink>

          </Nav>
          <NavLink to="/" className="d-flex">
            <FaRegUserCircle className="h3" />
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
