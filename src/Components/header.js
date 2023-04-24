import React, { Component } from 'react';
import { Container, FormControl, Navbar, NavbarBrand, Form, Nav, Button } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from './logo192.png';

export default class Header extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                        <Container>
                            <NavbarBrand href="/">
                                <img
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />
                            </NavbarBrand>
                            <NavbarToggle aria-controls='responsive-navbar-nav' />
                            <Navbar.Collapse id='responsive-navbar-nav'>
                                <Nav className="me-auto">
                                    <Nav.Link key="home" href="/">Home</Nav.Link>
                                    <Nav.Link key="/about" href="/">About us</Nav.Link>
                                    <Nav.Link key="/contacts" href="/">Contacts</Nav.Link>
                                    <Nav.Link key="/blog" href="/">Blog</Nav.Link>
                                </Nav>
                                <Form className="ml-right d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-info">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        )
    }
}

