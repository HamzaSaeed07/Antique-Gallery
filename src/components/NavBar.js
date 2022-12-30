import "../Style/NavBar.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function NavBar () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div>
    <nav class="navbar">
      <div id="trapezoid">
        <a class="sub-home" href="#">Home</a>
        <a href="#About" class="expandHome">Catagories</a>
        <a href="#About" class="expandHome">Products</a>
     <div class="subnav">
     <button class="subnavbtn" onClick={handleShow}>Auction<i class="fa fa-caret-down"></i></button>
    </div>
  </div>
</nav>


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Password"
                autoFocus
              />
            </Form.Group>

          <span>  <p>Don't have an account? </p><Button variant="secondary" >
            SignUp
          </Button></span>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      
</div>
    )
}
export default NavBar;