import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

export const ProfileEditView = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState(user.username || "");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.email || "");
  const [birthday, setBirthday] = useState(user.birthday || "");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
      email: email,
      birthday: birthday,
    };

    fetch(`https://movie-api-v2dh.onrender.com/users/${user.username}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("Profile update successful");
      } else {
        alert("Profile update failed");
      }
    });
  };

  const deleteProfile = (event) => {
    event.preventDefault();

    const deleteInfo = async () => {
      await fetch(
        `https://movie-api-v2dh.onrender.com/users/${user.username}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        if (response.ok) {
          alert("Account deleted");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          window.location.reload();
        } else {
          alert("Deletion failed");
        }
      });
    };

    deleteInfo();
  };

  return (
    <>
      <h1 className="my-4">Edit your details</h1>
      <Form className="m-3" onSubmit={handleSubmit}>
        <Form.Group controlId="signupUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="signupBirthday">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Col className="mt-5 d-flex justify-content-between">
        <Link to={"/users"}>
          <Button type="button" variant="outline-primary">
            Back
          </Button>
        </Link>
        <Button type="button" variant="outline-primary" onClick={deleteProfile}>
          Delete profile
        </Button>
      </Col>
    </>
  );
};
