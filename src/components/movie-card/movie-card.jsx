import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

//movie card function
export const MovieCard = ({ movie, onMovieClick }) => {
  const altText = `${movie.title} cover art`;
  return (
    <Card className="h-100 bg-light">
      <Card.Img variant="top" alt={altText} src={movie.image} type="img" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          Release: {movie.release} <br />
          Runtime: {movie.length}
        </Card.Text>
        <Button
          type="button"
          variant="outline-info"
          onClick={() => {
            onMovieClick(movie);
          }}
        >
          See More
        </Button>
      </Card.Body>
    </Card>
  );
};

//prop constraints defined here
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    length: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      birth: PropTypes.string.isRequired,
      death: PropTypes.string.isRequired,
    }).isRequired,
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
