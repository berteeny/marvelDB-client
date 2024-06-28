import { Button, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);

  const [isFav, setIsFav] = useState(
    user.favMovies ? user.favMovies.indexOf(movieId) >= 0 : false
  );
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  // for modals
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  //"favourite" toggle switch functions
  const addFavMovie = () => {
    fetch(
      `https://movie-api-v2dh.onrender.com/users/${user.username}/movies/${movieId}`,
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        updatedUser = {
          ...user,
          favMovies: res.favMovies,
        };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setIsFav(res.favMovies.indexOf(movieId) >= 0);
        handleShow();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const removeFavMovie = () => {
    fetch(
      `https://movie-api-v2dh.onrender.com/users/${user.username}/movies/${movieId}`,
      {
        method: "DELETE",
        body: JSON.stringify(movie),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        updatedUser = {
          ...user,
          favMovies: res.favMovies,
        };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setIsFav(res.favMovies.indexOf(movieId) >= 0);
        handleShow();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = () => {
    if (isFav) {
      removeFavMovie();
    } else {
      addFavMovie();
    }
  };

  let director = movie.director;
  let genre = movie.genre;
  const altText = `${movie.title} cover art`;
  return (
    <div className="mt-5 movie-view">
      <div className="movie-image">
        <img src={movie.image} alt={altText} type="img" />
      </div>
      <br />
      <div>
        <div className="fs-3 mt-3">
          <span className="fw-bold">Title: </span>
          <span>{movie.title}</span>
        </div>
        <br />
        <div>
          <span className="fw-bold">Release: </span>
          <span>{movie.release}</span>
        </div>
        <div>
          <span className="fw-bold">Length: </span>
          <span>{movie.length}</span>
        </div>
        <div>
          <span className="fw-bold">Description: </span>
          <span>{movie.description}</span>
        </div>
        <div>
          <br />
          <span className="fw-bold">Director: </span> <br />
          <span className="fw-semibold">Name: </span>
          <span>{director.name}</span> <br />
          <span className="fw-semibold">Bio: </span>
          <span>{director.bio}</span> <br />
          <span className="fw-semibold">Birth: </span>
          <span>{director.birth}</span> <br />
          <span className="fw-semibold">Death: </span>
          <span>{director.death}</span>
        </div>
        <br />
        <div>
          <span className="fw-bold">Genre: </span> <br />
          <span className="fw-semibold">Name: </span>
          <span>{genre.name}</span> <br />
          <span className="fw-semibold">Description: </span>
          <span>{genre.description}</span>
        </div>
        <br />
        <Button className="mb-4 me-5" onClick={handleChange}>
          {isFav ? "unFavourite" : "Favourite"}
        </Button>
        <div>
          <Link to={`/`}>
            <Button
              type="button"
              className="mb-4  me-3"
              variant="outline-primary"
            >
              Back to Movies
            </Button>
          </Link>
          <Link to={`/users`}>
            <Button type="button" className="mb-4" variant="outline-primary">
              See My Profile
            </Button>
          </Link>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isFav
              ? "Movie added to your Favourites"
              : "Movie removed from your Favourites"}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
