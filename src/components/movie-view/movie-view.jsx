import { Button, Image } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movie, onCloseClick }) => {
  let director = movie.director;
  let genre = movie.genre;
  return (
    <div className="mt-5 movie-view">
      <div className="movie-image">
        <img src={movie.image} />
      </div>
      <br />
      <div>
        <div>
          <span className="fw-bold">Title: </span>
          <span>{movie.title}</span>
        </div>
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
        <Button className="mb-4" variant="primary" onClick={onCloseClick}>
          Close
        </Button>
      </div>
    </div>
  );
};
