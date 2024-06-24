import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({ movies }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  let favMovies = movies.filter((movie) => user.favMovies.includes(movie.id));

  console.log(user);
  return (
    <Container>
      <Row>
        <Col>
          <Card bg="light" className="mt-4" style={{ width: '75%' }}>
            <Card.Body>
              <div>
                <div>
                  <h3>My Info</h3>
                  <span>Username: </span>
                  <span>{user.username}</span>
                  <br />
                </div>
                <div>
                  <span>Email: </span>
                  <span>{user.email}</span>
                  <br />
                </div>
                <div>
                  <span>Birthday: </span>
                  <span>{user.birthday}</span>
                </div>
              </div>
              <Link to={`/users/${encodeURIComponent(user.username)}`}>
                <Button
                  type="button"
                  className="mt-4 me-5"
                  variant="outline-primary"
                >
                  Edit Profile
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Row>
          <h2 className="my-4">Favourite Movies</h2>

          {favMovies.map((movie) => (
            <Col key={movie.id} lg={3} md={4} className="my-3">
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>

        <Link to={"/"}>
          <Button type="button" className="my-3" variant="outline-primary">
            Back to Home
          </Button>
        </Link>
      </Row>
    </Container>
  );
};
