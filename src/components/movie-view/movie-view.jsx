import { Button, Image } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);

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
        <Link to={`/`}>
          <Button type="button" className="mb-4" variant="primary">
            Close
          </Button>
        </Link>
      </div>
    </div>
  );
};
