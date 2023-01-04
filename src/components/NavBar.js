import "../Style/NavBar.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <div className="fixed-top">
    <Navbar bg="transparent" expand="lg" >
      <Container >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-around">
          <Nav style={{ maxHeight: "120px" }} navbarScroll>
            <Nav.Link href="#hero" ><p style={{color:'#FFD700'}}>Home</p></Nav.Link>
            <Nav.Link href="#services"><p style={{color:'#FFD700'}}>Products</p></Nav.Link>
            <Nav.Link href="#action1"><p style={{color:'#FFD700'}}>Auction</p></Nav.Link>
            <Nav.Link href="#action2"><p style={{color:'#FFD700'}}>Login</p></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
export default NavBar;
