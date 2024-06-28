import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const emptyForm = () => {
    setUsername(""), setPassword(""), setEmail(""), setBirthday("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: username.toLowerCase(),
      password: password,
      email: email.toLowerCase(),
      birthday: birthday,
    };

    fetch("https://movie-api-v2dh.onrender.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        window.location.assign("/login");
      } else {
        handleShow();
        emptyForm();
      }
    });
  };

  return (
    <>
      <Form className="m-3" onSubmit={handleSubmit}>
        <Form.Group controlId="signupUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength="6"
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="signupPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="signupEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="signupBirthday">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="my-3">
          This username is unavailable. Please try another.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
