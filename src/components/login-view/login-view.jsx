import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from 'react-bootstrap/Alert';

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const emptyForm = () => {
    setUsername(""), setPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: username.toLowerCase(),
      password: password,
    };
    fetch("https://movie-api-v2dh.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          handleShow();
          emptyForm();
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <>
    <h1 style={{ color: "rgb(182, 45, 29)" }} className="my-4 fw-bold">Log In</h1>
      <Form className="m-3" onSubmit={handleSubmit}>
        <Form.Group controlId="loginUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength="5"
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="loginPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
          />
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your username or password is incorrect.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
