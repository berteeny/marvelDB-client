import { Button, Image }  from "react-bootstrap";
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
          <span>Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
          <span>Release: </span>
          <span>{movie.release}</span>
        </div>
        <div>
          <span>Length: </span>
          <span>{movie.length}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie.description}</span>
        </div>
        <div>
          <br />
          <span>Director: </span> <br />
          <span>Name: </span>
          <span>{director.name}</span> <br />
          <span>Bio: </span>
          <span>{director.bio}</span> <br />
          <span>Birth: </span>
          <span>{director.birth}</span> <br />
          <span>Death: </span>
          <span>{director.death}</span>
        </div>
        <br />
        <div>
          <span>Genre: </span> <br />
          <span>Name: </span>
          <span>{genre.name}</span> <br />
          <span>Description: </span>
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
